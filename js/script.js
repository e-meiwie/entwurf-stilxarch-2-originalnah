/* STIL x Architektur - Entwurf 2
   Zwei kleine Aufgaben: Menue auf schmalen Bildschirmen und die
   Bildstrecke der Startseite. Ohne Javascript bleibt beides bedienbar -
   das Menue steht dann offen, die Bildstrecke laesst sich wischen. */

(function () {
  "use strict";

  document.documentElement.classList.remove("kein-js");

  /* --- Menue ------------------------------------------------------------ */

  var knopf = document.querySelector(".menueknopf");
  var menue = document.getElementById("hauptmenue");

  if (knopf && menue) {
    knopf.setAttribute("aria-expanded", "false");
    menue.removeAttribute("data-offen");

    knopf.addEventListener("click", function () {
      var offen = knopf.getAttribute("aria-expanded") === "true";
      knopf.setAttribute("aria-expanded", offen ? "false" : "true");
      if (offen) {
        menue.removeAttribute("data-offen");
      } else {
        menue.setAttribute("data-offen", "ja");
      }
    });
  }

  /* --- Bildstrecke ------------------------------------------------------ */

  var bahn = document.querySelector(".diaschau__bahn");
  var zurueck = document.querySelector('[data-diaschau="zurueck"]');
  var weiter = document.querySelector('[data-diaschau="weiter"]');

  if (bahn && zurueck && weiter) {
    var schritt = function () {
      var bild = bahn.querySelector(".diaschau__bild");
      return bild ? bild.getBoundingClientRect().width + 16 : bahn.clientWidth;
    };

    zurueck.addEventListener("click", function () {
      bahn.scrollBy({ left: -schritt(), behavior: "smooth" });
    });

    weiter.addEventListener("click", function () {
      bahn.scrollBy({ left: schritt(), behavior: "smooth" });
    });
  }
})();
