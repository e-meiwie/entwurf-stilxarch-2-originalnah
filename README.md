# Entwurf 2 - "originalnah"

Vollstaendige Website fuer STIL x Architektur, Hannover. Gebaut aus dem
Material in `../material/`. Stand: 12.08.2026.

Diese Version bleibt bewusst dicht am Bestand: gleiche Menuestruktur, gleiche
Reihenfolge, gleiche Farben, gleiche Schriftfamilie. Geaendert wurde die
Technik, nicht die Anmutung.

## Was uebernommen wurde

| Aus dem Original | Im Entwurf |
| --- | --- |
| Menue BAUEN 4.0 / DAS BUERO / REFERENZEN / PRESSE / KUNDEN / KONTAKT | unveraendert, gleiche Reihenfolge |
| STELLENANGEBOT als zweite Zeile, orange hervorgehoben | unveraendert |
| Untermenue "Buerobilder / Taetigkeiten / M. Pankse / Stellenangebot" | unveraendert |
| Untermenue "Fakten / BCK09 / SHWPK / ARP00" | unveraendert |
| Orange `#FF6600`, Grau `#666666`, Weiss, Arial | unveraendert |
| Liebermann-Zitat als einziger Inhalt der Startseite | bleibt das Motiv, jetzt als Text |
| Diaschau mit den Projektbildern | wird zur wischbaren Bildstrecke |
| Wortmarke "STIL x Architektur" | als Text nachgesetzt (das Logo liegt nur in 155 x 60 px vor) |

## Was modernisiert wurde

- **Kein Frameset, keine iframes.** Jede Seite ist eine eigene Adresse, die
  sich verlinken, teilen und finden laesst. Im Original lagen alle Inhalte in
  einem 900 px breiten iframe - Suchmaschinen fanden nur die Huelle.
- **Responsiv.** Das Original hat kein `viewport`-Meta und ist auf 900 px
  fixiert. Jetzt Klappmenue unter 900 px, Bilder skalieren mit. Auf allen
  17 Seiten bei 390 px Viewport gemessen: kein waagerechter Ueberlauf.
- **Kein Google Analytics.** Das Original laedt Universal Analytics, das seit
  Juli 2023 nichts mehr misst - und dazu einen Cookie-Banner fuer genau diesen
  einen Zweck. Beides entfaellt, damit auch der Banner.
- **Kein jQuery von code.jquery.com.** Das Original laedt jQuery bei jedem
  Aufruf von einem fremden Server nach. Ersetzt durch 40 Zeilen eigenes
  Javascript; ohne Javascript bleibt die Seite bedienbar.
- **Echte `mailto:`- und `tel:`-Verweise.** Im Original sind alle Adressen per
  Javascript zusammengesetzt und "nur mit aktiviertem Javascript anklickbar".
- **Semantisches HTML statt Layouttabellen**, `<font>`-Tags und `bgcolor`.
- **Zugaenglichkeit:** `lang`, Sprunglink, genau eine `h1` je Seite,
  Alt-Texte, `aria-current` am aktiven Menuepunkt, `aria-expanded` am
  Menueknopf, sichtbarer Fokusrahmen, `prefers-reduced-motion`.
- **Kontrast:** Das reine Orange `#FF6600` hat auf Weiss nur 2.7:1. Fuer Text
  wird deshalb die abgedunkelte Variante `#B85100` benutzt (4.6:1), das reine
  Orange nur fuer Flaechen und Linien.

## Seiten

```
index.html                      Zitat, Bildstrecke, Kurzprofil
bauen40.html                    Fakten
bauen40-bck09.html              Bauablauf in 7 Bildern
bauen40-shwpk.html              Gewerbebau
bauen40-arp00.html              Wohnungsbau
buero.html                      Buerobilder und Grundriss
buero-profil.html               Taetigkeiten und Profil
buero-pankse.html               Lebenslauf
projekte.html                   12 grosse Bilder + alle 61 Projekte
presse.html                     Presse, Fachpresse, Wettbewerbe
kunden.html                     112 Auftraggeber
kontakt.html                    Anschrift, Telefon, Fax, E-Mail
stellenangebot.html             Uebersicht
stellenangebot-architekt.html   Stellenbeschreibung
stellenangebot-zeichner.html    Stellenbeschreibung
impressum.html                  DDG und MStV
datenschutz.html                ohne Cookies, ohne Tracking
```

Dazu `css/style.css`, `js/script.js`, `bilder/` (26 Fotos plus 61
Projektvorschauen), `netlify.toml`, `robots.txt`, `sitemap.xml`.

## Weiterleitungen

Alle 30 gecrawlten Adressen aus `../material/seiten.txt` haben in der
`netlify.toml` ein Ziel, dazu Auffangregeln fuer `/pages/*`, `/projekte/*`
und `/pages/bauen40/*`. Suchtreffer und Lesezeichen laufen damit nicht ins
Leere.

## Bewusst weggelassen

- **Der Log-in-Bereich.** Das Original hat ein Anmeldeformular fuer einen
  geschuetzten Projektbereich. Das braucht einen Server mit Benutzerverwaltung;
  eine statische Seite kann das nicht. Ein Formular zu bauen, das nichts
  pruefen kann, waere eine Attrappe. Die alten Adressen leiten auf die
  Kontaktseite. **Rueckfrage an den Inhaber: wird der Bereich noch genutzt?**
- **Oeffnungszeiten.** Nirgends belegt. Auch kein "Termine nach Vereinbarung",
  das waere geraten.
- **Kontaktformular.** Auf Wunsch weggelassen: eine Anfrage soll beim Buero
  landen, nicht in einem fremden Netlify-Postfach. Die CSP setzt
  `form-action 'none'`.
- **Karte.** Wuerde einen fremden Server laden. Stattdessen der
  what3words-Verweis, den das Buero selbst nutzt.
- **Logoleiste** (Architektenkammer, BAFA, BinBau). Die Logos liegen nur in
  31 bis 75 px Breite vor. Die Mitgliedschaften stehen als Text mit Verweis.
- **Die Bueroraumfotos 2 und 3.** Arbeitsplatzfotos mit alter Technik und
  Fussballtrikot an der Wand - sie datieren den Entwurf. Verwendet werden
  Empfang und der perspektivische Grundriss.

## Offene Punkte

1. **Hausnummer.** Das Impressum der alten Seite schreibt "Jordanstr. 26",
   Kontaktseite, Google-Maps-Link des Bueros und heinze.de schreiben "26a".
   Im Entwurf steht **26a**.
2. **E-Mail.** Das alte Impressum nennt `info@stilarchitektur.de` (ohne x),
   alle anderen Seiten `info@STILxArchitektur.de`. Im Entwurf steht die
   Variante mit x. Die Adressen sind jetzt normale `mailto:`-Verweise, also
   auch fuer Spam-Sammler sichtbar. Falls das nicht gewollt ist: bewusst
   entscheiden, nicht per Javascript verstecken.
3. **Projektzahl.** Die Uebersicht listet 61 Projekte; der Bestand stammt aus
   2021. Ist die Liste noch aktuell, fehlen Projekte?
4. **Stellenanzeigen.** Stehen seit mindestens 2021 auf der Seite. Noch
   aktuell?
5. **Bildrechte.** Das alte Impressum sagt, die Fotografen seien "bei den
   Projekten benannt und verlinkt". Diese Angaben liegen in den
   Projekt-Unterseiten, die nicht mitgecrawlt wurden. Vor dem Livegang zu
   klaeren; im Impressum steht dazu ein `TODO`.
6. **Kundenliste.** Zwei Aenderungen gegenueber dem Original, beide zur
   Freigabe:
   - Die Namen privater Bauherren (acht Eintraege) sind **nicht** uebernommen.
     Namen von Privatpersonen auf einer Website brauchen eine Einwilligung;
     eine solche ist nicht dokumentiert.
   - Die rund 75 Links sind **nicht** uebernommen, weil ein grosser Teil der
     Adressen veraltet ist. Das Buero gibt frei, welche wieder gesetzt werden.
7. **Impressum.** Rechtsform und Umsatzsteuer-Identifikationsnummer fehlen im
   Material und werden deshalb nicht behauptet. Ebenso die Anschrift der
   Architektenkammer. Beides ergaenzen.
8. **Projektbilder.** Die 61 Vorschaubilder liegen nur in 199 x 112 px vor und
   werden deshalb nie vergroessert dargestellt. Fuer den Livegang je Projekt
   ein groesseres Bild und einen Alt-Text vom Buero anfordern.
9. **Projekt ARP00.** Zwei Baustellenbilder der alten Seite lagen nicht vor;
   auf der Seite steht ein sichtbarer Hinweis und im Quelltext ein `TODO`.

## Veroeffentlichen

Noch **nicht** veroeffentlicht. Vorgesehen ist ein eigener Netlify-Auftritt:

```powershell
netlify deploy --dir . --prod --site entwurf-stilxarchitektur-2
```

Der Ordner enthaelt keine Kopie fremder Inhalte - `material/` liegt eine Ebene
hoeher und wird nicht mit hochgeladen.

Abgesichert ist der Entwurf durch `noindex, nofollow` im HTML, `robots.txt`
mit `Disallow: /` und den `X-Robots-Tag` aus der `netlify.toml`.

Nach dem Deploy ist **nichts** einzurichten - es gibt kein Formular, also auch
keine Benachrichtigung zu konfigurieren.

## Geprueft

- `qualitaet-pruefen.ps1`: 17 Seiten, keine Beanstandungen
- Desktop 1280 px: alle 17 Seiten gerendert und angesehen
- Mobil 390 px: Startseite angesehen, alle 17 Seiten auf waagerechten
  Ueberlauf gemessen (jeweils genau 390 px, kein Ueberlauf)
- Zeichensatz: alle Seiten auf Fehlkodierungen geprueft

Nicht geprueft: Tastaturbedienung mit Screenreader, Verhalten in aelteren
Browsern.

## Grenzen

Die Rechtstexte sind Vorlagen, keine Rechtsberatung - vor dem Livegang
gegenlesen oder pruefen lassen. Texte und Bilder gehoeren dem Buero:
Verwendung nur fuer diesen Entwurf, auf Zuruf sofort offline, nicht ins
eigene Portfolio ohne ausdrueckliche Freigabe.
