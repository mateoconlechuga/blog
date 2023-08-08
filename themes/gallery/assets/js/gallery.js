import fjGallery from "share/flickr-justified-gallery/fjGallery.esm.js";
import PhotoSwipeLightbox from "share/photoswipe/photoswipe-lightbox.esm.js";
import PhotoSwipe from "share/photoswipe/photoswipe.esm.js";

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

