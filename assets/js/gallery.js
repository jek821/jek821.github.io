(function () {
    const figures = document.querySelectorAll(".gallery-figure--zoomable");

    if (!figures.length) {
        return;
    }

    const lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Enlarged screenshot");
    lightbox.innerHTML =
        '<button type="button" class="gallery-lightbox-close" aria-label="Close">&times;</button>' +
        '<div class="gallery-lightbox-backdrop"></div>' +
        '<figure class="gallery-lightbox-panel">' +
        '<img class="gallery-lightbox-img" src="" alt="">' +
        '<figcaption class="gallery-lightbox-caption"></figcaption>' +
        "</figure>";

    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector(".gallery-lightbox-close");
    const backdrop = lightbox.querySelector(".gallery-lightbox-backdrop");
    const lightboxImg = lightbox.querySelector(".gallery-lightbox-img");
    const lightboxCaption = lightbox.querySelector(".gallery-lightbox-caption");
    let lastFocused = null;

    function openLightbox(img, captionText) {
        lastFocused = document.activeElement;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = captionText || img.alt;
        lightbox.hidden = false;
        document.body.classList.add("gallery-lightbox-open");
        closeBtn.focus();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.removeAttribute("src");
        document.body.classList.remove("gallery-lightbox-open");
        if (lastFocused && typeof lastFocused.focus === "function") {
            lastFocused.focus();
        }
    }

    figures.forEach((figure) => {
        const img = figure.querySelector("img");
        if (!img) {
            return;
        }

        figure.addEventListener("click", () => {
            const section = figure.closest(".gallery-item");
            const heading = section ? section.querySelector(".gallery-caption h2") : null;
            openLightbox(img, heading ? heading.textContent : "");
        });

        figure.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                figure.click();
            }
        });
    });

    closeBtn.addEventListener("click", closeLightbox);
    backdrop.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (event) => {
        if (!lightbox.hidden && event.key === "Escape") {
            closeLightbox();
        }
    });
})();
