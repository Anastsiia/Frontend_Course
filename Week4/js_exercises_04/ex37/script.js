/*JavaScript – functions
The following exercise contains the following subjects:
● functions
Instructions
Please make the following changes to the HTML file while navigating the DOM.*/
document.addEventListener("DOMContentLoaded", function() {
    
    //  Create a variable that holds the <li> element with the class “start-here”. Use traverse methods to complete these tasks:
    var startHereLi = document.querySelector(".start-here");
    //1. Change the text from “title 2” to “main title”
    startHereLi.textContent = "main title";

    //2. Add another subtitle with the text “subtitle 4”
    var newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode("subtitle 4"));
    startHereLi.nextElementSibling.lastElementChild.appendChild(newLi);

    // 3. Delete the last <li> element from the list.
    startHereLi.parentElement.lastElementChild.remove();

    //4. Change the <title> element text to “Master Of The Dom”.
    document.title = "Master Of The Dom";

    //5. Change the text of the <p> element ot something else of your
    startHereLi.parentElement.nextSibling.nextSibling.textContent = "Don't stop believin'Hold on to that feelin'Streetlights, people"
});