document.addEventListener("DOMContentLoaded", function () {
    // Correct path to partners.html from index.html
    fetch("../../../partners.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("partners-section").innerHTML = data;
        })
        .catch(error => console.error("Error loading partners:", error));
});