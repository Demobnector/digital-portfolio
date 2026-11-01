/* ==========================================================================
   home.js — renders the homepage's "Featured project" card from the same
   PROJECTS array the rest of the site uses (assets/js/projects.js), so the
   homepage can never drift out of sync with it.

   Which project is featured: the first one with `featured: true`, otherwise
   simply the first project in the array. If there are no projects at all,
   the whole section is hidden.
   Must be loaded AFTER projects.js.
   ========================================================================== */
(function () {
  "use strict";

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var section = document.querySelector("[data-featured-section]");
    var slot = document.querySelector("[data-featured-project]");
    if (!section || !slot) return;

    var projects = window.PORTFOLIO_PROJECTS || [];
    var project = projects.filter(function (p) { return p.featured; })[0] || projects[0];

    if (!project) {
      section.hidden = true;
      return;
    }

    // projects.js works out the cover (including when the first card is a
    // folder, in which case it's that folder's latest image).
    var rel = typeof window.PORTFOLIO_COVER_PATH === "function" ? window.PORTFOLIO_COVER_PATH(project) : "";
    var coverUrl = rel ? "assets/images/projects/" + project.slug + "/" + rel : "";

    var cover = coverUrl
      ? '<div class="project-card-img"><img src="' + coverUrl + '" alt="" loading="lazy"></div>'
      : '<div class="project-card-img is-placeholder">Gallery in progress</div>';

    slot.innerHTML =
      '<a class="project-card" href="projects/project.html?slug=' + encodeURIComponent(project.slug) + '" style="max-width:640px;">' +
      cover +
      '<div class="project-card-body">' +
      '<div class="project-card-meta"><span>' + escapeHtml(project.category) + '</span><span>' + escapeHtml(project.year) + '</span><span>' + escapeHtml(project.status) + '</span></div>' +
      '<h3>' + escapeHtml(project.name) + '</h3>' +
      '<p>' + escapeHtml(project.description) + '</p>' +
      '<span class="project-card-cta">View project →</span>' +
      '</div></a>';
  });
})();
