//find ()

// const newArray = values.find((element, index, array) => {
    // Return true if you find the element you want
    // Return false if you haven't found the element you want
//   });


//Example 1
const values = [2, 3, 6, 5, 4, 10, 11];

//find the element with value of 5
const foundValue = values.find((currentValue)=>{
    if(currentValue === 5){
        return true;
    };
});
console.log("found value:", foundValue);

//Example 2
//Given an array of temperatures. Find the first temperature above 120 fahrenheit

const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const findTemperature = temperatures.find((temperature)=>{
    if(temperature >= 120){
        return true;
    }
})
console.log("Found Temperature", findTemperature);

//refactored

// const findTemperature = temperatures.find((temperature) => temperature >= 120,
// );
// console.log(findTemperature);





//New example
const profiles = [
    {
        name: "Uzo",
        id: 23456
    },
    {
        name: "Emil",
        id: 24456
    },
    {
        name: "Mats",
        id: 25456
    },
    {
        name: "Fariad",
        id: 26456
    },
    {
        name: "Snorre",
        id: 27456
    }
];

//in the given array of profiles. Find the first name starts with letter 'h'
const findProfile = profiles.find((profile)=>{
    if(profile.name[0].toLowerCase() === 'e'){
        return true;
    }
});

//Refractured 
// const findProfile = profiles.find(({name}) => name[0].toLowerCase() === 'e');
console.log(findProfile);


//Example 3

const books = [
    { title: 'Building a Spaceship', inStock: false },
    { title: 'Growing Orchids', inStock: false },
    { title: 'River Fisher', inStock: false },
    { title: 'Hello Hello', inStock: true}
  ];

const foundBook = books.find((book)=>{
    if (book.inStock === true){
        return true;
    } 
})

if (foundBook === undefined){
    console.log("No books in stock!");
} else {
    console.log("Book in stock: ", foundBook.title);
}