"use strict";

// //Spollers
const spollersArray = document.querySelectorAll("[data-spollers]");
if (spollersArray.length > 0) {
  let t = Array.from(spollersArray).filter(function (e, t, o) {
    return !e.dataset.spollers.split(",")[0];
  });
  t.length > 0 && l(t);
  let o = Array.from(spollersArray).filter(function (e, t, o) {
    return e.dataset.spollers.split(",")[0];
  });
  if (o.length > 0) {
    let r = [];
    o.forEach((e) => {
      let t = e.dataset.spollers,
        o = {},
        s = t.split(",");
      (o.value = s[0]),
        (o.type = s[1] ? s[1].trim() : "max"),
        (o.item = e),
        r.push(o);
    });
    let s = r.map(function (e) {
      return (
        "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
      );
    });
    (s = s.filter(function (e, t, o) {
      return o.indexOf(e) === t;
    })).forEach((e) => {
      let t = e.split(","),
        o = t[1],
        s = t[2],
        a = window.matchMedia(t[0]),
        i = r.filter(function (e) {
          if (e.value === o && e.type === s) return !0;
        });
      a.addListener(function () {
        l(i, a);
      }),
        l(i, a);
    });
  }
  function l(e, t = !1) {
    e.forEach((e) => {
      (e = t ? e.item : e),
        t.matches || !t
          ? (e.classList.add("_init"), a(e), e.addEventListener("click", i))
          : (e.classList.remove("_init"),
            a(e, !1),
            e.removeEventListener("click", i));
    });
  }
  function a(e, t = !0) {
    let o = e.querySelectorAll("[data-spoller]");
    o.length > 0 &&
      o.forEach((e) => {
        t
          ? (e.removeAttribute("tabindex"),
            e.classList.contains("_active") ||
              (e.nextElementSibling.hidden = !0))
          : (e.setAttribute("tabindex", "-1"),
            (e.nextElementSibling.hidden = !1));
      });
  }
  function i(e) {
    let t = e.target;
    if (t.hasAttribute("data-spoller") || t.closest("[data-spoller]")) {
      let o = t.hasAttribute("data-spoller") ? t : t.closest("[data-spoller]"),
        r = o.closest("[data-spollers]"),
        s = !!r.hasAttribute("data-one-spoller");
      r.querySelectorAll("._slide").length ||
        (s && !o.classList.contains("_active") && n(r),
        o.classList.toggle("_active"),
        _slideToggle(o.nextElementSibling, 500)),
        e.preventDefault();
    }
  }
  function n(e) {
    let t = e.querySelector("[data-spoller]._active");
    t && (t.classList.remove("_active"), _slideUp(t.nextElementSibling, 500));
  }
}



// //SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

if (document.querySelector(".team .team__body")) {
  new Swiper(".team .team__body", {
    centeredSlides: false,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      // 480: {
      // 	slidesPerView: 1,
      // 	spaceBetween: 20,
      // },

      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1230: {
        grabCursor: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".team .slider-arrows__arrow--next",
      prevEl: ".team .slider-arrows__arrow--prev",
    },
    loop: false,
    // autoplay: {
    // 	delay: 2500,
    // 	disableOnInteraction: false,
    // },

    pagination: {
      el: ".team .swiper-pagination",
      clickable: true,
    },
  });
}

if (document.querySelector(".partners .partners__body")) {
  new Swiper(".partners .partners__body", {
    centeredSlides: false,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1230: {
        grabCursor: false,
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".partners .slider-arrows__arrow--next",
      prevEl: ".partners .slider-arrows__arrow--prev",
    },
    loop: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

if (document.querySelector(".projects .projects__body")) {
  new Swiper(".projects .projects__body", {
    centeredSlides: false,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        // slidesPerView: 4,
        // spaceBetween: 20,
      },
      1230: {
        grabCursor: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".projects .slider-arrows__arrow--next",
      prevEl: ".projects .slider-arrows__arrow--prev",
    },
    loop: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

if (document.querySelector(".closed-projects .closed-projects__body")) {
  new Swiper(".closed-projects .closed-projects__body", {
    centeredSlides: false,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1230: {
        grabCursor: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".closed-projects .slider-arrows__arrow--next",
      prevEl: ".closed-projects .slider-arrows__arrow--prev",
    },
    loop: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

if (document.querySelector(".awards .awards__body")) {
  new Swiper(".awards .awards__body", {
    centeredSlides: false,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      // 480: {
      // 	slidesPerView: 1,
      // 	spaceBetween: 20,
      // },

      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1230: {
        grabCursor: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".awards .slider-arrows__arrow--next",
      prevEl: ".awards .slider-arrows__arrow--prev",
    },
    loop: false,
    // autoplay: {
    // 	delay: 2500,
    // 	disableOnInteraction: false,
    // },

    pagination: {
      el: ".awards .swiper-pagination",
      clickable: true,
    },
  });
}


if (document.querySelector(".project-gallery .swiper")) {
  new Swiper(".project-gallery .swiper", {
    centeredSlides: false,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      // 480: {
      // 	slidesPerView: 1,
      // 	spaceBetween: 20,
      // },

      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1230: {
        grabCursor: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".project-gallery .slider-arrows__arrow--next",
      prevEl: ".project-gallery .slider-arrows__arrow--prev",
    },
    loop: false,
    autoplay: {
    	delay: 2500,
    	disableOnInteraction: false,
    },

    pagination: {
      el: ".project-gallery  .swiper-pagination",
      clickable: true,
    },
  });
}


   // Підключення YouTube IFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Функція для ініціалізації YouTube плеєрів
var players = [];

function onYouTubeIframeAPIReady() {
    var slides = document.getElementsByClassName('video-gallery__slide');
    
    for (var i = 0; i < slides.length; i++) {
        var element = slides[i].getElementsByClassName('yt-player')[0];
        var id = element.getAttribute('data-id');

        var player = new YT.Player(element, {
            height: '315',
            width: '560',
            videoId: id,
            playerVars: {
                autoplay: false,
                color: '#7fbc03',
                modestbranding: true,
                rel: 0
            }
        });
        players.push(player); // Додаємо кожен плеєр у масив players
    }
}

// Ініціалізація Swiper і зупинка відео на попередньому слайді при переключенні
if (document.querySelector(".video-gallery .swiper")) {
    var videoSlide = new Swiper(".video-gallery .swiper", {
        centeredSlides: false,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 20,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: ".video-gallery .slider-arrows__arrow--next",
            prevEl: ".video-gallery .slider-arrows__arrow--prev",
        },
        loop: false,
        pagination: {
            el: ".video-gallery .swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function () {
                var previousSlideIndex = videoSlide.previousIndex; // Індекс попереднього слайду
                if (players[previousSlideIndex]) {
                    players[previousSlideIndex].pauseVideo(); // Зупиняємо відео на попередньому слайді
                }
            }
        }
    });
}
///////////////////////////////////////
if (document.querySelector(".hero .swiper")) {
  new Swiper(".hero .swiper", {
    centeredSlides: false,
    // grabCursor: false,
    slidesPerView: 1,
    autoHeight: true,
    // spaceBetween: 20,
    keyboard: {
      enabled: true,
    },


    // Navigation arrows
    navigation: {
      nextEl: ".hero .slider-arrows__arrow--next",
      prevEl: ".hero .slider-arrows__arrow--prev",
    },
    loop: false,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
  });
}

//MAP
(function (w) {
  var loadJS = function (src, cb) {
    "use strict";
    var ref = w.document.getElementsByTagName("script")[0];
    var script = w.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
    if (cb && typeof cb === "function") {
      script.onload = cb;
    }
    return script;
  };
  // commonjs
  if (typeof module !== "undefined") {
    module.exports = loadJS;
  } else {
    w.loadJS = loadJS;
  }
})(typeof global !== "undefined" ? global : this);

// ===============================================
// 2 START IntersectionObserver
// ===============================================

/* W3C Intersection Observer Polyfill https://github.com/w3c/IntersectionObserver  */
(function (e, f) {
  function m(a) {
    this.time = a.time;
    this.target = a.target;
    this.rootBounds = a.rootBounds;
    this.boundingClientRect = a.boundingClientRect;
    this.intersectionRect = a.intersectionRect || l();
    this.isIntersecting = !!a.intersectionRect;
    a = this.boundingClientRect;
    a = a.width * a.height;
    var b = this.intersectionRect,
      b = b.width * b.height;
    this.intersectionRatio = a ? b / a : this.isIntersecting ? 1 : 0;
  }

  function c(a, b) {
    b = b || {};
    if ("function" != typeof a) throw Error("callback must be a function");
    if (b.root && 1 != b.root.nodeType) throw Error("root must be an Element");
    this._checkForIntersections = u(
      this._checkForIntersections.bind(this),
      this.THROTTLE_TIMEOUT
    );
    this._callback = a;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(b.rootMargin);
    this.thresholds = this._initThresholds(b.threshold);
    this.root = b.root || null;
    this.rootMargin = this._rootMarginValues
      .map(function (a) {
        return a.value + a.unit;
      })
      .join(" ");
  }

  function u(a, b) {
    var d = null;
    return function () {
      d ||
        (d = setTimeout(function () {
          a();
          d = null;
        }, b));
    };
  }

  function q(a, b, d, c) {
    "function" == typeof a.addEventListener
      ? a.addEventListener(b, d, c || !1)
      : "function" == typeof a.attachEvent && a.attachEvent("on" + b, d);
  }

  function r(a, b, d, c) {
    "function" == typeof a.removeEventListener
      ? a.removeEventListener(b, d, c || !1)
      : "function" == typeof a.detatchEvent && a.detatchEvent("on" + b, d);
  }

  function n(a) {
    try {
      var b = a.getBoundingClientRect();
    } catch (d) {}
    if (!b) return l();
    (b.width && b.height) ||
      (b = {
        top: b.top,
        right: b.right,
        bottom: b.bottom,
        left: b.left,
        width: b.right - b.left,
        height: b.bottom - b.top,
      });
    return b;
  }

  function l() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
    };
  }

  function t(a, b) {
    for (; b; ) {
      if (b == a) return !0;
      b = p(b);
    }
    return !1;
  }

  function p(a) {
    return (a = a.parentNode) && 11 == a.nodeType && a.host ? a.host : a;
  }
  if (
    "IntersectionObserver" in e &&
    "IntersectionObserverEntry" in e &&
    "intersectionRatio" in e.IntersectionObserverEntry.prototype
  )
    "isIntersecting" in e.IntersectionObserverEntry.prototype ||
      Object.defineProperty(
        e.IntersectionObserverEntry.prototype,
        "isIntersecting",
        {
          get: function () {
            return 0 < this.intersectionRatio;
          },
        }
      );
  else {
    var g = [];
    c.prototype.THROTTLE_TIMEOUT = 100;
    c.prototype.POLL_INTERVAL = null;
    c.prototype.USE_MUTATION_OBSERVER = !0;
    c.prototype.observe = function (a) {
      if (
        !this._observationTargets.some(function (b) {
          return b.element == a;
        })
      ) {
        if (!a || 1 != a.nodeType) throw Error("target must be an Element");
        this._registerInstance();
        this._observationTargets.push({
          element: a,
          entry: null,
        });
        this._monitorIntersections();
        this._checkForIntersections();
      }
    };
    c.prototype.unobserve = function (a) {
      this._observationTargets = this._observationTargets.filter(function (b) {
        return b.element != a;
      });
      this._observationTargets.length ||
        (this._unmonitorIntersections(), this._unregisterInstance());
    };
    c.prototype.disconnect = function () {
      this._observationTargets = [];
      this._unmonitorIntersections();
      this._unregisterInstance();
    };
    c.prototype.takeRecords = function () {
      var a = this._queuedEntries.slice();
      this._queuedEntries = [];
      return a;
    };
    c.prototype._initThresholds = function (a) {
      a = a || [0];
      Array.isArray(a) || (a = [a]);
      return a.sort().filter(function (a, d, c) {
        if ("number" != typeof a || isNaN(a) || 0 > a || 1 < a)
          throw Error("threshold must be a number between 0 and 1 inclusively");
        return a !== c[d - 1];
      });
    };
    c.prototype._parseRootMargin = function (a) {
      a = (a || "0px").split(/\s+/).map(function (a) {
        a = /^(-?\d*\.?\d+)(px|%)$/.exec(a);
        if (!a)
          throw Error("rootMargin must be specified in pixels or percent");
        return {
          value: parseFloat(a[1]),
          unit: a[2],
        };
      });
      a[1] = a[1] || a[0];
      a[2] = a[2] || a[0];
      a[3] = a[3] || a[1];
      return a;
    };
    c.prototype._monitorIntersections = function () {
      this._monitoringIntersections ||
        ((this._monitoringIntersections = !0),
        this.POLL_INTERVAL
          ? (this._monitoringInterval = setInterval(
              this._checkForIntersections,
              this.POLL_INTERVAL
            ))
          : (q(e, "resize", this._checkForIntersections, !0),
            q(f, "scroll", this._checkForIntersections, !0),
            this.USE_MUTATION_OBSERVER &&
              "MutationObserver" in e &&
              ((this._domObserver = new MutationObserver(
                this._checkForIntersections
              )),
              this._domObserver.observe(f, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))));
    };
    c.prototype._unmonitorIntersections = function () {
      this._monitoringIntersections &&
        ((this._monitoringIntersections = !1),
        clearInterval(this._monitoringInterval),
        (this._monitoringInterval = null),
        r(e, "resize", this._checkForIntersections, !0),
        r(f, "scroll", this._checkForIntersections, !0),
        this._domObserver &&
          (this._domObserver.disconnect(), (this._domObserver = null)));
    };
    c.prototype._checkForIntersections = function () {
      var a = this._rootIsInDom(),
        b = a ? this._getRootRect() : l();
      this._observationTargets.forEach(function (d) {
        var c = d.element,
          h = n(c),
          f = this._rootContainsTarget(c),
          k = d.entry,
          g = a && f && this._computeTargetAndRootIntersection(c, b);
        d = d.entry = new m({
          time: e.performance && performance.now && performance.now(),
          target: c,
          boundingClientRect: h,
          rootBounds: b,
          intersectionRect: g,
        });
        k
          ? a && f
            ? this._hasCrossedThreshold(k, d) && this._queuedEntries.push(d)
            : k && k.isIntersecting && this._queuedEntries.push(d)
          : this._queuedEntries.push(d);
      }, this);
      this._queuedEntries.length && this._callback(this.takeRecords(), this);
    };
    c.prototype._computeTargetAndRootIntersection = function (a, b) {
      if ("none" != e.getComputedStyle(a).display) {
        var d = n(a);
        a = p(a);
        for (var c = !1; !c; ) {
          var h = null,
            g = 1 == a.nodeType ? e.getComputedStyle(a) : {};
          if ("none" == g.display) return;
          a == this.root || a == f
            ? ((c = !0), (h = b))
            : a != f.body &&
              a != f.documentElement &&
              "visible" != g.overflow &&
              (h = n(a));
          if (h) {
            var g = Math.max(h.top, d.top),
              k = Math.min(h.bottom, d.bottom),
              l = Math.max(h.left, d.left),
              d = Math.min(h.right, d.right),
              h = d - l,
              m = k - g,
              d = 0 <= h &&
                0 <= m && {
                  top: g,
                  bottom: k,
                  left: l,
                  right: d,
                  width: h,
                  height: m,
                };
            if (!d) break;
          }
          a = p(a);
        }
        return d;
      }
    };
    c.prototype._getRootRect = function () {
      if (this.root) var a = n(this.root);
      else {
        a = f.documentElement;
        var b = f.body;
        a = {
          top: 0,
          left: 0,
          right: a.clientWidth || b.clientWidth,
          width: a.clientWidth || b.clientWidth,
          bottom: a.clientHeight || b.clientHeight,
          height: a.clientHeight || b.clientHeight,
        };
      }
      return this._expandRectByRootMargin(a);
    };
    c.prototype._expandRectByRootMargin = function (a) {
      var b = this._rootMarginValues.map(function (b, c) {
          return "px" == b.unit
            ? b.value
            : (b.value * (c % 2 ? a.width : a.height)) / 100;
        }),
        b = {
          top: a.top - b[0],
          right: a.right + b[1],
          bottom: a.bottom + b[2],
          left: a.left - b[3],
        };
      b.width = b.right - b.left;
      b.height = b.bottom - b.top;
      return b;
    };
    c.prototype._hasCrossedThreshold = function (a, b) {
      a = a && a.isIntersecting ? a.intersectionRatio || 0 : -1;
      b = b.isIntersecting ? b.intersectionRatio || 0 : -1;
      if (a !== b)
        for (var c = 0; c < this.thresholds.length; c++) {
          var e = this.thresholds[c];
          if (e == a || e == b || e < a !== e < b) return !0;
        }
    };
    c.prototype._rootIsInDom = function () {
      return !this.root || t(f, this.root);
    };
    c.prototype._rootContainsTarget = function (a) {
      return t(this.root || f, a);
    };
    c.prototype._registerInstance = function () {
      0 > g.indexOf(this) && g.push(this);
    };
    c.prototype._unregisterInstance = function () {
      var a = g.indexOf(this);
      -1 != a && g.splice(a, 1);
    };
    e.IntersectionObserver = c;
    e.IntersectionObserverEntry = m;
  }
})(window, document);

//Copy
// Отримуємо всі кнопки для копіювання
var copyButtons = document.querySelectorAll(".bank-account__copy-btn");

// Перебираємо кожну кнопку та додаємо обробник подій
copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Отримуємо текст для копіювання
    var textToCopy = button.previousElementSibling.textContent;

    // Створюємо тимчасовий textarea для копіювання тексту
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Вибір тексту та копіювання
    tempTextArea.select();
    document.execCommand("copy");

    // Видалення тимчасового textarea
    document.body.removeChild(tempTextArea);

    // Показати повідомлення про копіювання
    var message = button.nextElementSibling;
    message.style.display = "inline-block";

    // Затримка перед приховуванням повідомлення
    setTimeout(function () {
      message.style.display = "none";
    }, 2000); // Приховати повідомлення через 2 секунди
  });
});

// Donate Forms
document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо всі форми з елементами
  var forms = document.querySelectorAll(".donate-form");

  // Перевіряємо чи є на сторінці такі форми
  if (forms.length > 0) {
    // Якщо форми є, то проходимося по кожній формі
    forms.forEach(function (form) {
      var radioButtons = form.querySelectorAll(".number-radio__input");
      var customAmountInput = form.querySelector(".form-field__input");

      // Додаємо обробник події для кожної радіокнопки
      radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
          if (radioButton.checked) {
            customAmountInput.value =
              radioButton.nextElementSibling.textContent;
          }
        });
      });
    });
  } else {
    // Якщо форм немає, виводимо повідомлення у консоль
    console.log("Форми з елементами не знайдено на сторінці.");
  }
});


const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 700;

window.onload = function() {
	document.addEventListener('click', documentActions);
	
	function documentActions(e) {
		const targetElement = e.target;
		
		if ((targetElement.closest('.menu-burger'))) {
			document.querySelector('.header__main-menu').classList.add('_open');
			// document.querySelector('.main-menu__btn-close').classList.add('_active');
			bodyLock();
		} 
		else if  (targetElement.classList.contains('main-menu__btn-close')) {
			document.querySelector('.header__main-menu').classList.remove('_open');
			// document.querySelector('.header__btn-close').classList.remove('_active');
			// document.querySelector('.header__actions').classList.remove('_hidden');
			// overlay.classList.remove('_active');
			bodyUnLock();
		}

		// else if (!targetElement.closest('.page-header__nav') 
		// && document.querySelector('.page-header__nav._active') 
		// || targetElement.classList.contains('nav__close')) {
		// 	document.querySelector('.page-header__nav').classList.remove('_active');
		// 	overlay.classList.remove('_active');
		// 	bodyUnLock();
		// }
 
	}

	window.onresize = function () {
		if ((document.querySelector('.header__main-menu'))) {
			if (document.querySelector('.header__main-menu').classList.contains('_open')) {
				document.querySelector('.header__main-menu').classList.remove('_open');
				bodyUnLock();
			}
	// 		if (document.querySelector('.header__btn-close').classList.contains('_active')) {
	// 			document.querySelector('.header__btn-close').classList.remove('_active');
	// 			bodyUnLock();
	// 		}

	// 		if (document.querySelector('.header__actions').classList.contains('_hidden')) {
	// 			document.querySelector('.header__actions').classList.remove('_hidden');
	// 			bodyUnLock();
	// 		}
		}
	}

	// let onresize = function(e) {
	// 	//note i need to pass the event as an argument to the function
	// 	width = e.target.outerWidth;
	// 	// height = e.target.outerHeight;
	//  }
	//  window.addEventListener("resize", function(){
	// 	if ((document.querySelector('.header__main-menu'))) {
	// 				if (document.querySelector('.header__main-menu').classList.contains('_open')) {
	// 					document.querySelector('.header__main-menu').classList.remove('_open');
	// 					bodyUnLock();
	// 				}
	// 				if (document.querySelector('.header__btn-close').classList.contains('_active')) {
	// 					document.querySelector('.header__btn-close').classList.remove('_active');
	// 					bodyUnLock();
	// 				}
		
	// 				if (document.querySelector('.header__actions').classList.contains('_hidden')) {
	// 					document.querySelector('.header__actions').classList.remove('_hidden');
	// 					bodyUnLock();
	// 				}
	// 			}
	//  });

	
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}


(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();

(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.webkitMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozkitMatchesSelector ||
			Element.prototype.msMatchesSelector;

	}
})();


function findOffset(element) {
	var top = 0,
		left = 0;

	do {
		top += element.offsetTop || 0;
		left += element.offsetLeft || 0;
		element = element.offsetParent;
	} while (element);

	return {
		top: top,
		left: left
	};
}

function addEventListeners(element, eventNames, listener) {
	var events = eventNames.split(' ');
	for (var i = 0, iLen = events.length; i < iLen; i++) {
		element.addEventListener(events[i], listener, false);
	}
}


//popup

const popupLinks = document.querySelectorAll('.popup-link');

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('popup._open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}

		curentPopup.classList.add('_open');
	}
}


function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('_open');
		// if (video) {
		// 	pauseButton.addEventListener("click", function () {
				// player.pauseVideo();
		// 	  });
		// }

		// navPopup.classList.remove('_open');
		// iconMenu.classList.remove('_active');

		if (doUnlock) {
			bodyUnLock();
		}
	}
}


document.addEventListener('keydown', function (e) {
	if (e.which === 27) {

		const popupActive = document.querySelector('.popup._open');
		if (popupActive) {
			popupClose(popupActive);
		}

	}
});

  // Tel
  window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('._tel'), function (input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+38 (0__) ___ __ __",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)

	});

});

//msg popup
const modals = document.querySelectorAll('.msg-popup');

function openModal(modalId) {
	const modal = document.getElementById(modalId);

	if (modal && !modal.classList.contains('_active')) {
		closeAllModals();
		modal.classList.add('_active');
		setTimeout(() => {
			closeModal(modal);
		}, 6000);
	}
}

function closeModal(modal) {
	modal.classList.remove('_active');
}

function closeAllModals() {
	modals.forEach((modal) => {
		modal.classList.remove('_active');
	});
}



// Приклад виклику функції для відкриття вспливаючого вікна 1
// openModal('popup');

// Scroll main Nav
const mainMenuLinks = document.querySelectorAll('.main-menu a[data-goto]');
const mainMenu = document.querySelector('.header__main-menu');
// const headerActions = document.querySelector('.header__actions');
const mainMenuClose = document.querySelector('.header__btn-close');

if (mainMenuLinks.length > 0) {
	mainMenuLinks.forEach(mainMenuLink => {
		mainMenuLink.addEventListener("click", onMainMenuLinkClick);
	});

}

function onMainMenuLinkClick(e) {
	e.preventDefault();
	const mainMenuLink = e.target;
		if (mainMenuLink.dataset.goto && document.querySelector(mainMenuLink.dataset.goto)) {
		let gotoBlock = document.querySelector(mainMenuLink.dataset.goto);
		let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

		if (mainMenu.classList.contains('_open')) {
			mainMenu.classList.remove('_open');
			// headerActions.classList.remove('_hidden');
			// mainMenuClose.classList.remove('_active');
			bodyUnLock();

		}
		window.scrollTo({
			top: gotoBlockValue,
			behavior: "smooth"
		})
	}

}