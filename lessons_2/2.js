let c = {};
let k = {_: 7};
let a = [];

console.log(0 == 0); //true
console.log(1 == []); //false Number([]) => 0
console.log(c == 0); // false Number({}) => NAN
console.log(k == [7]); // false {_:7} !== 7
console.log(0 == a); // true Number([]) => 0

