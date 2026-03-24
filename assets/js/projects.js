const projects = [
    {
        title: "Full Stack Dynamic Image Compression",
        image: "assets/images/projects/image_compression.png",
        imagePosition: "50% 35%",
        description:
            "This project was inspired by a dynamic programming assignment on seam carving in my algorithms class. After successfully implementing my own image compression algorithm on my local machine, I decided to build a full-stack application to integrate it into a practical tool. The backend, built with Flask, runs my custom algorithm, while the frontend, developed with Vue.js, provides a user-friendly interface for uploading images and adjusting compression settings. Since I typically use Node.js for backend development, experimenting with Flask for this project was both fun and educational.",
        buttons: [
            { text: "GitHub", url: "https://github.com/jek821/image_compression", type: "primary" },
            { text: "Try Project", url: "https://dynamic-image-compression.onrender.com", type: "secondary" }
        ]
    },
    {
        title: "Fullstack Machine Learning Integration",
        image: "assets/images/projects/fullstack.png",
        imagePosition: "50% 35%",
        description:
            "This project began as an experimental design integrating a handwritten numbers model into a web application using TensorFlow Keras. It has since evolved to leverage AWS Textract for converting handwritten and written text into digital text. The application integrates machine learning models and AWS services into a Vue/Vite frontend and a Node.js Express backend, showcasing how advanced AI capabilities can be made accessible through web interfaces. This experimental approach highlights scalable and efficient methods for connecting machine learning with practical applications.",
        buttons: [
            { text: "GitHub", url: "https://github.com/jek821/fullstack_model", type: "primary" },
            { text: "Try Project", url: "https://fullstack-model.onrender.com", type: "secondary" }
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
            const link = document.createElement("a");
            link.href = button.url;
            link.textContent = button.text;
            link.className = button.type === "secondary" ? "btn btn-secondary" : "btn";
            if (button.url.startsWith("http")) {
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
