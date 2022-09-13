//map()


//example 1
const names = [
    { firstName: 'Ola', lastName: 'Nordmann' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Jan', lastName: 'Jansen' },
  ];
  console.log("Before map ", names);

//

const newCombinedNames = names.map(({firstName, lastName}) => {
    //Modify and return elements
    return `${firstName} ${lastName}`;
});
console.log("After Map ", newCombinedNames);


//Example 2

const rectangle = [
    {base: 100, width: 200},
    {base: 150, width: 250},
    {base: 180, width: 300}
]

const area = rectangle.map(({base, width})=> {
    return 0,5 * base * width;
})
console.log(area);