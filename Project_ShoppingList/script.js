// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Document Object Model | DOM Events | Shopping List Logic
// #####################################################################################################################

// selectors ###########################################################################################################

const userInput = document.getElementById("user-input");
const enterBtn = document.getElementById("enter-btn");
const shoppingList = document.getElementById("shopping-list");
const listItems = Array.from(document.getElementsByTagName("li"));

// callback functions ##################################################################################################

// adding list item ----------------------------------------------------------------------------------------------------

function createListItem() {
  const listItem = document.createElement("li");
  const innerText = document.createTextNode(userInput.value);
  listItem.appendChild(innerText);
  shoppingList.appendChild(listItem);
  listItem.addEventListener("click", toggleLineThrough);
  userInput.value = "";
};

// onkeypress callback -------------------------------------------------------------------------------------------------

function addItemOnKeypress(event) {
  if (userInput.value.length !== 0 && event.key === "Enter") {createListItem();};
};

// onclick callbacks ---------------------------------------------------------------------------------------------------

function addItemOnClick() {
  if (userInput.value.length !== 0) {createListItem();};
};

function toggleLineThrough(event) {
  event.target.classList.toggle("done");
};

// event listeners #####################################################################################################

userInput.addEventListener("keypress", addItemOnKeypress);
enterBtn.addEventListener("click", addItemOnClick);
listItems.forEach(item => item.addEventListener("click", toggleLineThrough));
