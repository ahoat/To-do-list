const input = document.querySelector(".userInput");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector(".list");

//function to create list element
function createListItem() {
  let li = document.createElement("li");
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  let deleteItem = document.createElement("button");
  deleteItem.classList.add("delete");
  deleteItem.innerText = "Delete";

  li.appendChild(check);
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteItem);
  ul.appendChild(li);
  input.value = "";
};

function removeItem (deleteElement) {
    deleteElement.parentElement.remove()
}

//add event listener for clicking list items

ul.addEventListener("click", function (e) {
  switch(e.target.className) {
    case "li":
      showEditInput();
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
