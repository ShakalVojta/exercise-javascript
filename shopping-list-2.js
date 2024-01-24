const shoppingList = []

const addToList = (itemName) => {

    // ... add item at the end of shopping list
    shoppingList.push(itemName)
    
    //show the current strate of the list to user
    renderShoppingCart()
}

const removeFromList = (position) => {
    shoppingList.splice(position, 1);

    renderShoppingCart();
}


const renderShoppingCart = () => {
    const ul = document.querySelector('#cart') 
    ul.innerHTML = ''; //clear all elements (li) from UL

    shoppingList.forEach( (itemName, index) => {

        //Create a new LI within the UL 
        // added HTML: <li>potatoes</li>
        ul.innerHTML += '<li onclick="removeFromList(' + index + ')">' + itemName + '</li>'

    })
}