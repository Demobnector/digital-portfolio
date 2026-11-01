/* ==========================================================================
   projects.js — structured project data + data-driven rendering
   Add a new project by adding one object to PROJECTS below. Nothing else
   needs to change for it to show up on the grid, be searchable/filterable,
   and (once its own page exists) link through to a case-study layout.
   See README.md → "Adding a project" for the full walkthrough.
   ========================================================================== */
(function () {
  "use strict";

  // ===================== YOUR PROJECT DATA — edit below =====================
  // Each project can hold as many gallery images as you like — the grid
  // and lightbox both render however many entries are in `images`.
  var PROJECTS = [
    {
      id: "graphics-design-collection",
      slug: "graphics-design-collection",
      name: "Graphics Design",
      category: "Digital / Traditional Art",
      secondaryCategory: "",
      projectType: "Graphic Design",
      description: "A collection of my creative work and design projects from the Graphics Design subject.",
      year: "2026–2027",
      technologies: ["Krita", "Photoshop"],
      // The gallery is a list of "cards". A card can be:
      //
      //   • A single image:  { img: "file.png", title: "...", description: "..." }
      //     (a plain "file.png" string works too)
      //
      //   • A FOLDER that groups several images under one title:
      //     { title: "Activity 3", description: "...", images: [ ...single images... ] }
      //     The folder's thumbnail is the LAST image listed inside it (the latest one
      //     you added). To pick a different one, add  cover: "file.png"  to the folder.
      //     Optional: dir: "activity3"  if those files live in a sub-folder on disk
      //     (assets/images/projects/<slug>/activity3/) instead of next to the others.
      //
      // And any of those cards can be put inside a CATEGORY, which gives them a heading
      // (and, with 2+ categories, filter buttons above the gallery). Name it anything:
      //     { category: "Prelim", description: "(optional)", items: [ ...folders / images... ] }
      // Cards that aren't inside a category simply show without a heading.
      //
      // Folders and categories are one level deep (no folders inside folders, no
      // categories inside categories). Blank title/description on an image just don't
      // show. Commented-out lines are hidden from the site.
      images: [
        {
          category: "Finals",
          description: "Web design",
          items: [
				{ img: "activity5.png", title: "Activity 5 - Wireframing", description: "The wireframe version of this website before it becomes a fully-functional one." },
			]
		},
        {
          category: "Midterm",
          description: "Social Media",
          items: [
			  {
				  title: "Activity 3",
				  description: "",
				  images: [
					{ img: "activity3/social_media_post_instagram.png", title: "Activity 3 - Instagram", description: "Social media post, but instead on Instagram template." },
					{ img: "activity3/social_media_post.png", title: "Activity 3 - Social Media Post", description: "Provided a post-worthy design." },
					{ img: "activity3/landing_page_banner.png", title: "Activity 3 - Landing Page Banner", description: "This is a kind of banner that you see on websites, at the very top." },
					{ img: "activity3/banner_ad.png", title: "Activity 3 - Banner Ads", description: "How do I describe this, uh, it's a banner, but it really looks like a square to me for some reason." },
					// { img: "activity3/Brew_Haven_Logo.jpg", title: "", description: "" },
					{ img: "activity3/icon.png", title: "Activity 3 - Icon", description: "A task of digitalizing a sketch of this icon. This is how it turns out." }
				  ],
			  },
			  { img: "activity4/typography.png", title: "Activity 4 - Typography", description: "Digitalized version of a notoriously difficult traditional sketch of calligraphy. Exaggerating claim; it was fun." },
			// { img: "activity4/Create_Your_World_Typography.jpg", title: "", description: "" },
			]
        },
        {
          category: "Prelim",
          description: "Arts and Creativity",
          items: [
            {
              title: "Activity 2 - Logos",
              description: "",
              images: [
                { img: "activity2/Ganaban_Badge.png", title: "Activity 2 - Badge", description: "My logo surrounded by shapes to make it look like a badge." },
                { img: "activity2/Ganaban_Horizontal_Logo.png", title: "Activity 2 - Horizontal Logo", description: "Logo with my name at the side." },
                { img: "activity2/Ganaban_Vertical_Logo.png", title: "Activity 2 - Vertical Logo", description: "Logo with my name below." },
                { img: "activity2/Ganaban_Icon.png", title: "Activity 2 - Icon", description: "My personal icon. Looks like a sticker too." },
                { img: "activity2/Ganaban_Sketch.png", title: "Activity 2 - Sketch", description: "These are all the rough sketches and plan of how I can pull it off. We were given 2 ways, either traditional or digital. I picked digital." }
              ]
            },
			{
              title: "Activity 2 - Fruit",
              description: "",
              images: [
				{ img: "activity1/Apple_by_the_Window.png", title: "Apple by the Window", description: "Digitalized version of my very first traditional art after years. This turns out incredible by the end." },
				{ img: "activity1/Apple_by_the_Window.gif", title: "Apple by the Window - GIF", description: "Simple animated loop of Apple by the Window." },
				// { img: "activity1/sketch.JPG", title: "Apple by the Window", description: "My very first traditional art after years." }
              ]
            },
          ]
        }
      ],
      videos: [],
      embeds: [],
      projectUrl: null,
      githubUrl: null,
      demoUrl: null,
      role: "Creator / Digital Artist / Traditional Artist",
      overview: "This portfolio is a collection of the projects I created throughout my Graphics Design subject. From exploring design elements and principles to creating logos, marketing graphics, and typography-based designs, each activity allowed me to experiment with different approaches to visual communication while developing my skills and creative style.",
      problem: "",
      solution: "",
      features: [],
      status: "Ongoing"
    }
    /*,
    {
      id: "digital-art-animation-collection",
      slug: "digital-art-animation-collection",
      name: "Digital Art & Animation Collection",
      category: "Digital Art",
      secondaryCategory: "Animation",
      projectType: "Graphic Design / Animation",
      description: "A flexible portfolio collection for presenting digital illustrations, graphic design pieces, animation work, process material, and visual experiments in one expandable gallery.",
      year: "2025–2026",
      technologies: ["Krita", "Aseprite", "Photoshop", "2D Animation"],
      images: [
        "You Are My Paradise.png",
        "character10_final.png",
        "righteye_final.png",
        "Rooftop.png"
      ],
      videos: [
        // "Seven Seconds of Silence with You - Meetup Scene.mp4",
        // "Birthday Present 01 (2025).mp4",
        "Birthday Present 02 (2026).mp4",
        "Valentines.mp4"
      ],
      embeds: [],
      projectUrl: null,
      githubUrl: null,
      demoUrl: null,
      role: "Creator / Digital Artist / Animator",
      overview: "This collection is where finished illustrations, in-progress studies, character work, and animation experiments live side by side. It's built to grow: every piece added here — a single drawing or a full animated sequence — slots into the same gallery without needing a new page or a redesign.",
      problem: "Digital art and animation work tends to get scattered across drives, group chats, and social posts, which makes it hard for anyone — including me — to see the range of what's been made or how it's progressed over time.",
      solution: "A single, structured gallery page that can hold an unlimited number of images and an optional animation, organized by category and year, so new pieces can be added by editing one data entry rather than rebuilding the page.",
      features: [
        "Expandable image gallery with lightbox viewing",
        "Support for an embedded MP4 animation alongside stills",
        "Filterable by category, technology, and year from the main projects page",
        "Built to scale from one piece to fifty without a redesign"
      ],
      status: "Ongoing"
    },
    {
      id: "game-development",
      slug: "game-development",
      name: "Game Development Collection",
      category: "Game Development",
      secondaryCategory: "Programming",
      projectType: "Game Development",
      description: "A collection of games and interactive projects I created while exploring programming, game development, and interactive design.",
      year: "2023–2025",
      technologies: ["HTML", "Notepad++", "Spyder"],
      images: [
        "banga01.png",
        "banga02.png",
        "banga03.png",
        "banga04.png"
      ],
      videos: [],
      embeds: [
        {
          url: "https://itch.io/embed-upload/9092237?color=676767",
          aspect: "16/9",
          linkLabel: "Play on itch.io"
        }
      ],
      projectUrl: null,
      githubUrl: null,
      demoUrl: "https://demobnector.itch.io/",
      role: "Creator / Programmer",
      overview: "This collection showcases games and interactive projects I developed while learning and experimenting with programming and game development. Each project gave me an opportunity to apply programming concepts, build interactive mechanics, and explore how code can be turned into playable experiences.",
      problem: "",
      solution: "",
      features: [
        "Playable game projects developed from scratch",
        "Interactive gameplay built through programming",
        "Experimentation with game mechanics and player interaction",
        "Application of programming concepts to interactive projects",
        "Playable projects hosted through itch.io"
      ],
      status: "Completed"
    }
    */
  ];
  // ======================= END OF YOUR PROJECT DATA =========================
  // Everything below is the site's code — you shouldn't need to edit it.


  window.PORTFOLIO_PROJECTS = PROJECTS;

  // Safe for both text and attribute values (quotes are escaped too — titles
  // like  The "Best" of  would otherwise cut an attribute short).
  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Builds a safe asset URL from a base path + a raw filename that may
  // contain spaces, parentheses, apostrophes, etc. — encodes just the
  // filename (not the base path's slashes) so "My Clip (2025).mp4" resolves
  // correctly both locally and once hosted on GitHub Pages.
  function assetUrl(base, filename) {
    return base + encodePath(filename);
  }

  // Encodes a file path for a URL ONE SEGMENT AT A TIME, so a path like
  // "activity3/My Photo (1).png" keeps its "/" as a real folder separator while
  // the spaces and brackets are still made safe. (Encoding the whole string at
  // once turns "/" into "%2F", which browsers and GitHub Pages treat as part of
  // a file name, so images in sub-folders failed to load.)
  function encodePath(path) {
    return String(path == null ? "" : path)
      .replace(/\\/g, "/")          // Windows-style backslashes
      .replace(/^(\.?\/)+/, "")      // a leading "./" or "/"
      .split("/").filter(Boolean)
      .map(encodeURIComponent).join("/");
  }

  // An image can be a plain filename, or { img, title, description } for a
  // captioned entry — normalize either form to one shape everywhere else
  // in the file can rely on.
  function normalizeImageEntry(entry) {
    return typeof entry === "string"
      ? { img: entry, title: "", description: "" }
      : { img: entry.img, title: entry.title || "", description: entry.description || "" };
  }

  // A gallery card is a single image, or a folder: { title, description, images: [...] }.
  function isFolderEntry(entry) {
    return !!entry && typeof entry === "object" && Array.isArray(entry.images);
  }

  // "activity3" or "a/b" -> "activity3/" (each segment URL-encoded); "" -> "".
  function encodeDir(dir) {
    var encoded = encodePath(dir);
    return encoded ? encoded + "/" : "";
  }

  // A category groups cards under a heading:
  //   { category: "Prelim", description: "(optional)", items: [ ...cards ] }
  // (`images:` instead of `items:` also works, as long as there's no `title`.)
  function isCategoryEntry(entry) {
    if (!entry || typeof entry !== "object") return false;
    if (Array.isArray(entry.items)) return true;
    return typeof entry.category === "string" && Array.isArray(entry.images) && !entry.title && !entry.img;
  }

  // Turns a project's raw `images` array into one flat, ordered list of cards:
  //   { type: "image", img, title, description, category, categoryDescription }
  //   { type: "folder", title, description, dir, items: [...], cover: <item>, category, categoryDescription }
  // `category` is "" for cards that aren't inside any category.
  // Folders with nothing active inside them (e.g. everything commented out) are skipped,
  // and so are categories that end up empty.
  function galleryEntries(project) {
    var out = [];

    function addCard(entry, category, categoryDescription) {
      var card = null;
      if (isFolderEntry(entry)) {
        var items = entry.images
          .filter(function (it) { return it && !isFolderEntry(it) && !isCategoryEntry(it) && (typeof it === "string" || it.img); })
          .map(normalizeImageEntry);
        if (!items.length) return;
        // Thumbnail = the latest image added (last in the list), unless `cover` names another.
        var cover = items[items.length - 1];
        if (entry.cover) {
          var picked = items.filter(function (it) { return it.img === entry.cover; })[0];
          if (picked) cover = picked;
        }
        card = {
          type: "folder",
          title: entry.title || "Untitled folder",
          description: entry.description || "",
          dir: entry.dir || "",
          items: items,
          cover: cover
        };
      } else if (entry && (typeof entry === "string" || entry.img)) {
        card = normalizeImageEntry(entry);
        card.type = "image";
      }
      if (!card) return;
      // A card can also carry its own `category: "..."` instead of being nested in one.
      var own = entry && typeof entry === "object" && typeof entry.category === "string" ? entry.category.trim() : "";
      card.category = own || category;
      card.categoryDescription = categoryDescription;
      out.push(card);
    }

    (project.images || []).forEach(function (entry) {
      if (isCategoryEntry(entry)) {
        var name = String(entry.category || entry.title || "").trim();
        var description = entry.description || "";
        (entry.items || entry.images).forEach(function (item) {
          if (!isCategoryEntry(item)) addCard(item, name, description); // categories are one level deep
        });
      } else {
        addCard(entry, "", "");
      }
    });
    return out;
  }

  // Path of a project's cover image, relative to its images folder
  // (e.g. "photo.png" or "activity3/photo.png"). Also used by home.js.
  function coverRelPath(project) {
    var entries = galleryEntries(project);
    if (!entries.length) return "";
    var first = entries[0];
    return first.type === "folder"
      ? encodeDir(first.dir) + encodePath(first.cover.img)
      : encodePath(first.img);
  }
  window.PORTFOLIO_COVER_PATH = coverRelPath;

  /* ---------- Project grid + filtering (projects/index.html) ---------- */
  function initProjectGrid() {
    var grid = document.querySelector("[data-project-grid]");
    if (!grid) return;
    var assetBase = grid.getAttribute("data-asset-base") || "";
    var linkBase = grid.getAttribute("data-link-base") || "";
    var searchInput = document.querySelector("[data-project-search]");
    var categorySelect = document.querySelector("[data-project-category]");
    var techSelect = document.querySelector("[data-project-tech]");
    var countEl = document.querySelector("[data-project-count]");
    var emptyState = document.querySelector("[data-project-empty]");

    function cardMarkup(project) {
      var coverBase = assetBase + project.slug + "/";
      var coverRel = coverRelPath(project);
      var img = coverRel
        ? '<div class="project-card-img"><img src="' + coverBase + coverRel + '" alt="" loading="lazy"></div>'
        : '<div class="project-card-img is-placeholder">Gallery in progress</div>';

      return (
        '<a class="project-card" href="' + linkBase + encodeURIComponent(project.slug) + '" data-reveal>' +
        img +
        '<div class="project-card-body">' +
        '<div class="project-card-meta"><span>' + escapeHtml(project.category) + '</span><span>' + escapeHtml(project.year) + '</span><span>' + escapeHtml(project.status) + '</span></div>' +
        '<h3>' + escapeHtml(project.name) + '</h3>' +
        '<p>' + escapeHtml(project.description) + '</p>' +
        '<span class="project-card-cta">View project →</span>' +
        '</div></a>'
      );
    }

    function render() {
      var query = (searchInput && searchInput.value.trim().toLowerCase()) || "";
      var category = (categorySelect && categorySelect.value) || "";
      var tech = (techSelect && techSelect.value) || "";

      var filtered = PROJECTS.filter(function (p) {
        var matchesQuery = !query ||
          p.name.toLowerCase().indexOf(query) !== -1 ||
          p.description.toLowerCase().indexOf(query) !== -1 ||
          p.technologies.join(" ").toLowerCase().indexOf(query) !== -1;
        var matchesCategory = !category || p.category === category || p.secondaryCategory === category;
        var matchesTech = !tech || p.technologies.indexOf(tech) !== -1;
        return matchesQuery && matchesCategory && matchesTech;
      });

      grid.innerHTML = filtered.map(cardMarkup).join("");
      if (countEl) {
        countEl.textContent = filtered.length + (filtered.length === 1 ? " project" : " projects");
      }
      if (emptyState) {
        emptyState.style.display = filtered.length ? "none" : "block";
      }
      // Newly injected cards start visible immediately (grid already in view on filter).
      grid.querySelectorAll("[data-reveal]").forEach(function (el) { el.classList.add("is-visible"); });
    }

    // Populate category + technology filters from data so they never drift
    // out of sync with whatever categories/technologies projects actually use.
    if (categorySelect) {
      var allCats = [];
      PROJECTS.forEach(function (p) {
        [p.category, p.secondaryCategory].forEach(function (c) {
          if (c && allCats.indexOf(c) === -1) allCats.push(c);
        });
      });
      allCats.sort().forEach(function (c) {
        var opt = document.createElement("option");
        opt.value = c; opt.textContent = c;
        categorySelect.appendChild(opt);
      });
    }
    if (techSelect) {
      var allTech = [];
      PROJECTS.forEach(function (p) {
        p.technologies.forEach(function (t) { if (allTech.indexOf(t) === -1) allTech.push(t); });
      });
      allTech.sort().forEach(function (t) {
        var opt = document.createElement("option");
        opt.value = t; opt.textContent = t;
        techSelect.appendChild(opt);
      });
    }

    [searchInput, categorySelect, techSelect].forEach(function (el) {
      if (el) el.addEventListener("input", render);
    });

    render();
  }

  /* ---------- Project detail page — one template, driven entirely by data ---------- */
  function initProjectPage() {
    var content = document.getElementById("project-content");
    if (!content) return; // not on the project template page

    var notFound = document.getElementById("project-not-found");
    var slug = new URLSearchParams(window.location.search).get("slug") || "";
    var project = PROJECTS.filter(function (p) { return p.slug === slug; })[0];

    if (!project) {
      content.style.display = "none";
      if (notFound) notFound.style.display = "block";
      document.title = "Project not found | Zeejin Ganaban";
      return;
    }

    // Simple text fields — the same data-field name can appear more than
    // once on the page (e.g. "year" in both the hero and the sidebar) and
    // every occurrence gets filled in.
    var fields = {
      projectType: project.projectType || "",
      name: project.name || "",
      description: project.description || "",
      year: project.year || "",
      role: project.role || "",
      status: project.status || "",
      categoryLine: project.category + (project.secondaryCategory ? " / " + project.secondaryCategory : "")
    };
    Object.keys(fields).forEach(function (key) {
      document.querySelectorAll('[data-field="' + key + '"]').forEach(function (el) {
        el.textContent = fields[key];
      });
    });

    // Narrative blocks (overview / problem / approach) — hide any block
    // whose field was left blank, rather than showing an empty heading.
    ["overview", "problem", "solution"].forEach(function (key) {
      var block = document.querySelector('[data-block="' + key + '"]');
      if (!block) return;
      var value = project[key];
      if (value && String(value).trim()) {
        var target = block.querySelector('[data-field="' + key + '"]');
        if (target) target.textContent = value;
        block.hidden = false;
      } else {
        block.hidden = true;
      }
    });

    // Features list
    var featuresBlock = document.querySelector('[data-block="features"]');
    if (featuresBlock) {
      var featuresList = featuresBlock.querySelector('[data-field="features"]');
      if (project.features && project.features.length && featuresList) {
        featuresList.innerHTML = project.features.map(function (f) {
          return "<li>" + escapeHtml(f) + "</li>";
        }).join("");
        featuresBlock.hidden = false;
      } else {
        featuresBlock.hidden = true;
      }
    }

    // Technologies
    var techList = document.querySelector('[data-field="technologies"]');
    if (techList) {
      techList.innerHTML = (project.technologies || []).map(function (t) {
        return '<li class="tag">' + escapeHtml(t) + "</li>";
      }).join("");
    }

    // Wire the media + links containers to this project, with asset paths
    // computed from its slug — this is what lets one template serve every
    // project without any per-project HTML.
    var galleryEl = document.querySelector("[data-gallery]");
    if (galleryEl) {
      galleryEl.setAttribute("data-project-slug", slug);
      galleryEl.setAttribute("data-asset-base", "../assets/images/projects/" + slug + "/");
    }
    var videoEl = document.querySelector("[data-video-block]");
    if (videoEl) {
      videoEl.setAttribute("data-project-slug", slug);
      videoEl.setAttribute("data-asset-base", "../assets/video/" + slug + "/");
    }
    var linksEl = document.querySelector("[data-project-links]");
    if (linksEl) {
      linksEl.setAttribute("data-project-slug", slug);
    }
    var embedEl = document.querySelector("[data-embed-block]");
    if (embedEl) {
      embedEl.setAttribute("data-project-slug", slug);
    }

    // Page metadata
    document.title = project.name + " | Zeejin Ganaban";
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", project.description || "");
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", project.name + " | Zeejin Ganaban");
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", project.description || "");
  }

  /* ---------- Gallery: categories + folders + image cards + lightbox (project detail pages) ---------- */
  function initGallery() {
    var galleryRoot = document.querySelector("[data-gallery]");
    if (!galleryRoot) return;
    var slug = galleryRoot.getAttribute("data-project-slug");
    var project = PROJECTS.filter(function (p) { return p.slug === slug; })[0];
    var emptyNote = document.querySelector("[data-gallery-empty]");
    var entries = project ? galleryEntries(project) : [];

    if (!entries.length) {
      if (emptyNote) emptyNote.style.display = "block";
      return;
    }

    var assetBase = galleryRoot.getAttribute("data-asset-base") || "";
    var FOLDER_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6c.4 0 .78.16 1.06.44L11.5 7h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"/></svg>';

    // Cards with the same category name share one section, in order of first
    // appearance. Cards outside any category (name "") get no heading.
    var groups = [];
    entries.forEach(function (card) {
      var group = groups.filter(function (g) { return g.name === card.category; })[0];
      if (!group) {
        group = { name: card.category, description: "", cards: [] };
        groups.push(group);
      }
      if (!group.description && card.categoryDescription) group.description = card.categoryDescription;
      group.cards.push(card);
    });
    var categoryNames = groups.filter(function (g) { return g.name; }).map(function (g) { return g.name; });

    var activeCategory = "";   // "" = everything
    var openFolderEntry = null; // the folder card currently open, or null
    var renderedTop = [];       // cards on screen at the top level, in display order

    // ----- folder bar (shown only while a folder is open) -----
    var folderBar = document.createElement("div");
    folderBar.className = "gallery-folder-bar";
    folderBar.hidden = true;
    folderBar.innerHTML =
      '<button type="button" class="gallery-back">← Back to gallery</button>' +
      '<div class="gallery-folder-heading"><h3></h3><p></p></div>' +
      '<span class="gallery-folder-count"></span>';
    galleryRoot.parentNode.insertBefore(folderBar, galleryRoot);
    var backBtn = folderBar.querySelector(".gallery-back");
    var barTitle = folderBar.querySelector("h3");
    var barDesc = folderBar.querySelector("p");
    var barCount = folderBar.querySelector(".gallery-folder-count");

    // ----- category filter chips (only worth showing with 2+ categories) -----
    var categoryBar = null;
    if (categoryNames.length >= 2) {
      categoryBar = document.createElement("div");
      categoryBar.className = "gallery-filter";
      categoryBar.setAttribute("role", "group");
      categoryBar.setAttribute("aria-label", "Filter by category");
      categoryBar.innerHTML = ['<button type="button" class="gallery-chip is-active" data-category="" aria-pressed="true">All</button>']
        .concat(categoryNames.map(function (name) {
          return '<button type="button" class="gallery-chip" data-category="' + escapeHtml(name) + '" aria-pressed="false">' + escapeHtml(name) + '</button>';
        })).join("");
      galleryRoot.parentNode.insertBefore(categoryBar, galleryRoot);
      categoryBar.addEventListener("click", function (e) {
        var chip = e.target.closest(".gallery-chip");
        if (!chip) return;
        activeCategory = chip.getAttribute("data-category") || "";
        categoryBar.querySelectorAll(".gallery-chip").forEach(function (c) {
          var on = (c.getAttribute("data-category") || "") === activeCategory;
          c.classList.toggle("is-active", on);
          c.setAttribute("aria-pressed", on ? "true" : "false");
        });
        render();
      });
    }

    function imageUrl(item, folder) {
      return assetBase + (folder ? encodeDir(folder.dir) : "") + encodePath(item.img);
    }
    function countLabel(n) { return n + (n === 1 ? " image" : " images"); }

    function sectionHeadHtml(group) {
      return '<div class="gallery-section-head"><h3>' + escapeHtml(group.name) + '</h3>' +
        (group.description ? '<p>' + escapeHtml(group.description) + '</p>' : "") + '</div>';
    }

    function cardHtml(entry, index, folder) {
      var isFolder = entry.type === "folder";
      var thumb = isFolder ? imageUrl(entry.cover, entry) : imageUrl(entry, folder);
      var title = entry.title || "";
      // The visible caption already names the card, so the thumbnail only
      // needs its own alt text when there's no caption to read.
      var alt = title ? "" : (project.name + " — image " + (index + 1));
      var badge = isFolder ? '<span class="gallery-badge">' + FOLDER_ICON + 'Folder</span>' : "";
      var caption = "";
      if (title || isFolder) {
        caption =
          '<span class="gallery-caption">' +
          '<span class="gallery-caption-title">' + escapeHtml(title) + '</span>' +
          (isFolder ? '<span class="gallery-caption-meta">' + FOLDER_ICON + escapeHtml(countLabel(entry.items.length)) + '</span>' : "") +
          '</span>';
      }
      var label = isFolder ? ' aria-label="' + escapeHtml("Open folder: " + title + ", " + countLabel(entry.items.length)) + '"' : "";
      return (
        '<button type="button" class="gallery-item' + (isFolder ? " is-folder" : "") + '" data-index="' + index + '"' + label + '>' +
        '<span class="gallery-thumb"><img src="' + thumb + '" alt="' + escapeHtml(alt) + '" loading="lazy">' + badge + '</span>' +
        caption +
        '</button>'
      );
    }

    function render() {
      var html = "";
      if (openFolderEntry) {
        html = openFolderEntry.items.map(function (item, i) {
          return cardHtml(item, i, openFolderEntry);
        }).join("");
      } else {
        renderedTop = [];
        groups.forEach(function (group) {
          if (activeCategory && group.name !== activeCategory) return;
          if (group.name) html += sectionHeadHtml(group);
          group.cards.forEach(function (card) {
            html += cardHtml(card, renderedTop.length, null);
            renderedTop.push(card);
          });
        });
      }
      galleryRoot.innerHTML = html;

      folderBar.hidden = !openFolderEntry;
      if (categoryBar) categoryBar.hidden = !!openFolderEntry;
      if (openFolderEntry) {
        barTitle.textContent = openFolderEntry.title;
        barDesc.textContent = openFolderEntry.description;
        barCount.textContent = countLabel(openFolderEntry.items.length);
      }
    }

    function openFolder(card) {
      openFolderEntry = card;
      render();
      if (folderBar.getBoundingClientRect().top < 0) folderBar.scrollIntoView({ block: "start" });
      backBtn.focus();
    }
    function closeFolder() {
      var returnTo = openFolderEntry;
      openFolderEntry = null;
      render();
      var index = renderedTop.indexOf(returnTo);
      var button = index >= 0 ? galleryRoot.querySelector('[data-index="' + index + '"]') : null;
      if (button) button.focus();
    }

    /* ----- lightbox (navigates within whatever is currently on screen) ----- */
    var lightbox = document.querySelector("[data-lightbox]");
    var lightboxImg, caption, infoBox, infoTitle, infoDesc, infoToggle, prevBtn, nextBtn;
    var list = [];
    var listFolder = null;
    var current = 0;

    function open(index) {
      current = index;
      var image = list[current];
      lightboxImg.src = imageUrl(image, listFolder);
      lightboxImg.alt = image.title || (project.name + " — image " + (current + 1));
      if (caption) {
        var parts = [];
        var category = listFolder ? listFolder.category : image.category;
        if (category) parts.push(category);
        if (listFolder) parts.push(listFolder.title);
        parts.push((current + 1) + " / " + list.length);
        caption.textContent = parts.join(" · ");
      }

      // Details default back to visible on every open/navigate — a dismiss
      // clicked on one image doesn't carry over to the next, same as a
      // YouTube end-card dismissal only lasting for that one video.
      var hasInfo = !!(image.title || image.description);
      if (infoBox) infoBox.hidden = !hasInfo;
      if (infoTitle) infoTitle.textContent = image.title || "";
      if (infoDesc) infoDesc.textContent = image.description || "";
      if (infoToggle) {
        infoToggle.hidden = !hasInfo;
        infoToggle.textContent = "Hide details";
        infoToggle.setAttribute("aria-pressed", "false");
      }
      // Nothing to step through when there's only one image.
      if (prevBtn) prevBtn.hidden = list.length < 2;
      if (nextBtn) nextBtn.hidden = list.length < 2;

      lightbox.classList.add("is-open");
      lightbox.querySelector(".lightbox-close").focus();
    }
    function close() {
      lightbox.classList.remove("is-open");
    }
    function step(delta) {
      open((current + delta + list.length) % list.length);
    }

    // Open the lightbox on card `i` of the current view. At the top level the
    // lightbox cycles through the standalone images on screen (folders are
    // opened, not viewed); inside a folder it cycles through that folder's images.
    function openImageCard(i) {
      if (!lightbox) return;
      if (openFolderEntry) {
        list = openFolderEntry.items;
        listFolder = openFolderEntry;
        open(i);
      } else {
        list = renderedTop.filter(function (c) { return c.type === "image"; });
        listFolder = null;
        open(list.indexOf(renderedTop[i]));
      }
    }

    galleryRoot.addEventListener("click", function (e) {
      var btn = e.target.closest(".gallery-item");
      if (!btn) return;
      var i = parseInt(btn.getAttribute("data-index"), 10);
      if (!openFolderEntry && renderedTop[i].type === "folder") openFolder(renderedTop[i]);
      else openImageCard(i);
    });
    backBtn.addEventListener("click", closeFolder);

    render();

    if (!lightbox) return;
    lightboxImg = lightbox.querySelector("img");
    caption = lightbox.querySelector("[data-lightbox-caption]");
    infoBox = lightbox.querySelector("[data-lightbox-info]");
    infoTitle = lightbox.querySelector("[data-lightbox-title]");
    infoDesc = lightbox.querySelector("[data-lightbox-desc]");
    infoToggle = lightbox.querySelector("[data-lightbox-info-toggle]");
    var closeBtn = lightbox.querySelector(".lightbox-close");
    prevBtn = lightbox.querySelector(".lightbox-prev");
    nextBtn = lightbox.querySelector(".lightbox-next");

    if (closeBtn) closeBtn.addEventListener("click", close);
    if (prevBtn) prevBtn.addEventListener("click", function () { step(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { step(1); });
    if (infoToggle) {
      infoToggle.addEventListener("click", function () {
        var nowHidden = !infoBox.hidden;
        infoBox.hidden = nowHidden;
        infoToggle.textContent = nowHidden ? "Show details" : "Hide details";
        infoToggle.setAttribute("aria-pressed", nowHidden ? "true" : "false");
      });
    }
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && list.length > 1) step(-1);
      if (e.key === "ArrowRight" && list.length > 1) step(1);
    });
  }

  /* ---------- Animation(s) — click-to-play gallery, not stacked players ---------- */
  function initVideos() {
    var videoRoot = document.querySelector("[data-video-block]");
    if (!videoRoot) return;
    var slug = videoRoot.getAttribute("data-project-slug");
    var project = PROJECTS.filter(function (p) { return p.slug === slug; })[0];
    var emptyNote = document.querySelector("[data-video-empty]");

    if (!project || !project.videos || !project.videos.length) {
      if (emptyNote) emptyNote.style.display = "block";
      return;
    }

    var assetBase = videoRoot.getAttribute("data-asset-base") || "";
    // A .gif (or .apng / animated .webp) listed here is shown as an animated
    // image instead of a <video> — same tile, same viewer.
    var ANIMATED_IMAGE = /\.(gif|apng|webp)$/i;
    var clips = project.videos.map(function (v) {
      // Each entry can be a plain filename ("clip.mp4" or "loop.gif") or an
      // { src, caption, poster } object — poster is an optional still thumbnail
      // image filename from the same folder.
      var clip = typeof v === "string" ? { src: v, caption: "", poster: "" } : {
        src: v.src, caption: v.caption || "", poster: v.poster || ""
      };
      clip.animated = ANIMATED_IMAGE.test(String(clip.src || ""));
      clip.kind = clip.animated ? String(clip.src).split(".").pop().toUpperCase() : "";
      return clip;
    });

    var playIcon = '<span class="video-gallery-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>';

    videoRoot.innerHTML = clips.map(function (clip, i) {
      // With an explicit poster, use it. Otherwise show the clip itself as
      // its own thumbnail (muted, no controls) and nudge it to its
      // one-second mark so the tile displays that frame.
      var thumb = clip.poster
        ? '<img src="' + assetUrl(assetBase, clip.poster) + '" alt="" loading="lazy">'
        : clip.animated
          ? '<img src="' + assetUrl(assetBase, clip.src) + '" alt="" loading="lazy">'
          : '<video class="video-gallery-thumb" muted playsinline preload="metadata" tabindex="-1">' +
            '<source src="' + assetUrl(assetBase, clip.src) + '" type="video/mp4"></video>';
      // Animated images get a small "GIF" tag instead of the play button.
      var marker = clip.animated ? '<span class="gallery-badge">' + escapeHtml(clip.kind) + '</span>' : playIcon;
      var caption = clip.caption
        ? '<span class="video-gallery-caption">' + escapeHtml(clip.caption) + '</span>'
        : "";
      var label = clip.caption || ((clip.animated ? "View animation " : "Play clip ") + (i + 1));
      return (
        '<button type="button" class="video-gallery-item" data-index="' + i + '" aria-label="' + escapeHtml(label) + '">' +
        thumb + marker + caption +
        '</button>'
      );
    }).join("");

    // Nudge each thumbnail <video> to its one-second mark so the tile
    // paints that frame instead of sitting on a black first frame.
    videoRoot.querySelectorAll(".video-gallery-thumb").forEach(function (thumbVideo) {
      thumbVideo.addEventListener("loadedmetadata", function () {
        try { thumbVideo.currentTime = Math.min(1, (thumbVideo.duration || 2) / 2); }
        catch (e) { /* some browsers throw if not seekable yet; safe to ignore */ }
      });
    });

    var lightbox = document.querySelector("[data-video-lightbox]");
    if (!lightbox) return;
    var videoEl = lightbox.querySelector("video");
    var sourceEl = videoEl.querySelector("source");
    var caption = lightbox.querySelector("[data-video-lightbox-caption]");
    var current = 0;

    // The viewer has a <video>; for a .gif we add a plain <img> next to it
    // (created on first use) and show whichever one the current clip needs.
    var gifEl = null;
    function getGifEl() {
      if (!gifEl) {
        gifEl = document.createElement("img");
        gifEl.className = "lightbox-gif";
        gifEl.alt = "";
        gifEl.hidden = true;
        videoEl.parentNode.insertBefore(gifEl, videoEl);
      }
      return gifEl;
    }
    function stopVideo() {
      videoEl.pause();
      videoEl.removeAttribute("src");
      sourceEl.removeAttribute("src");
      videoEl.load();
    }
    function hideGif() {
      if (!gifEl) return;
      gifEl.hidden = true;
      gifEl.removeAttribute("src"); // also stops the animation and frees memory
    }

    function open(index) {
      current = index;
      var clip = clips[current];
      if (clip.animated) {
        stopVideo();
        videoEl.hidden = true;
        var img = getGifEl();
        img.alt = clip.caption || ("Animation " + (current + 1));
        img.src = assetUrl(assetBase, clip.src);
        img.hidden = false;
      } else {
        hideGif();
        videoEl.hidden = false;
        sourceEl.src = assetUrl(assetBase, clip.src);
        videoEl.load();
        videoEl.play().catch(function () { /* autoplay may be blocked; controls remain available */ });
      }
      if (caption) {
        caption.textContent = clip.caption || ((current + 1) + " / " + clips.length);
      }
      lightbox.classList.add("is-open");
      lightbox.querySelector(".lightbox-close").focus();
    }
    function close() {
      stopVideo();
      hideGif();
      lightbox.classList.remove("is-open");
    }
    function step(delta) {
      current = (current + delta + clips.length) % clips.length;
      open(current);
    }

    videoRoot.querySelectorAll(".video-gallery-item").forEach(function (btn) {
      btn.addEventListener("click", function () { open(parseInt(btn.getAttribute("data-index"), 10)); });
    });
    var closeBtn = lightbox.querySelector(".lightbox-close");
    var prevBtn = lightbox.querySelector(".lightbox-prev");
    var nextBtn = lightbox.querySelector(".lightbox-next");
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (clips.length > 1 && prevBtn) prevBtn.addEventListener("click", function () { step(-1); });
    if (clips.length > 1 && nextBtn) nextBtn.addEventListener("click", function () { step(1); });
    if (clips.length <= 1) {
      if (prevBtn) prevBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
    }
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && clips.length > 1) step(-1);
      if (e.key === "ArrowRight" && clips.length > 1) step(1);
    });
  }

  /* ---------- Playable embeds (e.g. itch.io games) ---------- */
  function initEmbeds() {
    var embedRoot = document.querySelector("[data-embed-block]");
    if (!embedRoot) return;
    var slug = embedRoot.getAttribute("data-project-slug");
    var project = PROJECTS.filter(function (p) { return p.slug === slug; })[0];
    var emptyNote = document.querySelector("[data-embed-empty]");

    if (!project || !project.embeds || !project.embeds.length) {
      if (emptyNote) emptyNote.style.display = "block";
      return;
    }

    embedRoot.innerHTML = project.embeds.map(function (e) {
      // Each entry can be a plain URL, or an object for more control:
      // { url, label, aspect, linkLabel } — aspect is a CSS aspect-ratio
      // value like "16/9" or "4/3" (defaults to 4/3), linkLabel/url gives
      // a "Play on itch.io" fallback link under the frame.
      var entry = typeof e === "string" ? { url: e } : e;
      var label = entry.label
        ? '<p class="form-hint" style="margin-bottom:.6rem;">' + escapeHtml(entry.label) + '</p>'
        : "";
      var fallback = entry.linkLabel
        ? '<a class="embed-link" href="' + escapeHtml(entry.url) + '" target="_blank" rel="noopener">' + escapeHtml(entry.linkLabel) + ' ↗</a>'
        : "";
      return (
        '<div class="embed-item">' + label +
        '<div class="embed-frame" style="--embed-aspect:' + escapeHtml(entry.aspect || "4/3") + ';">' +
        '<iframe src="' + escapeHtml(entry.url) + '" loading="lazy" allowfullscreen></iframe>' +
        '</div>' + fallback +
        '</div>'
      );
    }).join("");
  }

  /* ---------- Project links (source / demo / live site) ---------- */
  function initLinks() {
    var linksRoot = document.querySelector("[data-project-links]");
    if (!linksRoot) return;
    var slug = linksRoot.getAttribute("data-project-slug");
    var project = PROJECTS.filter(function (p) { return p.slug === slug; })[0];
    if (!project) return;

    var entries = [
      { label: "Live site", url: project.projectUrl },
      { label: "Source code", url: project.githubUrl },
      { label: "Demo", url: project.demoUrl }
    ].filter(function (e) { return !!e.url; });

    if (!entries.length) {
      linksRoot.innerHTML = '<p class="project-empty-note" style="margin-top:.4rem;">No public project link, source, or demo has been provided yet.</p>';
      return;
    }

    linksRoot.innerHTML = '<ul class="tag-list">' + entries.map(function (e) {
      return '<li><a class="tag" href="' + escapeHtml(e.url) + '" target="_blank" rel="noopener">' + escapeHtml(e.label) + ' ↗</a></li>';
    }).join("") + '</ul>';
  }

  /* ---------- Media toggle (All Images / All Videos / Play — whichever a project actually has) ---------- */
  function initMediaToggle() {
    var toggle = document.querySelector("[data-media-toggle]");
    if (!toggle) return;

    var galleryEl = document.querySelector("[data-gallery]");
    var slug = galleryEl && galleryEl.getAttribute("data-project-slug");
    var project = slug && PROJECTS.filter(function (p) { return p.slug === slug; })[0];
    if (!project) return;

    var types = [
      { key: "images", label: "All Images", has: galleryEntries(project).length > 0 },
      { key: "videos", label: "All Videos", has: !!(project.videos && project.videos.length) },
      { key: "embeds", label: "Play", has: !!(project.embeds && project.embeds.length) }
    ];
    var available = types.filter(function (t) { return t.has; });
    var panels = document.querySelectorAll("[data-media-panel]");

    // Nothing to switch between — one type (or none) has content, so skip
    // the toggle entirely and just show whichever panel actually applies.
    if (available.length <= 1) {
      toggle.hidden = true;
      var onlyKey = available.length ? available[0].key : "images";
      panels.forEach(function (panel) {
        panel.hidden = panel.getAttribute("data-media-panel") !== onlyKey;
      });
      return;
    }

    // Two or three types present — build the toggle to match.
    toggle.hidden = false;
    toggle.innerHTML = available.map(function (t, i) {
      return '<button type="button" class="media-toggle-btn' + (i === 0 ? " is-active" : "") + '" data-media-tab="' + t.key + '" role="tab" aria-selected="' + (i === 0 ? "true" : "false") + '">' + t.label + '</button>';
    }).join("");

    var buttons = toggle.querySelectorAll("[data-media-tab]");
    panels.forEach(function (panel) {
      panel.hidden = panel.getAttribute("data-media-panel") !== available[0].key;
    });

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = btn.getAttribute("data-media-tab");
        buttons.forEach(function (b) {
          var isActive = b === btn;
          b.classList.toggle("is-active", isActive);
          b.setAttribute("aria-selected", isActive ? "true" : "false");
        });
        panels.forEach(function (panel) {
          panel.hidden = panel.getAttribute("data-media-panel") !== target;
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initProjectGrid();
    initProjectPage();
    initGallery();
    initVideos();
    initEmbeds();
    initLinks();
    initMediaToggle();
  });
})();
