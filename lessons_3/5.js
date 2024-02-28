const array = [2, 4, 1, 5, 7, 8,10,12,9, 55, 89, 22]

function rotate(array) {
  let newArray = [...array]
  const sortArray = []
  for (let i = 0; i < array.length; i++) {
    newArray = newArray.filter(item => !sortArray.includes(item))
    if(newArray.length){
      sortArray.push(Math.max(...newArray))
      sortArray.push(Math.min(...newArray))
    }
  }
  return sortArray
}

// [2, 4, 1, 5, 7, 9] -> [9, 1, 7, 2, 5, 4]

console.log(rotate(array))
