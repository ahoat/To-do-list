test("Test to add item", () => {

const testAddBtn = document.querySelector(".add-btn");
const testUserInput = document.querySelector(".userInput");

testUserInput.value = "Test Item 1";
testAddBtn.click();

const testListItem = document.querySelector("li");
const actual = testListItem.textContent;
const expected = "Test Item 1";

equal(actual,expected);

testUserInput.textContent = "";

})


