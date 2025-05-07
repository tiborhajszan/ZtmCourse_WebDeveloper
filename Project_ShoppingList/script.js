// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Document Object Model | DOM Events | Shopping List Logic
// #####################################################################################################################

// caching selectors ###################################################################################################

const userInput = document.getElementById("userinput");
const enterBtn = document.getElementById("enter-btn");
const shoppingList = document.getElementById("shopping-list");

// callback functions ##################################################################################################

function inputLength() {
  return input.value.length;
}

// adding list item ----------------------------------------------------------------------------------------------------

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);