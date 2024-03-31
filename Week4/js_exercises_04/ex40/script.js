/*JavaScript – Font size changer
The following exercise contains the following subjects:
● DOM
Instructions
Create a webpage that has some text and two buttons with ‘+’
and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
and clicking the ‘-‘ should decrease it.
Limit the font size to be between 6px and 100px.*/

document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("text");
  const increaseButton = document.getElementById("increaseButton");
  const decreaseButton = document.getElementById("decreaseButton");

  increaseButton.addEventListener("click", function() {
    changeFontSize(2); 
  });

  decreaseButton.addEventListener("click", function() {
    changeFontSize(-2); 
  });

  function changeFontSize(amount) {
    let currentFontSize = parseInt(window.getComputedStyle(textElement).fontSize);
    let newFontSize = currentFontSize + amount;
    newFontSize = Math.min(Math.max(newFontSize, 6), 100);
    textElement.style.fontSize = newFontSize + "px";
  }
});

  