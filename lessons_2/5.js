const object = {aa: 8, a: {b: {c: {d: {e: {k: 7333}}}}}};
// use destructuring not function
/**
 function getValueByKey(obj, key) {
 let objects = [];
 for (let i in obj) {
 if (!obj.hasOwnProperty(i)) continue;
 if (typeof obj[i] == 'object') {
 objects = objects.concat(getValueByKey(obj[i], key));
 } else if (i === key) {
 objects.push(obj[i]);
 }
 }
 return objects;
 }

 console.log(getValueByKey(object, "k"))
 */
const {a: {b: {c: {d: {e: {k:value}}}}}} = object;
console.log(value)
