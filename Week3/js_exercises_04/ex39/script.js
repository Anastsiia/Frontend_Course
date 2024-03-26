/*JavaScript – Multiple inputs copy
The following exercise contains the following subjects:
● events
Instructions
Many times an application needs to verify the account by
sending a verification code by text message.
Let's create functionality that enables the user to paste the
verification code to the input fields.
Features:
1. The user is allowed to type the values manually. After
each value is inserted, the next input will be focused.
2. The user is allowed to paste the verification code.
3. An extra challenge will be to auto submit the form once all
inputs all populated.
Things to think about:
What happens if the user pastes only 3 digits and there are
6 inputs to fill out.
Here is an example.
Things to help you:
Google “paste event” to understand how to listen to a
paste event.
Google “clipboardData” to find out how to get the value of
a paste event.*/

document.addEventListener("DOMContentLoaded", function() {

    function focusNextInput(currentInput) {
      const index = Array.from(inputs).indexOf(currentInput);
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
    
    const inputs = document.querySelectorAll('input[type="text"]');
    const form = document.getElementById('verificationForm');
  
    inputs.forEach(input => {
      input.addEventListener('input', function(event) {
        const value = event.target.value;
        if (value.length === 6) {
          focusNextInput(input);
        }
      });
    });
  
    inputs.forEach(input => {
      input.addEventListener('paste', function(event) {
        event.preventDefault();
        const pasteData = (event.clipboardData || window.clipboardData).getData('text');
        const pasteValues = pasteData.match(/\d/g);
        if (pasteValues) {
          for (let i = 0; i < Math.min(pasteValues.length, inputs.length); i++) {
            inputs[i].value = pasteValues[i];
            if (i < inputs.length - 1) {
              focusNextInput(inputs[i]);
            }
          }
        }
      });
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let filledInputs = 0;
      inputs.forEach(input => {
        if (input.value.length === 6) {
          filledInputs++;
        }
      });
      if (filledInputs === inputs.length) {
        console.log('submitted');
        document.body.style.backgroundColor = "green";
      }
    });
  });
  