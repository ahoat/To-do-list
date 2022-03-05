const input = document.querySelector(".userInput");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector(".list");

//function to create list element
function createListItem() {
  let li = document.createElement("li");
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  li.appendChild(check);
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

// add list item when button is clicked
addBtn.addEventListener("click", function () {
  if (input.value.length > 0) {
    createListItem();
  }
});

//add list item when enter is pressed in input box
input.addEventListener("keypress", function (event) {
  if (input.value.length > 0 && event.which === 13) {
    createListItem();
  }
});

// save user's to do list in local storage

// get items from local storage
// make array of user input
// add value in array in localstorage
// show items on to do list when it is refreshed
