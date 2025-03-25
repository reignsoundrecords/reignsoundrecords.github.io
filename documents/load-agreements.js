document.addEventListener("DOMContentLoaded", function () {
    // Correct path to agreements.html from index.html
    fetch("../../../agreements.html")  
        .then(response => response.text())
        .then(data => {
            document.getElementById("agreements-section").innerHTML = data;
        })
        .catch(error => console.error("Error loading agreements:", error));
});