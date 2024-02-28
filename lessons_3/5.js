const array = [2, 4, 1, 5, 7, 8,10,12,9, 55, 89, 22]

function rotate(array) {
  let newArray = [...array]
  const sortArray = []
  for (let i = 0; i < newArray.length; i++) {
    newArray = newArray.filter(item => !sortArray.includes(item))
    sortArray.push(Math.max(...newArray))
    sortArray.push(Math.min(...newArray))
  }
  return sortArray
}

// [2, 4, 1, 5, 7, 9] -> [9, 1, 7, 2, 5, 4]
// TODO check this function logic, I give array with 12 length but i get array with 10 length
console.log(rotate(array), rotate(array).length,array.length)
