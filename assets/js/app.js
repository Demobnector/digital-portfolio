/* ==========================================================================
   app.js — shared behavior across all pages
   Theme toggle (persisted), mobile nav, scroll reveal, contact form.
   Written defensively: every block checks the element exists first,
   so this file is safe to include unchanged on every page.
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "zg-theme";

  /* ---------- Theme toggle ---------- */
  function initTheme() {
    var root = document.documentElement;
    var toggle = document.querySelector("[data-theme-toggle]");
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }
    if (stored === "light" || stored === "dark") {
      root.setAttribute("data-theme", stored);
    }
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      var isDark = current
        ? current === "dark"
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* storage unavailable */ }
      toggle.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    });
  }

  /* ---------- Mobile nav ---------- */
  function initMobileNav() {
    var button = document.querySelector("[data-nav-toggle]");
    var panel = document.querySelector("[data-mobile-nav]");
    if (!button || !panel) return;
    button.addEventListener("click", function () {
      var isOpen = panel.classList.toggle("is-open");
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll reveal (single, gentle pass) ---------- */
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Contact form ---------- */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    var status = form.querySelector("[data-form-status]");
    var recipient = form.getAttribute("data-recipient") || "jinganaban@gmail.com";

    function showError(row, message) {
      row.classList.add("has-error");
      var errorEl = row.querySelector(".form-error");
      if (errorEl) errorEl.textContent = message;
    }
    function clearError(row) {
      row.classList.remove("has-error");
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Honeypot: if filled, silently treat as spam and stop.
      var honeypot = form.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value.trim() !== "") {
        return;
      }

      var nameField = form.querySelector("#contact-name");
      var emailField = form.querySelector("#contact-email");
      var subjectField = form.querySelector("#contact-subject");
      var messageField = form.querySelector("#contact-message");
      var valid = true;

      [nameField, emailField, subjectField, messageField].forEach(function (field) {
        if (!field) return;
        var row = field.closest(".form-row");
        if (!field.value.trim()) {
          valid = false;
          if (row) showError(row, "This field is required.");
        } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
          valid = false;
          if (row) showError(row, "Enter a valid email address.");
        } else if (row) {
          clearError(row);
        }
      });

      if (!valid) {
        if (status) {
          status.textContent = "Please fix the highlighted fields before sending.";
          status.className = "form-status is-visible is-error";
        }
        return;
      }

      var subject = encodeURIComponent(subjectField.value.trim());
      var body = encodeURIComponent(
        "Name: " + nameField.value.trim() +
        "\nEmail: " + emailField.value.trim() +
        "\n\n" + messageField.value.trim()
      );
      var mailtoUrl = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;

      if (status) {
        status.textContent = "Opening your email app with this message ready to send…";
        status.className = "form-status is-visible is-success";
      }
      window.location.href = mailtoUrl;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initMobileNav();
    initReveal();
    initYear();
    initContactForm();
  });
})();
