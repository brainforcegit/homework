function deepComparisonOfValue(object1, object2) {
  const objectKeys1 = Object.keys(object1);
  const objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }

  for (let key of objectKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !deepComparisonOfValue(value1, value2)) || (!isObjects && value1 !== value2)) {
      return false;
    }
  }

  return true;
}

const isObject = (object) => {
  return object != null && typeof object === "object";
};

console.log(deepComparisonOfValue({a: 1, b: 2, c: {d: {}}}, {a: 1, b: 2, c: {d: {}}}));
console.log(deepComparisonOfValue({a: 1, b: 6, c: {d: {}}}, {a: 1, b: 2, c: {d: {}}}));
console.log(deepComparisonOfValue([1,2,{a: 'b', c: { s: { t: { name: 'Smith' } } }}], [1,2,{a: 'b', c: { s: { t: { name: 'Smith' } } }}]));

