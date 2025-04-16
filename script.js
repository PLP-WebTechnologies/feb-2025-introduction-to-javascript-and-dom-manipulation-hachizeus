// Change text content dynamically when button is clicked
document.getElementById("change-text-btn").addEventListener("click", function() {
    const homeText = document.getElementById("home-text");
    homeText.textContent = "The text has been changed dynamically via JavaScript!";
    homeText.style.color = "blue"; // Modify CSS styles via JavaScript
});

// Add a new element when the button is clicked
document.getElementById("add-element-btn").addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new dynamically added paragraph!";
    newElement.style.fontSize = "18px";
    newElement.style.color = "green";

    // Append the new element to the about section
    document.getElementById("about").appendChild(newElement);
});
