const input = document.querySelector('.userInput');
const addBtn = document.querySelector('.add-btn');
const ul = document.querySelector('.list');

//function to create list element
function createListItem () {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
};

// add list item when button is clicked
addBtn.addEventListener('click', function () {
    if (input.value.length > 0) {
        createListItem();
    }
});

//add list item when enter is pressed in input box
input.addEventListener('keypress', function (event) {
    if (input.value.length > 0 && event.which === 13) {
        createListItem();
    }
});