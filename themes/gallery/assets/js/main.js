import fjGallery from "jslibs/flickr-justified-gallery/dist/fjGallery.esm.js";
import PhotoSwipeLightbox from "jslibs/photoswipe/dist/photoswipe-lightbox.esm.js";
import PhotoSwipe from "jslibs/photoswipe/dist/photoswipe.esm.js";
import lazysizes from "jslibs/lazysizes/lazysizes.js";

const gallery = document.querySelector(".fj-gallery");

if (gallery) {
  const lightbox = new PhotoSwipeLightbox({
    gallery,
    children: ".fj-gallery-item",
    showHideAnimationType: "zoom",
    bgOpacity: 1,
    pswpModule: PhotoSwipe,
    imageClickAction: "close",
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

  lightbox.on("uiRegister", () => {
    lightbox.pswp.ui.registerElement({
      name: "download-button",
      order: 8,
      isButton: true,
      tagName: "a",
      html: {
        isCustomSVG: true,
        inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
        outlineID: "pswp__icn-download",
      },
      onInit: (el, pswp) => {
        el.setAttribute("download", "");
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
        el.setAttribute("title", "Download");
        pswp.on("change", () => {
          el.href = pswp.currSlide.data.element.href;
        });
      },
    });
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
  });
}

function setUpTheme() {
  toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
      theme = localStorage.getItem("theme-storage");
      if (theme === "light") {
          setTheme("dark");
      } else {
          setTheme("light");
      }
  });

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

  function setTheme(mode) {
    var root = document.documentElement;
    localStorage.setItem("theme-storage", mode);

    if (mode === "dark") {
      root.classList.add('dark')
    } else if (mode === "light") {
      root.classList.remove('dark')
    }
  }
}

setUpTheme();

var quote_array = [
('Life is a big canvas, throw all the paint on it you can.</br><b>~ Danny Kaye</b>'),
('The past is an illusion. You must learn to live in the present and accept yourself for what you are now. What you lack in flexibility and agility you must make up with knowledge and constant practice.</br><b>~ Bruce Lee</b>'),
('It doesn\'t interest me how old you are. I want to know if you will risk looking like a fool for love, for your dreams, for the adventure of being alive.</br><b>~ Oriah Dreamer</b>'),
('The great pleasure in life is doing what people say you cannot do.</br><b>~ Walter Bagehot</b></b>'),
('It doesn\'t interest me what you do for a living. I want to know what you ache for, and if you dare to dream of meeting your heart\'s longing.</br><b>~ Oriah Dreamer</b>'),
('The fox knows many things, but the hedgehog knows one big thing.</br><b>~ Archilochus</b>'),
('If we are ever to enjoy life, now is the time, not tomorrow or next year -- Today should always be our most wonderful day.</br><b>~ Thomas Dreier</b>'),
('The trouble with life is, that you\'re halfway through it before you realize that it\'s a \'do it yourself\' thing.</br><b>~ anon</b>'),
('To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life.</br><b>~ Walter Mitty</b>'),
('To have striven, to have made an effort, to have been true to certain ideals -- this alone is worth the struggle. We are here to add what we can to, not to get what we can from, life.</br><b>~ Sir William Osler</b>'),
('Live with intention. Walk to the edge. Play with abandon. Listen well. Choose without regret. Do what you love. Appreciate your friends. Act as if this is all there is.</br><b>~ J.N.Kemsley</b>'),
('Neo, sooner or later you\'re going to realize just as I did that there\'s a difference between knowing the path and walking the path.</br><b>~ Morpheus</b>'),
('And those who say, I\'ll try anything once, often try nothing twice, three times, arriving late at the gate of dreams worth dying for.</br><b>~ Carl Sandburg</b>'),
('Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming \'Wow! What a Ride!\'</br><b>~ Hunter S. Thompson</b>'),
('Look again at that dot. That\'s here. That\'s home. That\'s us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives.</br><b>~ Carl Sagan</b>'),
('Make no little plans. They have no magic to stir men\'s blood.</br><b>~ D. H. Burnham</b>'),
('About the only difference between stumbling blocks and stepping stones is the way you use them.</br><b>~ Bernard Meltzer</b>'),
('It takes courage to push yourself to places that you have never been before... to test your limits... to break through barriers. And the day came when the risk it took to remain tight inside the bud was more painful than the risk it took to blossom.</br><b>~ Anais Nin</b>'),
('Life is to be lived. If you have to support yourself, you had bloody well better find some way that is going to be interesting.</br><b>~ Katharine Hepburn</b>'),
];

let quote_element = document.getElementById("quote");
if (quote_element != null)
{
  quote_element.innerHTML = quote_array[Math.floor(Math.random()*quote_array.length)];
}
