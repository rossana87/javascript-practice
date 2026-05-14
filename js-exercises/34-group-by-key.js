function groupBy(arr, key){
  let result = {}

  for (const item of arr){
    const currentItem = item[key]

    if(!result[currentItem]){
      result[currentItem] = []
    }
    result[currentItem].push(item)
    
  }
  return result
}

console.log(groupBy(
  [{ type: "absence" }, { type: "tonic" }, { type: "absence" }],
  "type"
))

// output { absence: [{type:"absence"}, {type:"absence"}], tonic: [{type:"tonic"}] }
