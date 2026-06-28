var projects = [
  {
    title: "Byte Chat",
    tagline: "Self-hosted encrypted chat on a custom TCP protocol",
    description:
      "Byte Chat is a distributed, open-source, end-to-end encrypted chat application written in Go, with a terminal UI built using the Bubble Tea framework. Transport uses a custom TCP protocol for messaging; HTTPS is used only for authentication. User authentication is built in so identities and sessions map to real users on your deployment. The architecture is geared toward security and self-hosting: run your own instance instead of trusting a third-party service with your conversations.",
    tags: ["go", "tcp", "tui", "e2e-encryption"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/ByteChat" }
    ]
  },
  {
    title: "Claim Inspector",
    tagline: "Hybrid RAG + LLM pipeline for source-backed fact-checking",
    description:
      "An open-source fact-checking app that extracts factual claims from text or uploaded files, retrieves supporting sources from Wikipedia and scholarly databases, and scores each claim using a hybrid RAG pipeline with Claude Haiku. For each claim it gathers source text from metadata-driven routing, chunks and indexes the corpus, uses Voyage embeddings plus lexical overlap to retrieve the most relevant passages, and has Haiku assess validity against those passages before returning analysis with cited sources.",
    tags: ["python", "rag", "llm", "fastapi"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/Claim-Inspector" },
      { text: "View Walkthrough", url: "projects/claim-inspector.html" }
    ]
  },
  {
    title: "LogSync",
    tagline: "Distributed, self-hostable log routing in Go",
    description:
      "LogSync is a distributed, self-hostable logging library written in Go. It lets you use Unix socket files on the hosts where your software runs to securely route logs to a central logging server, so you can monitor deployments without scattering across machines. Planned additions include a web UI for log viewing and a Bubble Tea TUI for day-to-day use.",
    tags: ["go", "unix-sockets", "distributed"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/LogSync" }
    ]
  },
  {
    title: "Life Logger",
    tagline: "Daily habit tracking with a personal analytics API",
    description:
      "Life Logger is a deployed web app for tracking daily activities and collecting data over time. User authentication scopes each account to the right user. The backend exposes an API to query habits, aggregate statistics, and spot trends across days and weeks — turning vague goals into measurable data on time and productivity.",
    tags: ["python", "fastapi", "sqlite", "web"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/LifeLogger" },
      { text: "Visit Site", url: "https://lifelogger.org" }
    ]
  },
  {
    title: "Full Stack Dynamic Image Compression",
    tagline: "Seam-carving compression with a Flask + Vue full-stack UI",
    description:
      "A full-stack application built around a custom seam-carving image compression algorithm, originally implemented from a dynamic programming assignment. The backend runs the algorithm via Flask; the Vue.js frontend lets users upload images and adjust compression settings in the browser.",
    tags: ["python", "flask", "vue", "algorithms"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/image_compression" },
      { text: "Visit Site", url: "https://dynamic-image-compression.onrender.com" }
    ]
  },
  {
    title: "Vector Play",
    tagline: "Lightweight TypeScript + Svelte SVG game framework",
    description:
      "A web game framework built with TypeScript and Svelte around SVG and the DOM. Plug in your own vector assets to assemble scenes and ship dynamic gameplay without fighting a large runtime. Scalable vector art keeps memory and draw work light compared to sprite sheets; the library stays deliberately minimal.",
    tags: ["typescript", "svelte", "svg"],
    buttons: [
      { text: "GitHub", url: "https://github.com/jek821/vector-play" }
    ]
  }
];

function renderProjects() {
  var container = document.getElementById("projects-list");
  if (!container) return;

  var inSubdir = window.location.pathname.indexOf("/pages/") !== -1;
  var base = inSubdir ? "../" : "";

  projects.forEach(function (project) {
    var article = document.createElement("article");
    article.className = "project-card";

    var name = document.createElement("h3");
    name.className = "project-card-name";
    name.textContent = project.title;
    article.appendChild(name);

    if (project.tagline) {
      var tagline = document.createElement("p");
      tagline.className = "project-card-tagline";
      tagline.textContent = project.tagline;
      article.appendChild(tagline);
    }

    var desc = document.createElement("p");
    desc.className = "project-card-desc";
    desc.textContent = project.description;
    article.appendChild(desc);

    if (project.tags && project.tags.length) {
      var tagsDiv = document.createElement("div");
      tagsDiv.className = "project-card-tags";
      tagsDiv.setAttribute("aria-label", "Tech stack");
      project.tags.forEach(function (tag) {
        var span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;
        tagsDiv.appendChild(span);
      });
      article.appendChild(tagsDiv);
    }

    if (project.buttons && project.buttons.length) {
      var linksDiv = document.createElement("div");
      linksDiv.className = "project-card-links";
      project.buttons.forEach(function (btn) {
        var url = (btn.url || "").trim();
        if (!url) return;
        var a = document.createElement("a");
        a.href = url.startsWith("http") ? url : base + url;
        a.textContent = btn.text + " →";
        a.className = "project-link";
        if (url.startsWith("http")) {
          a.target = "_blank";
          a.rel = "noreferrer";
        }
        linksDiv.appendChild(a);
      });
      article.appendChild(linksDiv);
    }

    container.appendChild(article);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);
