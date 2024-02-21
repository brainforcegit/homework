function add(a, b) {
  const sum = (d, f) => (d * 10 + f * 10) / 10;
  if (!a) {
    return add
  }
  if (!b) {
    return function calc(c) {
      if (!c) return calc

      return sum(a,c)
    }
  }
  return sum(a,b)
}

console.log(add(0.1)(0.2));
console.log(add(4.7)(0.9));
console.log(add(6.2)(0.9));
console.log(add(7.6)(0.7));
