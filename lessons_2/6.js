// it is wrong please fix this function

const array = [1, 2, 3, 3, 3, 4, 2, 5, 5, 6, 6, 1, 1, 9, 9, 10, 10, 10, 10];

const groupByRepeating = (array) => {
  return array.reduce((res, current) => {
    if (!res.hasOwnProperty(current)) {
      res[current] = 0
    }
    res[current] += 1

    return res
  }, {})
}

const findBigRepeatingNumber = (array) => {
  let maxNum = 0;
  let objRepeating = groupByRepeating(array)
  let maxRepeatingNumber = Math.max(...Object.values(objRepeating));
  let objKeys = Object.keys(objRepeating)
  for (let i = 0; i < objKeys.length; i++) {
    maxNum = (objRepeating[objKeys[i]] === maxRepeatingNumber && objKeys[i] > maxNum) ? objKeys[i] : maxNum

  }

  return maxNum
}

console.log(findBigRepeatingNumber(array));
