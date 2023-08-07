import fjGallery from "jslibs/flickr-justified-gallery/dist/fjGallery.esm.js";
import PhotoSwipeLightbox from "jslibs/photoswipe/dist/photoswipe-lightbox.esm.js";
import PhotoSwipe from "jslibs/photoswipe/dist/photoswipe.esm.js";
import lazysizes from "jslibs/lazysizes/lazysizes.min.js";

const gallery = document.querySelector(".fj-gallery");

if (gallery) {
  const lightbox = new PhotoSwipeLightbox({
    gallery,
    children: ".fj-gallery-item",
    showHideAnimationType: "zoom",
    bgOpacity: 1,
    pswpModule: PhotoSwipe,
    paddingFn: (viewportSize) => {
      return viewportSize.x < 700
        ? {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }
        : {
            top: 30,
            bottom: 30,
            left: 0,
            right: 0,
          };
    },
  });

  lightbox.on("change", () => {
    history.replaceState("", document.title, "#" + lightbox.pswp.currSlide.index);
  });

  lightbox.on("close", () => {
    history.replaceState("", document.title, window.location.pathname);
  });

  fjGallery(gallery, {
    itemSelector: ".fj-gallery-item",
    onInit: () => {
      gallery.style.visibility = "";
      lightbox.init();
    },
    onJustify: () => {
      if (window.location.hash.substring(1).length > 0) {
        const index = parseInt(window.location.hash.substring(1), 10);
        if (!Number.isNaN(index) && index >= 0 && index < gallery.querySelectorAll("a").length) {
          lightbox.loadAndOpen(index, { gallery });
        }
      }
    },
    transitionDuration: false,
    calculateItemsHeight: true,
    resizeDebounce: 150,
  });
}

function setTheme(mode) {
    var root = document.documentElement;

    if (mode === "dark") {
        root.classList.add('dark')
    } else if (mode === "light") {
        root.classList.remove('dark')
    }

    localStorage.setItem("theme-storage", mode);
}

theme = localStorage.getItem("theme-storage");
if (!theme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark";
    } else {
        theme = "light";
    }
}

setTheme(theme);

if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setTheme(event.matches ? "dark" : "light");
    });
}

toggle = document.getElementById("theme-toggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        theme = localStorage.getItem("theme-storage");
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    });
}
