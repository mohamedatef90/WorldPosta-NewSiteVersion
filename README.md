# WorldPosta New Site Version

A static, single-page redesign of the WorldPosta website home page (2023), built with HTML, CSS, Bootstrap 5, and a little JavaScript. There is no build step.

## Contents

`index.html` (titled "Worldposta") has three sections:

- **Home:** a hero with a background video ("Grow Your Business with ...").
- **Products:** product cards (images in `imgs/WP-Products/`: CloudEdge, CloudSpace, DataGuard, Posta).
- **Solutions:** a vertical pill-tab area (Bootstrap tabs).

The page also has a fixed navbar. `JS/main.js` holds a small `openTab` helper that looks up elements (`DesignLink`, `ProgLink`, `SupportLink`) which are not in `index.html`, so it is not used by the current page.

## Tech

- HTML, CSS (`CSS/style.css`), and Bootstrap 5.3.2 from a CDN
- Font Awesome (`CSS/all.min.css`, `JS/all.min.js`, `webfonts/`) and the Poppins font from Google Fonts
- The Magistral font family, bundled in `Magistral/`
- Two videos in `videos/` (about 21 MB each)

## Running

Open `index.html` in a browser, or serve the folder with any static server, for example:

```bash
python3 -m http.server 8000
```

Bootstrap and Google Fonts load from CDNs, so an internet connection is needed for full styling.

## Project structure

```
index.html
CSS/       Styles
JS/        main.js and the Font Awesome script
imgs/      Images, including WP-Products/ and solution/
videos/    Home page videos
Magistral/ Bundled font files
webfonts/  Font Awesome fonts
```
