function clamp(n, min, max){
    if(n < min){
        return min
    } else if(n > max){
        return max
    } else {
        return n
    }
}

console.log(clamp(5, 0, 10))