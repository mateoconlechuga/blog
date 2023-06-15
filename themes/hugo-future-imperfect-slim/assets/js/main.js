setUpTheme();
setUpMenuPanel();
setUpQuotes();

function setUpMenuPanel() {
  body = document.querySelector("body");
  menu = document.querySelector("#site-nav-menu");
  wrapper = document.querySelector("#wrapper");
  navtoggle = document.querySelector(".nav-toggle");

  // Set up elements that open the menu when clicked
  navtoggle.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    wrapper.classList.toggle("overlay");
    menu.classList.toggle("active");
  });

  menu.hide = function(event) {
    // Already hidden?
    if (!menu.classList.contains("active")) return;

    // If an event was provided, cancel
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Hide
    menu.classList.remove("active");
    wrapper.classList.remove("overlay");
  };

  // Hide menu on link click
  for (let link of menu.querySelectorAll("a")) {
    link.addEventListener("click", () => menu.hide());
  }

  // Hide menu on body click/tap
  body.addEventListener("click", event => menu.hide(event));
  body.addEventListener("touchend", event => menu.hide(event));

  // Prevent certain events inside the panel from bubbling and closing the panel
  menu.addEventListener("click", event => event.stopPropagation());
  menu.addEventListener("touchend", event => event.stopPropagation());
  menu.addEventListener("touchstart", event => event.stopPropagation());
  menu.addEventListener("touchmove", event => event.stopPropagation());

  // Hide menu on ESC
  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) menu.hide(event);
  });
}

function setUpTheme() {
  const giscus = document.querySelector("#giscus");

  toggle = document.getElementById("dark-mode-toggle");
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
  if (giscus) {
    giscus.dataset.theme = theme;
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setTheme(event.matches ? "dark" : "light");
    });
  }

  function setTheme(mode) {
    localStorage.setItem("theme-storage", mode);

    function sendMessage(message) {
      const iframe = document.querySelector('iframe.giscus-frame');
      if (!iframe) return;
      iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }

    if (mode === "dark") {
      document.getElementById("dark-mode-theme").disabled = false;
      toggle.innerHTML = "<i class=\"fas fa-sun\"></i>";
      sendMessage({ setConfig: { theme: "dark" } });
    } else if (mode === "light") {
      document.getElementById("dark-mode-theme").disabled = true;
      toggle.innerHTML = "<i class=\"fas fa-moon\"></i>";
      sendMessage({ setConfig: { theme: "light" } });
    }
  }
}

function setUpQuotes() {
  var quote_array = [
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

  document.getElementById("quote").innerHTML = quote_array[Math.floor(Math.random()*quote_array.length)];
}
