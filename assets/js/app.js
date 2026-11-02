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

  /* ---------- Scroll reveal (gentle fade-in for sections below the fold) ----------
     Content is VISIBLE by default. Only sections that start below the visible
     screen are held back (.reveal-pending) and faded in as they scroll into view,
     so nothing already on screen — or on a page where JS fails — can ever stay
     hidden. (An earlier version hid everything until 15% of it was on screen,
     which left tall pages blank on small phones.) */
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    function show(el) {
      el.classList.remove("reveal-pending");
      el.classList.add("is-visible");
    }

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(show);
      return;
    }

    var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    var pending = [];
    items.forEach(function (el) {
      // Anything that starts on screen (or above it) is never hidden.
      if (el.getBoundingClientRect().top < viewportHeight) {
        show(el);
      } else {
        el.classList.add("reveal-pending");
        pending.push(el);
      }
    });
    if (!pending.length) return;

    // threshold 0: reveal as soon as ANY part is on screen, however tall the section is.
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    pending.forEach(function (el) { observer.observe(el); });

    // Safety net: whatever happens, nothing stays hidden for more than a few seconds.
    setTimeout(function () { pending.forEach(show); }, 3500);
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Contact form (sends through Formspree) ----------
     The form's `action` attribute holds the Formspree endpoint
     (https://formspree.io/f/<your form id>) — see contact/index.html.
     While that still says YOUR_FORM_ID, the form falls back to opening the
     visitor's email app, so it never fails silently. */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    var status = form.querySelector("[data-form-status]");
    var submitBtn = form.querySelector('button[type="submit"]');
    var submitLabel = submitBtn ? submitBtn.textContent : "";
    var fallbackEmail = form.getAttribute("data-fallback-email") || "jinganaban@gmail.com";
    var endpoint = (form.getAttribute("action") || "").trim();
    var configured = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+\/?$/.test(endpoint);
    var sending = false;

    if (!configured && window.console) {
      console.warn("Contact form: Formspree isn't set up yet. Put your form URL in the <form action> in contact/index.html. Using the email-app fallback for now.");
    }

    var fields = {
      name: form.querySelector("#contact-name"),
      email: form.querySelector("#contact-email"),
      _subject: form.querySelector("#contact-subject"),
      message: form.querySelector("#contact-message")
    };

    function showError(row, message) {
      row.classList.add("has-error");
      var errorEl = row.querySelector(".form-error");
      if (errorEl) errorEl.textContent = message;
    }
    function clearError(row) {
      row.classList.remove("has-error");
    }
    function setStatus(kind, text, withEmailLink) {
      if (!status) return;
      status.className = "form-status is-visible is-" + kind;
      status.textContent = text;
      if (withEmailLink) {
        status.appendChild(document.createTextNode(" You can also email me directly at "));
        var link = document.createElement("a");
        link.href = "mailto:" + fallbackEmail;
        link.textContent = fallbackEmail;
        status.appendChild(link);
        status.appendChild(document.createTextNode("."));
      }
    }
    function setSending(isSending) {
      sending = isSending;
      if (!submitBtn) return;
      submitBtn.disabled = isSending;
      submitBtn.textContent = isSending ? "Sending…" : submitLabel;
      form.setAttribute("aria-busy", isSending ? "true" : "false");
    }

    // Typing in a field clears its error straight away.
    form.addEventListener("input", function (event) {
      var row = event.target.closest && event.target.closest(".form-row");
      if (row) clearError(row);
    });

    function validate() {
      var firstInvalid = null;
      Object.keys(fields).forEach(function (key) {
        var field = fields[key];
        if (!field) return;
        var row = field.closest(".form-row");
        var value = field.value.trim();
        var message = "";
        if (!value) message = "This field is required.";
        else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Enter a valid email address.";
        if (message) {
          if (row) showError(row, message);
          if (!firstInvalid) firstInvalid = field;
        } else if (row) {
          clearError(row);
        }
      });
      return firstInvalid;
    }

    function sendByEmailApp() {
      var subject = encodeURIComponent(fields._subject.value.trim());
      var body = encodeURIComponent(
        "Name: " + fields.name.value.trim() +
        "\nEmail: " + fields.email.value.trim() +
        "\n\n" + fields.message.value.trim()
      );
      setStatus("success", "Opening your email app with this message ready to send…");
      window.location.href = "mailto:" + fallbackEmail + "?subject=" + subject + "&body=" + body;
    }

    // Formspree answers errors as JSON: { error: "...", errors: [{ field, code, message }] }
    var FRIENDLY = {
      TYPE_EMAIL: "Enter a valid email address.",
      REQUIRED_FIELD: "This field is required.",
      EMPTY: "This field is required."
    };
    function showServerErrors(data) {
      var general = [];
      var shownOnFields = 0;
      var list = data && Array.isArray(data.errors) ? data.errors : [];
      list.forEach(function (err) {
        if (!err) return;
        var text = FRIENDLY[err.code] || err.message || "Please check this field.";
        var field = err.field && fields[err.field];
        var row = field && field.closest(".form-row");
        if (row) { showError(row, text); shownOnFields++; }
        else if (err.message) general.push(err.message);
      });

      if (general.length) {
        setStatus("error", general.join(" "), true);
      } else if (shownOnFields) {
        setStatus("error", "Please fix the highlighted fields and try again.");
      } else {
        setStatus("error", "Sorry — your message couldn't be sent right now.", true);
      }
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (sending) return;

      // Honeypot: real visitors never see this field. If it's filled, it's a bot — drop it quietly.
      var honeypot = form.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value.trim() !== "") return;

      var firstInvalid = validate();
      if (firstInvalid) {
        setStatus("error", "Please fix the highlighted fields before sending.");
        firstInvalid.focus();
        return;
      }

      if (!configured) { sendByEmailApp(); return; }

      var data = new FormData(form);
      data.set("_replyto", fields.email.value.trim()); // so "Reply" in the notification goes to the visitor

      var controller = typeof AbortController === "function" ? new AbortController() : null;
      var timer = controller ? setTimeout(function () { controller.abort(); }, 20000) : null;

      setSending(true);
      setStatus("success", "Sending your message…");

      fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller ? controller.signal : undefined
      }).then(function (response) {
        return response.json().catch(function () { return {}; }).then(function (json) {
          return { ok: response.ok, json: json };
        });
      }).then(function (result) {
        if (result.ok) {
          form.reset();
          setStatus("success", "Thank you! Your message has been sent — I'll get back to you soon.");
        } else {
          showServerErrors(result.json);
        }
      }).catch(function () {
        setStatus("error", "Sorry — the message couldn't be sent. Check your connection and try again.", true);
      }).then(function () {
        if (timer) clearTimeout(timer);
        setSending(false);
      });
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