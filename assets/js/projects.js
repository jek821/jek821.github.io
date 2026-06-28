var projects = [
  {
    title: "Byte Chat",
    tagline: "Self-hosted encrypted chat on a custom TCP protocol",
    description:
      "Byte Chat is a distributed, open-source, end-to-end encrypted chat application written in Go, with a terminal UI built using the Bubble Tea framework. Transport uses a custom TCP protocol for messaging; HTTPS is used only for authentication.",
    image: "projects/bytechat.png",
    tags: ["go", "tcp", "tui", "e2e-encryption"],
    categories: ["go"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/ByteChat" }
    ]
  },
  {
    title: "Claim Inspector",
    tagline: "Hybrid RAG + LLM pipeline for source-backed fact-checking",
    description:
      "An open-source fact-checking app that extracts factual claims from text or uploaded files, retrieves supporting sources from Wikipedia and scholarly databases, and scores each claim using a hybrid RAG pipeline with Claude Haiku.",
    image: "projects/claim-inspector.png",
    tags: ["python", "rag", "llm", "fastapi"],
    categories: ["python", "ai"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/Claim-Inspector" },
      { text: "Walkthrough", url: "projects/claim-inspector.html" }
    ]
  },
  {
    title: "LogSync",
    tagline: "Distributed, self-hostable log routing in Go",
    description:
      "LogSync is a distributed, self-hostable logging library written in Go. It lets you use Unix socket files on the hosts where your software runs to securely route logs to a central logging server.",
    image: "projects/logsync.png",
    tags: ["go", "unix-sockets", "distributed"],
    categories: ["go"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/LogSync" }
    ]
  },
  {
    title: "Life Logger",
    tagline: "Daily habit tracking with a personal analytics API",
    description:
      "Life Logger is a deployed web app for tracking daily activities and collecting data over time. The backend exposes an API to query habits, aggregate statistics, and spot trends across days and weeks.",
    image: "projects/lifelogger.png",
    tags: ["python", "fastapi", "sqlite", "web"],
    categories: ["python", "web"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/LifeLogger" },
      { text: "Visit Site", url: "https://lifelogger.org" }
    ]
  },
  {
    title: "Full Stack Dynamic Image Compression",
    tagline: "Seam-carving compression with a Flask + Vue full-stack UI",
    description:
      "A full-stack application built around a custom seam-carving image compression algorithm. The backend runs the algorithm via Flask; the Vue.js frontend lets users upload images and adjust compression settings.",
    image: "projects/image_compression.png",
    tags: ["python", "flask", "vue", "algorithms"],
    categories: ["python", "web"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/image_compression" },
      { text: "Visit Site", url: "https://dynamic-image-compression.onrender.com" }
    ]
  },
  {
    title: "Vector Play",
    tagline: "Lightweight TypeScript + Svelte SVG game framework",
    description:
      "A web game framework built with TypeScript and Svelte around SVG and the DOM. Plug in your own vector assets to assemble scenes and ship dynamic gameplay without fighting a large runtime.",
    image: "projects/vector-play.png",
    tags: ["typescript", "svelte", "svg"],
    categories: ["web"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/vector-play" }
    ]
  }
];

function renderProjects() {
  var container = document.getElementById("projects-list");
  if (!container) return;

  var inPages = window.location.pathname.indexOf("/pages/") !== -1;
  var base = inPages ? "../assets/images/" : "assets/images/";
  var linkBase = inPages ? "../" : "";

  projects.forEach(function (p) {
    var card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-categories", (p.categories || []).join(" "));

    var img = document.createElement("img");
    img.src = base + p.image;
    img.alt = p.title + " screenshot";
    img.className = "project-card-img";
    img.loading = "lazy";
    card.appendChild(img);

    var body = document.createElement("div");
    body.className = "project-card-body";

    var name = document.createElement("h3");
    name.className = "project-card-name";
    name.textContent = p.title;
    body.appendChild(name);

    if (p.tagline) {
      var tagline = document.createElement("p");
      tagline.className = "project-card-tagline";
      tagline.textContent = p.tagline;
      body.appendChild(tagline);
    }

    if (p.tags && p.tags.length) {
      var tagsDiv = document.createElement("div");
      tagsDiv.className = "project-card-tags";
      p.tags.forEach(function (t) {
        var span = document.createElement("span");
        span.className = "tag";
        span.textContent = t;
        tagsDiv.appendChild(span);
      });
      body.appendChild(tagsDiv);
    }

    if (p.buttons && p.buttons.length) {
      var links = document.createElement("div");
      links.className = "project-card-links";
      p.buttons.forEach(function (btn) {
        var url = (btn.url || "").trim();
        if (!url) return;
        var a = document.createElement("a");
        a.href = url.startsWith("http") ? url : linkBase + url;
        a.textContent = btn.text + " →";
        a.className = "project-link";
        if (url.startsWith("http")) {
          a.target = "_blank";
          a.rel = "noreferrer";
        }
        links.appendChild(a);
      });
      body.appendChild(links);
    }

    card.appendChild(body);
    container.appendChild(card);
  });
}

function initFilter() {
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".project-card");
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      var filter = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        if (filter === "all") {
          card.classList.remove("hidden");
        } else {
          var cats = card.getAttribute("data-categories") || "";
          card.classList.toggle("hidden", cats.indexOf(filter) === -1);
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  initFilter();
});
