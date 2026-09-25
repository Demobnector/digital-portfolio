/* ==========================================================================
   projects.js — structured project data + data-driven rendering
   Add a new project by adding one object to PROJECTS below. Nothing else
   needs to change for it to show up on the grid, be searchable/filterable,
   and (once its own page exists) link through to a case-study layout.
   See README.md → "Adding a project" for the full walkthrough.
   ========================================================================== */
(function () {
  "use strict";

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
      images: [
        // "activity4_Create_Your_World_Typography.jpg",
        "activity3_social_media_post_instagram.png",
        "activity3_social_media_post.png",
        "activity3_landing_page_banner.png",
        "activity3_icon.png",
        "activity3_banner_ad.png",
        // "activity3_Brew_Haven_Logo.jpg",
        "activity2_Ganaban_Vertical_Logo.png",
        "activity2_Ganaban_Icon.png",
        "activity2_Ganaban_Horizontal_Logo.png",
        "activity2_Ganaban_Badge.png",
        "activity2_Ganaban_Sketch.png",
        // "activity1_.JPG"
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
    },
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
        "Seven Seconds of Silence with You - Meetup Scene.mp4",
        "Birthday Present 01 (2025).mp4",
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
		"banga04.png",
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
  ];

  window.PORTFOLIO_PROJECTS = PROJECTS;

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  // Builds a safe asset URL from a base path + a raw filename that may
  // contain spaces, parentheses, apostrophes, etc. — encodes just the
  // filename (not the base path's slashes) so "My Clip (2025).mp4" resolves
  // correctly both locally and once hosted on GitHub Pages.
  function assetUrl(base, filename) {
    return base + encodeURIComponent(filename);
  }

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
      var img = project.images && project.images.length
        ? '<div class="project-card-img"><img src="' + assetUrl(coverBase, project.images[0]) + '" alt="" loading="lazy"></div>'
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

  /* ---------- Gallery + lightbox (project detail pages) ---------- */
  function initGallery() {
    var galleryRoot = document.querySelector("[data-gallery]");
    if (!galleryRoot) return;
    var slug = galleryRoot.getAttribute("data-project-slug");
    var project = PROJECTS.filter(function (p) { return p.slug === slug; })[0];
    var emptyNote = document.querySelector("[data-gallery-empty]");

    if (!project || !project.images || !project.images.length) {
      if (emptyNote) emptyNote.style.display = "block";
      return;
    }

    var assetBase = galleryRoot.getAttribute("data-asset-base") || "";
    var images = project.images;

    galleryRoot.innerHTML = images.map(function (img, i) {
      return '<button type="button" class="gallery-item" data-index="' + i + '">' +
        '<img src="' + assetUrl(assetBase, img) + '" alt="' + escapeHtml(project.name) + ' — image ' + (i + 1) + '" loading="lazy"></button>';
    }).join("");

    var lightbox = document.querySelector("[data-lightbox]");
    if (!lightbox) return;
    var lightboxImg = lightbox.querySelector("img");
    var caption = lightbox.querySelector("[data-lightbox-caption]");
    var current = 0;

    function open(index) {
      current = index;
      lightboxImg.src = assetUrl(assetBase, images[current]);
      lightboxImg.alt = project.name + " — image " + (current + 1);
      if (caption) caption.textContent = (current + 1) + " / " + images.length;
      lightbox.classList.add("is-open");
      lightbox.querySelector(".lightbox-close").focus();
    }
    function close() {
      lightbox.classList.remove("is-open");
    }
    function step(delta) {
      current = (current + delta + images.length) % images.length;
      open(current);
    }

    galleryRoot.querySelectorAll(".gallery-item").forEach(function (btn) {
      btn.addEventListener("click", function () { open(parseInt(btn.getAttribute("data-index"), 10)); });
    });
    var closeBtn = lightbox.querySelector(".lightbox-close");
    var prevBtn = lightbox.querySelector(".lightbox-prev");
    var nextBtn = lightbox.querySelector(".lightbox-next");
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (prevBtn) prevBtn.addEventListener("click", function () { step(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { step(1); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
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
    var clips = project.videos.map(function (v) {
      // Each entry can be a plain filename ("clip.mp4") or an
      // { src, caption, poster } object — poster is an optional thumbnail
      // image filename from the same project's images folder.
      return typeof v === "string" ? { src: v, caption: "", poster: "" } : {
        src: v.src, caption: v.caption || "", poster: v.poster || ""
      };
    });

    var playIcon = '<span class="video-gallery-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>';

    videoRoot.innerHTML = clips.map(function (clip, i) {
      // With an explicit poster, use it. Otherwise show the clip itself as
      // its own thumbnail (muted, no controls) and nudge it to its
      // one-second mark so the tile displays that frame.
      var thumb = clip.poster
        ? '<img src="' + assetUrl(assetBase, clip.poster) + '" alt="" loading="lazy">'
        : '<video class="video-gallery-thumb" muted playsinline preload="metadata" tabindex="-1">' +
          '<source src="' + assetUrl(assetBase, clip.src) + '" type="video/mp4"></video>';
      var caption = clip.caption
        ? '<span class="video-gallery-caption">' + escapeHtml(clip.caption) + '</span>'
        : "";
      return (
        '<button type="button" class="video-gallery-item" data-index="' + i + '">' +
        thumb + playIcon + caption +
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

    function open(index) {
      current = index;
      sourceEl.src = assetUrl(assetBase, clips[current].src);
      videoEl.load();
      videoEl.play().catch(function () { /* autoplay may be blocked; controls remain available */ });
      if (caption) {
        caption.textContent = clips[current].caption || ((current + 1) + " / " + clips.length);
      }
      lightbox.classList.add("is-open");
      lightbox.querySelector(".lightbox-close").focus();
    }
    function close() {
      videoEl.pause();
      videoEl.removeAttribute("src");
      sourceEl.removeAttribute("src");
      videoEl.load();
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
      { key: "images", label: "All Images", has: !!(project.images && project.images.length) },
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
