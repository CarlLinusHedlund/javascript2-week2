//OG array
const arrayValues = [5, 7, 9, 14];

//New array called "New array" that contains the
//REsult from the ´.map´ method

// const newArray = arrayValues.map()

// callback function

// 1 anonymous function (most common used)
    
    //function keyword

const values = [100, 200, 300, 400];
const newValues = values.map(function (element, index, array){
    //Modify and return elements
    return element;
});
console.log("anonymous function " + newValues);


// arrow function

const newValuesTest = values.map((element, index, array) => {
    //Modify and return elements
    return element;
});

console.log("Arrow Function  " + newValuesTest);


// 2 separate callback function

function callbackFunction(element, index, array) {
    return element;
}
const callbackArray = arrayValues.map(callbackFunction)
console.log(callbackArray);



