# Zeejin Ganaban — Portfolio

A static personal portfolio site for Zeejin Guevarra Ganaban (IT Student / Digital Artist), built with plain HTML, CSS, and JavaScript. No build step, no backend — ready to push straight to GitHub Pages.

## Project structure

```
portfolio/
├── index.html                          Homepage
├── about/index.html                    About page
├── skills/index.html                   Skills page
├── experience/index.html               Experience timeline
├── projects/
│   ├── index.html                      Project grid + search/filter
│   └── project.html                    Case-study template — serves every project via ?slug=<slug>
├── education/index.html                Education & certifications
├── cv/index.html                       CV viewer + download
├── contact/index.html                  Contact info + form
├── assets/
│   ├── css/style.css                   All site styles (design tokens at the top)
│   ├── js/app.js                       Nav, theme toggle, scroll reveal, contact form
│   ├── js/projects.js                  Project data + grid/case-study rendering (see below)
│   ├── images/J.jpg                    Logo (used in the header and favicon)
│   ├── images/projects/<slug>/         Put each project's gallery images here
│   ├── video/<slug>/                   Put each project's MP4s here
│   └── cv/Zeejin_Ganaban_CV.pdf        CV file used by the CV page and buttons
├── robots.txt
├── sitemap.xml
└── .nojekyll                           Tells GitHub Pages to skip Jekyll processing
```

There's one case-study page for every project, `projects/project.html`, opened as `project.html?slug=my-new-project`. It reads the `slug` from the URL, looks up the matching object in the `PROJECTS` array, and fills in the name, description, overview, problem/approach, features, technologies, links, and media gallery entirely from that data — so adding a project is just adding one object to the array (see "Adding a project" below), no new HTML file and no folder. This also means there's nothing to accidentally leave out of sync: a project can't show the wrong content the way a copy-pasted page could.

Every internal link uses a relative path (`../`, etc.) rather than a leading `/`, so the site works both when opened locally as files and when deployed under a repository subpath like `username.github.io/repo-name/`.

## Replacing the profile photo

The homepage hero currently shows a labeled placeholder instead of a real photo (none was supplied). To add one:

1. Add your photo to `assets/images/`, e.g. `assets/images/profile.jpg`.
2. In `index.html`, find the `.hero-photo` block and replace its contents with an `<img>` tag pointing to that file, keeping a descriptive `alt` attribute.

## Replacing the "J" logo

The logo lives at `assets/images/J.jpg` and is referenced from every page's header and favicon link. To change it, just replace that file with a new image of the same name — every page will pick it up automatically. If you rename the file, update the `<img src>` and `<link rel="icon">` lines in each page's `<head>`/header, or better, run a find-and-replace across the HTML files for the filename.

## Adding a project

Projects are entirely data-driven from `assets/js/projects.js` — there's no per-project HTML file to create. To add one:

1. Open `assets/js/projects.js` and add a new object to the `PROJECTS` array, following the shape of the existing entries:

   ```js
   {
     id: "my-new-project",
     slug: "my-new-project",              // used in the URL (?slug=) and in its asset folder names
     name: "My New Project",
     category: "Web Development",          // any label works — the category filter builds itself from whatever's used here
     secondaryCategory: "",                 // optional second category, or ""
     projectType: "Website",
     description: "One or two sentences shown on the project card.",
     year: "2026",
     technologies: ["HTML", "CSS", "JavaScript"],
     images: [],                            // see "Adding gallery images" below
     videos: [],                            // see "Adding animations" below
     embeds: [],                            // see "Adding a playable game" below
     projectUrl: null,                      // live site link, or null
     githubUrl: null,                       // source code link, or null
     demoUrl: null,                         // separate demo link, or null
     role: "Creator / Developer",
     overview: "Longer paragraph for the case-study page.",   // leave "" to skip this section entirely
     problem: "What problem this project addresses.",          // leave "" to skip this section entirely
     solution: "How the project solves it.",                    // leave "" to skip this section entirely
     features: ["Feature one", "Feature two"],                  // leave [] to skip this section entirely
     status: "Ongoing"                      // or "Completed", "Planned", etc.
   }
   ```

2. That's the whole thing. It immediately shows up on the `projects/` grid (searchable/filterable by name, category, and technology), and its case-study page is live at `projects/project.html?slug=my-new-project` — reading its name, description, overview, features, technologies, links, and media straight from this object. `category`/`secondaryCategory` don't need to match a fixed list; the category filter dropdown is built from whatever values your projects actually use.
3. `overview`, `problem`, and `solution` are each optional — leave any of them as an empty string `""` and that section is left out of the page rather than showing an empty heading. Same for `features`: leave it as `[]` to skip that block.

## Adding gallery images to a project

1. Create a folder for the project's images under `assets/images/projects/<slug>/` if it doesn't exist yet (folders already exist for `digital-art-animation-collection` and `graphics-design-collection`).
2. Drop image files in (WebP or JPG recommended for file size).
3. In `assets/js/projects.js`, list each filename in that project's `images` array — just the filename, not the folder path:
   ```js
   images: ["art-01.webp", "art-02.webp", "art-03.webp"]
   ```
4. That's it. The project card's cover photo, the case-study page's gallery grid, and the lightbox viewer all render however many images are listed — there's no hardcoded limit, so this works the same whether you list 1 image or 50.

## Adding animations (one MP4 or several)

The `videos` field is an array, so a project can hold zero, one, or many animations. They **don't** stack as full players on the page — the case-study page has one "Media" section with two toggle buttons, **All Images** and **All Videos**, and only the active tab's grid is shown. Inside the video tab, every clip is a small click-to-play tile; only the one you click opens (in a lightbox viewer with its own prev/next between clips), so having 4+ full animations on one project page stays manageable.

1. Create a folder for the project's videos under `assets/video/<slug>/` if it doesn't exist yet (folders already exist for `digital-art-animation-collection` and `graphics-design-collection`).
2. Drop your `.mp4` file(s) in there.
3. In `assets/js/projects.js`, list each filename in that project's `videos` array. Three forms work:
   ```js
   // Plain filenames — simplest; the tile shows "Clip 1", "Clip 2", etc.
   videos: ["walk-cycle.mp4", "title-sequence.mp4"]

   // With a caption shown on the tile and in the viewer
   videos: [
     { src: "walk-cycle.mp4", caption: "Walk cycle, 24fps" },
     { src: "title-sequence.mp4", caption: "Opening title sequence" }
   ]

   // With a thumbnail image too — poster is a filename from that
   // same project's images folder (assets/images/projects/<slug>/)
   videos: [
     { src: "walk-cycle.mp4", caption: "Walk cycle, 24fps", poster: "walk-cycle-thumb.jpg" }
   ]
   ```
4. Nothing else needs editing. Without a `poster`, the tile shows the clip itself (muted, paused) nudged to its one-second mark, so it displays that frame — like a phone's video gallery — without you needing to export a separate thumbnail image unless you want to override it with a specific frame.

## Adding project links (live site, source code, demo)

These three fields on a project object control the "Links" list on its case-study page:

```js
projectUrl: "https://example.com",           // shown as "Live site"
githubUrl: "https://github.com/you/repo",    // shown as "Source code"
demoUrl: "https://example.com/demo",         // shown as "Demo"
```

Leave any of them as `null` and that link is simply omitted — the page never shows a fake or placeholder URL. If all three are `null`, the page shows a plain note that no public link has been provided yet, exactly as it does now for the Digital Art & Animation Collection project.

## Adding a playable game (e.g. an itch.io embed)

A project can have a third media type alongside images and videos: `embeds` — one or more playable frames, shown under a "Play" tab. This is meant for something like an itch.io game you've enabled "playable in browser" for.

1. On itch.io, open the game's edit page → **Embed options**, and copy the `src` URL from the embed code it gives you (not the whole `<iframe>` tag, just the URL).
2. In `assets/js/projects.js`, add an `embeds` array to the project:
   ```js
   // Plain URL — simplest
   embeds: ["https://itch.io/embed-upload/1234567?color=333333"]

   // Or, with more control per entry
   embeds: [
     {
       url: "https://itch.io/embed-upload/1234567?color=333333",
       label: "Playable in-browser — best on desktop",
       aspect: "16/9",                 // matches the game's shape; defaults to "4/3"
       linkLabel: "Play on itch.io"    // adds a fallback link under the frame
     }
   ]
   ```
3. That's it — the "Play" tab only appears at all once a project has an `embeds` entry, alongside "All Images" / "All Videos" if it has those too (the toggle always only shows the tabs a project actually has content for).

If a game isn't set up for in-browser embedding, or you'd rather just send people to itch.io directly instead of embedding it, use `projectUrl` or `demoUrl` (see above) instead — no `embeds` needed for a plain link-out.

## Editing personal information

Most personal details (name, title, contact info, bio, education, skills, experience) are written directly into each page's HTML, since there are only a handful of pages. Use find-and-replace across the `.html` files for anything that needs to change everywhere at once (name, email, phone).

## Replacing the CV

Swap `assets/cv/Zeejin_Ganaban_CV.pdf` for a new file of the same name and every "View CV" / "Download CV" link and the embedded preview on `cv/index.html` will update automatically. If you use a different filename, update the three references in `index.html` and `cv/index.html`.

## Light / dark mode

The toggle in the header persists the visitor's choice in `localStorage` under the key `zg-theme`, and otherwise follows the visitor's OS preference. Colors are defined as CSS custom properties at the top of `assets/css/style.css` — edit the `:root` and `:root[data-theme="dark"]` blocks to adjust either palette.

## Configuring GitHub Pages

1. Push this folder's contents to the root of a GitHub repository (or to a `docs/` folder, adjusting the Pages source setting accordingly).
2. In the repository, go to **Settings → Pages**, set the source branch, and save.
3. Your site will be published at `https://<username>.github.io/<repository>/`.
4. `.nojekyll` is already included so GitHub Pages serves the files as-is without Jekyll processing.

## Updating sitemap.xml and canonical URLs

Every page's `<link rel="canonical">` tag and every `<loc>` entry in `sitemap.xml` currently use a placeholder domain:

```
https://REPLACE-WITH-USERNAME.github.io/REPLACE-WITH-REPO/
```

Once you know your real GitHub Pages URL, find-and-replace that placeholder string across all `.html` files and `sitemap.xml` (and in `robots.txt`, which points to the sitemap).

## Testing the contact form

The form validates required fields and email format client-side, and has a hidden honeypot field (`_gotcha`) to deter simple bots. On submit, it builds a `mailto:` link to `jinganaban@gmail.com` with the subject and message pre-filled, then opens the visitor's default email app. Test it by filling the form and submitting — your OS should prompt to open (or switch to) your email client with the message ready to send. No data is stored or transmitted by the page itself.

## Deploying

No build step is required — this is a plain static site. After configuring GitHub Pages as above, any push to the configured branch updates the live site automatically.
