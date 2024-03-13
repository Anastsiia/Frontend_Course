/*The following exercise contains the following subjects:
● Ternaries
● Logical operators
Instructions
Create a simple password validation function that takes a
password string as an argument.
If the length of the password is more than 7 characters return
“Strong”. If it is less than 7 characters long return “Weak.
1. Create a function that uses an if/else conditional
expression.
2. Create a function that uses a ternary conditional
expression.
3. Create a function that uses a && logical operator.
4. Create an “advanced” password validation function that
takes a password string as an argument.
If the password length is more than 7 characters long and
has at least one capital letter return “Very Strong”. If the
password length is only 7 characters long returns “Strong”.
If the password length is less than 7 characters long return
“Weak”
Use only a ternary conditional expression.*/

function isUpperCase (str) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
          return true;
        }
      }
      return false;
    };

function passwordValidation1(password) {
      if (typeof password != 'string') {
            return "Invalid type"
      }
      if (password.length >= 7) {
            return "Strong"
      } else {
            return "Weak"
      }
}

function passwordValidation2(password) {
      return typeof password != 'string' ? "Invalid type" : (password.length >= 7 ? "Strong" : "Weak");
}

function passwordValidation3(password) {
      if (password.length >= 7 && typeof password == 'string') {
            return "Strong"
      } else if (password.length < 7 && typeof password == 'string'){
            return "Weak"
      } else {
            return "Invalid type"
      }
}

function advancedPasswordValidation(password) {
      return typeof password != 'string' ? "Invalid type" : (password.length >= 7 ? (isUpperCase(password) ? "Super strong" : "Strong") : "Weak");
}

console.log(passwordValidation1("Mandarin"));
console.log(passwordValidation2("Mandarin"));
console.log(passwordValidation3("Mandarin"));
console.log(advancedPasswordValidation("Mandarin"));

