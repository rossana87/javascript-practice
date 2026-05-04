const people = [
    { name: "Anna", age: 15 },
    { name: "Ben", age: 22 },
    { name: "Cleo", age: 17 },
    { name: "Dan", age: 30 },
];

const filterAdults = () => {
    const adults = people
    .filter((person) => person.age >= 18)
    .map((person) => person.name) 
    
    return adults
}


//console.log(filterAdults());

