const fruits = [
    {
        name: 'apple',
        count:  4
    },
    {
        name: 'pear',
        count:  2
    },
    {
        name: 'banana',
        count:  3
    },
    {
        name: 'orange',
        count: 2
    },
    {
        name: 'mango',
        count: 1
    }
];

// console.log(fruits);

// for (let i in fruits) {
//     if (fruits[i].name === 'banana') {
//         continue
//     }
//     console.log(fruits[i]);
//     if (i === 2) {
//         break;
//     }  
// }

// for each is method for array
// first parametr is for value, second is for index!
fruits.forEach( (element, index) => {
    console.log(element);
    console.log(index);
})

const myFunction = (something) => {
    console.log(something);
}

fruits.forEach(myFunction )


fruits.every((fruit, index) => {
    if (index === 2) {
        return false; // works like a break;
    }
 
    return true;
});

fruits.some((fruit, index) => {
    // ...
    if (index === 2) {
        return true; // works like a break;
    }
});

// const array_of_lis = fruits.map((fruit, index) => {
//     return '<li>' + fruit.name + '</li>';
// });

const names = fruits.map((element, index) => {
    return element.name
}) 
console.log(names);

const toStringFruits = fruits.map ((element) => {
    return element.name
}).filter((fruitName) => {
    if (fruitName !== 'pear') {
        return true;
    } else {
        return false;
    }
}).join('-')

console.log(toStringFruits);