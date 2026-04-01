const projects = [
    {
        title: "Life Logger",
        image: "assets/images/projects/lifelogger.png",
        imagePosition: "50% 52%",
        imageFit: "cover",
        tightCrop: true,
        description:
            "Life Logger is a web app for tracking your daily activities and collecting data over time. User authentication scopes each account so its data stays tied to the right user. You can log what you do, how long it takes, and how patterns shift across days and weeks. The backend exposes an API so you can query your own habits, aggregate statistics, and spot trends, turning vague goals into measurable improvements in time efficiency and productivity.",
        buttons: [
            { text: "GitHub", url: "https://github.com/jek821/LifeLogger", type: "primary" },
            { text: "Visit Site", url: "https://lifelogger.org", type: "secondary" }
        ]
    },
    {
        title: "Byte Chat",
        image: "assets/images/projects/bytechat.png",
        imagePosition: "50% 45%",
        imageFit: "cover",
        imageEdgeToEdge: true,
        description:
            "Byte Chat is a distributed, open-source, end-to-end encrypted chat application written in Go, with a terminal UI built using the Bubble Tea framework. Transport uses a custom protocol on TCP with TLS, so sessions stay encrypted on the wire while the stack stays under your control. User authentication is built in so identities and sessions map to real users on your deployment. The architecture is geared toward security and self-hosting: you can run your own instance instead of trusting a third-party service with your conversations. It is meant as a practical alternative to mainstream chat apps, with familiar messaging flows in the terminal and encryption and deployment flexibility as first-class concerns.",
        buttons: [
            { text: "GitHub", url: "https://github.com/jek821/ByteChat", type: "primary" },
            { text: "Visit Site", url: "", type: "secondary" }
        ]
    },
    {
        title: "LogSync",
        image: "assets/images/projects/logsync.png",
        imagePosition: "50% 48%",
        imageFit: "cover",
        tightCrop: true,
        description:
            "LogSync is a distributed, self-hostable logging library written in Go. It lets you use Unix socket files on the hosts where your software runs to securely route logs to a central logging server, so you can monitor deployments without scattering across machines. The plan includes a web application for easier log viewing and a Bubble Tea TUI to make day-to-day use smoother.",
        buttons: [
            { text: "GitHub", url: "https://github.com/jek821/LogSync", type: "primary" },
            { text: "Visit Site", url: "", type: "secondary" }
        ]
    },
    {
        title: "Full Stack Dynamic Image Compression",
        image: "assets/images/projects/image_compression.png",
        imageLargerContain: true,
        description:
            "This project was inspired by a dynamic programming assignment on seam carving in my algorithms class. After successfully implementing my own image compression algorithm on my local machine, I decided to build a full-stack application to integrate it into a practical tool. The backend, built with Flask, runs my custom algorithm, while the frontend, developed with Vue.js, provides a user-friendly interface for uploading images and adjusting compression settings. Since I typically use Node.js for backend development, experimenting with Flask for this project was both fun and educational.",
        buttons: [
            { text: "GitHub", url: "https://github.com/jek821/image_compression", type: "primary" },
            { text: "Visit Site", url: "https://dynamic-image-compression.onrender.com", type: "secondary" }
        ]
    }
];

function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) {
        return;
    }

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        const imageDiv = document.createElement("div");
        imageDiv.className = "project-image";
        if (project.imageFit === "cover") {
            imageDiv.classList.add("project-image--fit-cover");
        }
        if (project.tightCrop) {
            imageDiv.classList.add("project-image--tight-crop");
        }
        if (project.imageEdgeToEdge) {
            imageDiv.classList.add("project-image--edge-to-edge");
        }
        if (project.imageLargerContain) {
            imageDiv.classList.add("project-image--larger-contain");
        }

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;
        if (project.imagePosition) {
            img.style.objectPosition = project.imagePosition;
        }
        imageDiv.appendChild(img);

        const infoDiv = document.createElement("div");
        infoDiv.className = "project-info";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "project-buttons";

        project.buttons.forEach((button) => {
            const url = (button.url || "").trim();
            if (!url) {
                const placeholder = document.createElement("span");
                placeholder.textContent = button.text;
                placeholder.className =
                    (button.type === "secondary" ? "btn btn-secondary" : "btn") + " btn-disabled";
                placeholder.setAttribute("aria-disabled", "true");
                placeholder.title = "Site link coming soon";
                buttonsDiv.appendChild(placeholder);
                return;
            }
            const link = document.createElement("a");
            link.href = url;
            link.textContent = button.text;
            link.className = button.type === "secondary" ? "btn btn-secondary" : "btn";
            if (url.startsWith("http")) {
                link.target = "_blank";
                link.rel = "noreferrer";
            }
            buttonsDiv.appendChild(link);
        });

        infoDiv.appendChild(title);
        infoDiv.appendChild(description);
        infoDiv.appendChild(buttonsDiv);

        projectDiv.appendChild(imageDiv);
        projectDiv.appendChild(infoDiv);
        container.appendChild(projectDiv);
    });
}

document.addEventListener("DOMContentLoaded", renderProjects);
