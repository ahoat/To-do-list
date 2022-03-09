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
testListItem.remove();
localStorage.clear();
})

test("Test to add 2 items", () => {

    const testAddBtn = document.querySelector(".add-btn");
    const testUserInput = document.querySelector(".userInput");
    
    testUserInput.value = "Test Item A";
    testAddBtn.click();
    testUserInput.value = "Test Item B";
    testAddBtn.click();

    const testListItem = document.querySelector("li");
    const actual = testListItem.textContent;
    const expected = "Test Item B";
    
    equal(actual,expected);
    
    testUserInput.textContent = "";
    testListItem.remove();
    
    })
    
