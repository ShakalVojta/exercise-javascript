console.log("Hello world");
const shoppingList = ["bread", "oranges", "apples", "cheese", "corn"];
console.log(shoppingList);

console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);

shoppingList[5] = "grep"; // add element
console.log(shoppingList);

// shoppingList[10] = 'something' // adds undefined elements in array
// console.log(shoppingList);

shoppingList.push("something"); // adds element at the end
console.log(shoppingList);

shoppingList.unshift("something"); // adds element at the beginning
console.log(shoppingList);

shoppingList.splice(2, 0, "juice"); // 1. argument = position where we want to add element 2. how many elements we want to remove and starts after 1. ARGUMENT!!! 3. argument - the element string, variable atd
console.log(shoppingList);

shoppingList.pop() // remove last element in the array, we can see what we remove when we add to a variable and console
console.log(shoppingList);

const shifted = shoppingList.shift() // remove first element in the array, we can see what we remove when we add to a variable and console
console.log(shoppingList);
