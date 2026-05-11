const people = [
    { name: "Anna", age: 15 },
    { name: "Ben", age: 22 },
    { name: "Cleo", age: 17 },
    { name: "Dan", age: 30 },
  ];

  function sortByAge(){
    return people.slice().sort((a, b) => a.age - b.age)
  }

  //console.log(sortByAge())