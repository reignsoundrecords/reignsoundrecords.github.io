// List all script files you want to load
const scriptFiles = [
    "load-agreements.js",
    "load-partners.js",
    "load-title-subtitle.js"
    // Add more scripts as needed in the future
];

// Loop through each script and dynamically add it to the page
scriptFiles.forEach(file => {
    let script = document.createElement("script");
    script.src = `../../../${file}`;  // Navigate 3 levels up to access the 'documents' folder
    script.async = true;  // Optional: makes the scripts load asynchronously
    script.onload = () => console.log(`${file} loaded successfully`);
    script.onerror = () => console.error(`Error loading ${file}`);
    
    // Add the script tag to the <head> of the document
    document.head.appendChild(script);
});