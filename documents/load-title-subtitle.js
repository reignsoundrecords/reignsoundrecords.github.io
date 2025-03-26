document.addEventListener("DOMContentLoaded", function () {
    // Load the universal title
    fetch("/documents/title.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("title-section").innerHTML = data;
        })
        .catch(error => console.error("Error loading title:", error));

    // Detect folder name (BPfCL or ORS)
    let pathSegments = window.location.pathname.split("/");
    let subtitlePath = "";

    if (pathSegments.includes("BPfCL")) {
        subtitlePath = "/documents/proposals/BPfCL/subtitle.html";
    } else if (pathSegments.includes("ORS")) {
        subtitlePath = "/documents/ORS/subtitle.html";
    }

    if (subtitlePath) {
        fetch(subtitlePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById("subtitle-section").innerHTML = data;
            })
            .catch(error => console.error("Error loading subtitle:", error));
    } else {
        console.error("Subtitle file not found: Could not determine BPfCL or ORS.");
    }
});