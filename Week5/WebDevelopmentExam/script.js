function isValidHexColor(color) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    return regex.test(color);
}

const btn = document.getElementById("changeColorButton")

btn.addEventListener("click", function() {
    var userInput = document.getElementById("hexInput").value;
    if (isValidHexColor(userInput)) {
        document.body.style.backgroundColor = userInput;
    } else {
        alert("Invalid hex color code. Please enter a valid hex color (e.g., #FFFFFF).");
    }
});