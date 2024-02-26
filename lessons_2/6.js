const array = [1, 2, 5, 5, 6, 7, 6, 8, 5, 6, 10, 10, 11, 12, 11, 13, 13, 13];

const groupByRepeating = (array) => {
  return array.reduce((res, current) => {
    if (!res.hasOwnProperty(current)) {
      res[current] = 0
    }
    res[current] += 1

    return res
  }, {})
}

const findBigRepeatingNumber = (objRepeating) => {
  let repeatingMaxArrayKeys = [];
  let maxRepeatingNumber = Math.max(...Object.values(objRepeating));
  let objKeys = Object.keys(objRepeating)
  for (let i = 0; i < objKeys.length; i++) {
    if (objRepeating[objKeys[i]] === maxRepeatingNumber) {
      repeatingMaxArrayKeys.push(objKeys[i])
    }
  }
  return Math.max(...repeatingMaxArrayKeys)
}

console.log(findBigRepeatingNumber(groupByRepeating(array)));
