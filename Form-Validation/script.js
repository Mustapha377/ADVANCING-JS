// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector("#form");
const error = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirmation");
const termsInput = document.querySelector("#terms");

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages
form.addEventListener("submit", (e) => {
  // const ErrorMessages = {
  //   userName: {
  //     empty: "username most be provided",
  //     charLength: "username most be 6 char",
  //   },
  //   password: {
  //     empty: "password most be provided",
  //     charLength: "paasword most be 10 char long",
  //     confirm: "you need to confirm your password first",
  //     matches: "your password most match",
  //   },
  //   terms: "you have to agree with the terms and condition first",
  // };

  const ErrorMessages = [];
  clearErrors();

  // Object.values(ErrorMessages).forEach((value) => {
  //   console.log(value);
  // });
  const validUsername = userNameInput.value.length === 6;
  const validPassword = passwordInput.value.length === 10;
  const isPasswordMatch = passwordInput.value === confirmPassword.value;
  const isTerm = termsInput.checked;

  if (userNameInput.value === "" && passwordInput.value === "") {
    ErrorMessages.push("password and username most be filled up");
    // } else if (userNameInput.value === "") {
    //   const list2 = document.createElement("li");
    //   console.log(ErrorMessages.userName.empty);
    // } else if (passwordInput.value === "") {
    //   console.log(ErrorMessages.password.empty);
  }
  if (confirmPassword.value === "") {
    ErrorMessages.push("you need to confirm the password first");
  }
  if (userNameInput.value.length < 6) {
    ErrorMessages.push("your username most be 6 char");
  }
  if (passwordInput.value.length < 10) {
    ErrorMessages.push("your password most be 10 char long");
  }
  if (!isPasswordMatch) {
    ErrorMessages.push("password most matches");
  }
  if (!isTerm) {
    ErrorMessages.push("ypur most checked agree the term and conditions");
  }
  if (ErrorMessages.length > 0) {
    e.preventDefault();
    showErrors(ErrorMessages);
  }
  console.log(ErrorMessages);
});

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0]);
  }
  error.classList.remove("show");
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
  errorMessages.forEach((message) => {
    const li = document.createElement("li");
    li.textContent = message;
    errorsList.appendChild(li);
  });
  error.classList.add("show");
}
