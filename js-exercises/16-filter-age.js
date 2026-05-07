const people = [
    { name: "Anna", age: 15 },
    { name: "Ben", age: 22 },
    { name: "Cleo", age: 17 },
    { name: "Dan", age: 30 },
  ];
  
  function filterByAge(){
    return people
    .filter((person) => person.age >= 18 && person.age <= 25)
    .map((person) => person.name)
  }

//console.log(filterByAge())