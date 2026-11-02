(function () {
  "use strict";

  var root = document.documentElement;
  var config = window.MMI_CONFIG || {};
  var waNumber = config.whatsappNumber || "628115051123";
  var defaultMessages = {
    id: config.messageId || "Assalamu'alaikum, saya ingin menjadwalkan kunjungan ke MMI Al Mazaya untuk anak saya yang berusia ___ tahun.",
    en: config.messageEn || "Assalamu'alaikum, I'd like to schedule a visit to MMI Al Mazaya for my child, aged ___ years."
  };
  var meta = {
    id: {
      title: "MMI Al Mazaya | Preschool MMI Banjarmasin",
      description: "Satu-satunya preschool MMI di Banjarmasin. Montessori untuk usia 18 bulan sampai 6,5 tahun: Playgroup, Nursery 1, Nursery 2, Kindergarten 1, Kindergarten 2."
    },
    en: {
      title: "MMI Al Mazaya | MMI Preschool in Banjarmasin",
      description: "The only MMI preschool in Banjarmasin. Montessori for ages 18 months to 6.5 years: Playgroup, Nursery 1, Nursery 2, Kindergarten 1, Kindergarten 2."
    }
  };
  var promptText = {
    id: "Sentuh satu balok untuk melihat faktanya.",
    en: "Tap a block to see one fact."
  };
  var currentLang = "id";
  var activeBlock = null;

  function readStoredLang() {
    try {
      var value = window.localStorage.getItem("mmi-lang");
      return value === "en" || value === "id" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem("mmi-lang", lang);
    } catch (error) {
      /* Storage can be unavailable in private modes. The toggle still works. */
    }
  }

  function updateWhatsAppLinks(lang) {
    var links = document.querySelectorAll("[data-wa]");
    links.forEach(function (link) {
      var custom = lang === "en" ? link.getAttribute("data-wa-en") : link.getAttribute("data-wa-id");
      var message = custom || defaultMessages[lang];
      link.setAttribute("href", "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(message));
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
  }

  function updateMeta(lang) {
    var data = meta[lang];
    document.title = data.title;
    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", data.description);
    }
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", data.title);
    }
    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", data.description);
    }
  }

  function factText(block, lang) {
    return lang === "en" ? block.getAttribute("data-fact-en") : block.getAttribute("data-fact-id");
  }

  function renderActiveFact() {
    var output = document.querySelector(".block-fact");
    if (!output) {
      return;
    }
    if (activeBlock) {
      output.textContent = factText(activeBlock, currentLang);
    } else {
      output.textContent = promptText[currentLang];
    }
  }

  function setLang(lang, persist) {
    currentLang = lang === "en" ? "en" : "id";
    root.setAttribute("lang", currentLang);
    root.setAttribute("data-lang", currentLang);

    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-set-lang") === currentLang));
    });

    updateMeta(currentLang);
    updateWhatsAppLinks(currentLang);
    renderActiveFact();

    if (persist) {
      storeLang(currentLang);
    }
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      setLang(button.getAttribute("data-set-lang"), true);
    });
  });

  var blocks = Array.prototype.slice.call(document.querySelectorAll(".block"));
  var blockOutput = document.querySelector(".block-fact");

  blocks.forEach(function (block) {
    block.addEventListener("click", function () {
      activeBlock = block;
      blocks.forEach(function (item) {
        item.classList.toggle("is-active", item === block);
      });
      if (blockOutput) {
        blockOutput.textContent = factText(block, currentLang);
        blockOutput.classList.remove("is-changing");
        void blockOutput.offsetWidth;
        blockOutput.classList.add("is-changing");
      }
    });
  });

  var hero = document.querySelector("#hero");
  if (hero) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        hero.classList.add("is-set");
      });
    });
  }

  var header = document.querySelector(".site-header");
  var menuToggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector("#site-nav");

  function closeMenu() {
    if (!header || !menuToggle) {
      return;
    }
    header.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (header && menuToggle) {
    menuToggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    if (nav) {
      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", function (event) {
      if (header.classList.contains("is-open") && !header.contains(event.target)) {
        closeMenu();
      }
    });
  }

  var lastScrolled = false;
  function onScroll() {
    if (!header) {
      return;
    }
    var scrolled = window.scrollY > 8;
    if (scrolled !== lastScrolled) {
      header.classList.toggle("is-scrolled", scrolled);
      lastScrolled = scrolled;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var details = Array.prototype.slice.call(document.querySelectorAll(".faq__list details"));
  details.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) {
        return;
      }
      details.forEach(function (other) {
        if (other !== item) {
          other.open = false;
        }
      });
    });
  });

  /* Facility carousel: a curved, swipeable row of placeholder cards. */
  var carousel = document.querySelector("[data-carousel]");
  if (carousel) {
    var carouselViewport = carousel.querySelector(".facility-carousel__viewport");
    var carouselTrack = carousel.querySelector("[data-carousel-track]");
    var carouselSlides = carouselTrack ? Array.prototype.slice.call(carouselTrack.querySelectorAll("[data-slide]")) : [];
    var carouselPrev = carousel.querySelector("[data-carousel-prev]");
    var carouselNext = carousel.querySelector("[data-carousel-next]");
    var carouselCurrent = carousel.querySelector("[data-carousel-current]");
    var carouselIndex = 0;
    var swipeStartX = null;
    var swipeStartY = null;

    function padNumber(value) {
      return value < 10 ? "0" + value : String(value);
    }

    function layoutCarousel() {
      if (!carouselViewport || !carouselTrack || !carouselSlides.length) {
        return;
      }

      var trackStyle = window.getComputedStyle(carouselTrack);
      var gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 24;
      var cardWidth = carouselSlides[0].offsetWidth;
      var center = (carouselViewport.clientWidth - cardWidth) / 2;
      var compact = window.matchMedia("(max-width: 760px)").matches;

      carouselTrack.style.transform = "translate3d(" + (center - carouselIndex * (cardWidth + gap)) + "px, 0, 0)";

      carouselSlides.forEach(function (slide, slideIndex) {
        var offset = slideIndex - carouselIndex;
        var distance = Math.abs(offset);

        slide.classList.toggle("is-active", offset === 0);
        slide.style.setProperty("--slide-y", (compact ? distance * 8 : distance * 16 + distance * distance * 10) + "px");
        slide.style.setProperty("--slide-rotate", (compact ? 0 : offset * 1.8) + "deg");
        slide.style.setProperty("--slide-scale", compact ? "1" : String(Math.max(0.84, 1 - distance * 0.045)));
        slide.style.zIndex = String(10 - distance);
        slide.setAttribute("aria-hidden", distance > 2 ? "true" : "false");
      });

      if (carouselCurrent) {
        carouselCurrent.textContent = padNumber(carouselIndex + 1);
      }

      if (carouselPrev) {
        carouselPrev.disabled = carouselIndex === 0;
      }

      if (carouselNext) {
        carouselNext.disabled = carouselIndex === carouselSlides.length - 1;
      }
    }

    function goToSlide(nextIndex) {
      carouselIndex = Math.max(0, Math.min(carouselSlides.length - 1, nextIndex));
      layoutCarousel();
    }

    if (carouselPrev) {
      carouselPrev.addEventListener("click", function () {
        goToSlide(carouselIndex - 1);
      });
    }

    if (carouselNext) {
      carouselNext.addEventListener("click", function () {
        goToSlide(carouselIndex + 1);
      });
    }

    carouselSlides.forEach(function (slide, slideIndex) {
      slide.addEventListener("click", function () {
        goToSlide(slideIndex);
      });
    });

    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToSlide(carouselIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToSlide(carouselIndex + 1);
      }
    });

    if (carouselViewport) {
      carouselViewport.addEventListener("pointerdown", function (event) {
        if (event.pointerType === "mouse") {
          return;
        }
        swipeStartX = event.clientX;
        swipeStartY = event.clientY;
      });

      carouselViewport.addEventListener("pointerup", function (event) {
        if (swipeStartX === null) {
          return;
        }

        var deltaX = event.clientX - swipeStartX;
        var deltaY = event.clientY - swipeStartY;

        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
          goToSlide(carouselIndex + (deltaX < 0 ? 1 : -1));
        }

        swipeStartX = null;
        swipeStartY = null;
      });

      carouselViewport.addEventListener("pointercancel", function () {
        swipeStartX = null;
        swipeStartY = null;
      });
    }

    window.addEventListener("resize", function () {
      window.requestAnimationFrame(layoutCarousel);
    });

    layoutCarousel();
    window.addEventListener("load", layoutCarousel);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(layoutCarousel);
    }
  }

  var stored = readStoredLang();
  setLang(stored || "id", false);

  /* Reveal boxes, cards and section heads once the browser is ready. */
  if ("IntersectionObserver" in window) {
    var revealTargets = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.14
    });
    revealTargets.forEach(function (target) {
      revealObserver.observe(target);
    });
    root.classList.add("js-reveal-ready");
  }
})();
