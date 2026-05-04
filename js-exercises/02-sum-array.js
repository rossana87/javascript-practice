function sum(numbers){
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
       sum = sum + numbers[i]
    }
    return sum
}

const sumOne = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum([1, 2, 3, 4]))
// console.log(sumOne([1, 2, 3, 4]))