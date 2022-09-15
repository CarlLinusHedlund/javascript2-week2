// object
const person = {
    name: "Hesham",
    lastName: "El Masry",
    age: 30
};
//1. dot notation
console.log("dot notation: ", person.name);
console.log("dot notation: ", person.lastName);
//bracket notation
console.log("BracketNotation: ", person["name"]);
console.log("BracketNotation: ", person["lastName"]);


const recipe = {
    "ingredient_0": 'Egg', "ingredient_1": 'Milk', "ingredient_2": 'Flour',
};
const ingredient0 = recipe["ingredient_0"]
// console.log(ingredient0);

for (let i = 0; i <= 2; i++){
    console.log(recipe["ingredient_" + i]);
}


//For in loop on object
// for (const myKey in myObject) {
    // We are looping through the keys of the object. To get the value you
    //    need to use the key (myKey) as a way to reference the key/value pair.
//     console.log(myObject[myKey]);
//   }

const user = {
    //Key: Name // Value: "Carl"
    name: "Carl",
    lastName: "Hedlund",
    age: 26
};

for (const theKey in user){
    console.log(user[theKey]);
}

const carProfile = {
    make: "BMW",
    year: 2015,
    vinNumber: 343434
}

for (const carKey in carProfile){
    console.log("Key:", carKey, "Value:", carProfile[carKey]);
};

//Object Keys

// The object Object.keys() method returns an array containing all of the 
// keys that are in that object.

// The syntax is fairly basic. Object is an actual keyword you need to 
// use, giving us access to the .keys method. You then pass in the object as the parameter.
//  In the example below, we are passing in the myObject object.


//syntax down below

// const myObject = {
//     // Key/value pairs here
//   };
//   Object.keys(myObject);


const onePerson = {
    firstName: "ola",
    lastName: "Nordmann",
    module: "JavaScript",
}

const keysArray = Object.keys(onePerson)
console.log(keysArray);

//Object.values
console.log(Object.values(onePerson));

//Object.entries
//["name:" "Mats",]
const userProfileEntriesArr = Object.entries(onePerson);
console.log(userProfileEntriesArr);
