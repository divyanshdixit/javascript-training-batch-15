// airthmatic operator: (+, -, *,/ **, %, ++i, --,)
// assignment : (=),
// string : (+) concatenation operator
// comparison: (==, ===, <=, >=, <, >, !=, !==)
// ternary operator => (? :)
// logical:( &&, ||, !) => and , or, not
// typeof , instance of: related to object
// Bitwise (&, >>, <<, ~, ^)

// airthmatic: 

var a = 2; // number global scope
var b = 3;

// a = 10; // 10 global value

// console.log(a); // 10

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(2 ** b);
console.log(a % b); // modulas
console.log(a++); // 2++ post increment 3
// console.log(a);
console.log(++a); // pre increment , 4 => 4
console.log(a--); // post decrement 4 => 3
console.log(--a); // pre decrement 2 => 2
console.log(b++); // 3 => 4
console.log(b--); // 4 => 3
console.log(++b); // 4 => 4
console.log(--b); // 3


// assignment (=)
var x = 19;

// string (+) => to concat two or more strings , or number and string, or any variabls

var fname = "Divyansh";
var lname = "Dixit";
var age = 25;

console.log("1" + 2);

// ==========>

console.log("Divyansh " + lname + " age is " + age)

console.log("601020" + 30 + 40);
"60102030" + 40
"6010203040"


// comparison: (==, ===, <=, >=, <, >, !=, !==)

var x = 20;
var z = 19;
var y = "20";

// ! not operator
// ! false => true
// ! true => false

console.log(x != y) // it compares only value, if equal return true.
console.log(x !== y) // it compares value and datatype, if(both are equal then return true else false);

console.log(x >= y )

console.log(10 <= y)
console.log(20 > y)


// logical => && (and) , || (or), ! (not)

console.log(!(x>=y) && y<=z)
console.log(!(x>=y) || y<=z)

// true && false => false
// false && true => false
// true && true => true
// false && false => false


// or(||)

// true && false => true
// false && true => true
// true && true => true
// false && false => false

// typeof => used to get the datatype of varibale:

console.log(typeof x, typeof y) // number and string

var f = {
    name:'asdasd'
}
console.log(typeof f) // object


// ternary operator: ( (cond) ? 'if true' : 'else false' )
// shorter syntax for if else
// if()else{} => statement, || ternary operator => expression
// nested condition
console.log( 
    
    (typeof x != 'string') ? "cond is true" : (x < y ? 'inner cond is true' : 'false')
    
    )
