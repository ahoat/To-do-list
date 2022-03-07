const input = document.querySelector(".userInput");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector(".list");

let listArr = [];

//function to save to do list in local storage
function saveToDo() {
  localStorage.setItem("to-do-list", JSON.stringify(listArr));
}

//function to create list element
function createListItem() {
  let li = document.createElement("li");
  li.classList.add(listItem);

  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");

  let deleteItem = document.createElement("button");
  deleteItem.classList.add("delete");
  deleteItem.innerText = "Delete";

  li.appendChild(check);
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteItem);
  ul.appendChild(li);
  listArr.push(input.value);
  saveToDo();
  console.log(li);
  input.value = "";
};

//function to remove items
function removeItem (deleteElement) {
    deleteElement.parentElement.remove()
}

//add event listener for clicking list items

ul.addEventListener("click", function (e) {
  switch(e.target.className) {
    case "listItem":
      lineThrough(e.target);  //need to create function for line through
      break;
    case "delete":
      removeItem(e.target);
      break;
  }
});

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

let savedToDo = localStorage.getItem("to-do-list");
// get items from local storage
if (savedToDo !== null) {
  let parsedToDo = JSON.parse(savedToDo);
  listArr = parsedToDo;
  for (let toDo of parsedToDo) {
    console.log(toDo);
  }
}

// show items on to do list when it is refreshed
