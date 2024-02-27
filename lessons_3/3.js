// var a = 10;
//
// function foo() {
//   console.log(this.a)
// }
// foo()
//
//
// "use strict"
// var a = 10;
//
//
// function foo() {
//   console.log(this.a)
// }
// foo()
//

// function foo() {
//   console.log(this)
// }
// foo()

// "use strict"
//
function foo(a) {
    console.log(this.a);
}


// [1,2,3].forEach()
// foo()

const obj4 = {a: 'poxos'};
obj4.foo = foo;

obj4.foo(function() {
    console.log(this, '-------')
})

