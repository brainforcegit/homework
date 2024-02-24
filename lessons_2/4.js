/** map, every, some, filter, find, findIndex, reduce */

const array = [1, 2, 3, 3, 3, 4, 2, 5, 5, 6, 6, 1, 1, 9, 9, 10];

/** **************************************** MAP ****************************************

 const newArray = array.map((i) => {
 return (i / 2) % i
 })
 console.log(newArray)

 *///

/** **************************************** CUSTOM_MAP ****************************************

 Array.prototype.customMap = function (fn) {
 let newArr = []
 for (let i = 0; i < this.length; i++) {
 newArr.push(fn(this[i]))
 }
 return newArr
 }
 const newArray2 = array.customMap((i) => (i / 2) % i)
 console.log(newArray2)

 **************************************** CUSTOM_MAP ****************************************///

/** **************************************** EVERY ****************************************

 console.log(array.every((i) => i<0))

 **************************************** EVERY *****************************************///

/** **************************************** CUSTOM_EVERY ****************************************

 Array.prototype.customEvery = function (fn) {
 for (let i = 0; i < this.length; i++) {
 if (!fn(this[i])) {
 return false
 }
 }
 return true
 }
 console.log(array.customEvery((i) => i > 0))

 **************************************** CUSTOM_EVERY **************************************** *///

/** **************************************** SOME ****************************************

 console.log(array.some((i) => i<0))


 **************************************** SOME **************************************** *///

/** **************************************** CUSTOM_SOME ****************************************

 Array.prototype.customSome = function (fn) {
 for (let i = 0; i < this.length; i++) {
 if (fn(this[i])) {
 return true
 }
 }
 return false
 }
 console.log(array.customSome((i) => i < 0))

 **************************************** CUSTOM_SOME **************************************** *///

/** **************************************** FILTER ****************************************

 console.log(array.filter(i => i > 4))

 **************************************** FILTER **************************************** *///

/** **************************************** CUSTOM_FILTER ****************************************

 Array.prototype.customFilter = function (fn) {
 const filterArray = []
 for (let i = 0; i < this.length; i++) {
 if (fn(this[i])) {
 filterArray.push(this[i])
 }
 }
 return filterArray
 }
 console.log(array.customFilter((i) => i < 4))

 **************************************** CUSTOM_FILTER **************************************** *///

/** **************************************** FIND ****************************************

 console.log(array.find(i => i === 4))

 **************************************** FIND **************************************** *///

/** **************************************** CUSTOM_FIND ****************************************

// return this[i] not i
 Array.prototype.customFind = function (fn) {
 for (let i = 0; i < this.length; i++) {
 if (fn(this[i])) {
 return this[i]
 }
 }
 return -1
 }
 console.log(array.customFind((i) => i === 11))

 **************************************** CUSTOM_FIND **************************************** *///

/** **************************************** findIndex ****************************************

 console.log(array.findIndex((i) => i === 10))


 **************************************** findIndex **************************************** *///


/** **************************************** CUSTOM_findIndex ****************************************

 Array.prototype.customFind = function (fn) {
 for (let i = 0; i < this.length; i++) {
 if (fn(this[i])) {
 return i
 }
 }
 return -1
 }
 console.log(array.customFind((i) => i === 10))

 **************************************** CUSTOM_findIndex ****************************************///

/** **************************************** REDUCE ****************************************

 const groupBy = (res, current) => {
 const key = current

 if (!res[key]) {
 res[key] = 0
 }
 res[key] += 1

 return res
 }
 const groupByRepeating = (array) => {
 return array.reduce(groupBy, {})
 }

 console.log(groupByRepeating(array));

 **************************************** REDUCE ****************************************///

/** **************************************** CUSTOM_REDUCE ****************************************

 const groupBy = (res, current) => {
 const key = current

 if (!res[key]) {
 res[key] = 0
 }
 res[key] += 1

 return res
 }

 const sum = (a, b) => a + b;

 Array.prototype.customReduce = function (fn, start) {
 let accumulator = start !== undefined ? start : this[0];
 console.log(this)
 for (let i = 0; i < this.length; i++) {
 accumulator = fn(accumulator, this[i]);
 }
 return accumulator;
 };

 console.log(array.customReduce(groupBy, {}));
 console.log(array.customReduce(sum, 0));

 **************************************** CUSTOM_REDUCE ****************************************///
