const array = [1, 2, 3, 3, 3, 4, 2, 5, 5, 6, 6, 1, 1, 9, 9, 10];

const groupByRepeating = (array) => {
  return array.reduce((res, current) => {
    const key = current

    if (!res[key]) {
      res[key] = 0
    }
    res[key] += 1

    return res
  }, {})
}

groupByRepeating(array);
