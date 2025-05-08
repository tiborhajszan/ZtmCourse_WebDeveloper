// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Document Object Model | DOM Events | Shopping List Logic
// #####################################################################################################################

// selectors ###########################################################################################################

const userInput = document.getElementById("userinput");
const enterBtn = document.getElementById("enter-btn");
const shoppingList = document.getElementById("shopping-list");

// callback functions ##################################################################################################

// adding list item ----------------------------------------------------------------------------------------------------

function createListItem() {
  const listItem = document.createElement("li");
  const innerText = document.createTextNode(userInput.value);
  listItem.appendChild(innerText);
  shoppingList.appendChild(listItem);
  userInput.value = "";
};

// onkeypress callback -------------------------------------------------------------------------------------------------

function addItemOnKeypress(event) {
  if (userInput.value.length !== 0 && event.key === "Enter") {createListItem();};
};

// onclick callback ----------------------------------------------------------------------------------------------------

function addItemOnClick() {
  if (userInput.value.length !== 0) {createListItem();};
};

// event listeners #####################################################################################################

userInput.addEventListener("keypress", addItemOnKeypress);
enterBtn.addEventListener("click", addItemOnClick);
