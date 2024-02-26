// without reduce please
const array = [1, 2, 3, 3, 3, 4, 2, 5, 5, 6, 6, 1, 1, 9, 9, 10];

/**
 const groupByRepeating = (array) => {
 return array.reduce((res, current) => {
 const key = current
 if (!res.hasOwnProperty(key)) {
 res[key] = 0
 }
 res[key] += 1

 return res
 }, {})
 }

 console.log(groupByRepeating(array));
 */

const  groupByRepeating = (array) => {
  const res = {}
  for (let i = 0; i < array.length; i++) {
    if (!res[array[i]]) {
      res[array[i]] = 0
    }
    res[array[i]] += 1
  }
  return res
}

console.log(groupByRepeating(array))
