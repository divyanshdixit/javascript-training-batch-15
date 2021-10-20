// regular function , nrml function
// arrow function
// anonymous function
// closure function
// callback function
// self invoking function


// hoisting works in function same as in var.
// function will return only single value.

// console.log('function');
// console.log('function2');
// console.log('function3');
// console.log('function4');
// console.log('function5');


function functionName() // function declaration

function functionName(){
    // function definition
    // code
    return ;
}

// if nothing is returned then undefiend is return
var res = functionName(); // undefined, 


// call/invoke the function:
functionName()

function name(){
    // validation
    console.log('object')
}

name()
name()
name()
name()

var x = 10;
console.log(x);

// provoke or call
name();

// function is an object in js. function , no such data type in js 

// all function in js has props of an object
// prototype

console.log(typeof name);


function add(x,y,z=0){ // define parameters
    // z= undefined, null + 5
    let res = x + y + z;
    return `the sum of ${x} and ${y} is ${res}`;
}

// add(3,2);
console.log(add(3,2)) // call arguments

// var res = add(3,2); // function result can be saved in varaible
// console.log(res);


// console.log(`the sum of x and y is ${res}`)
// console.log(`the sum of x and y is ${add(3,2)}`)
// 'Divyansh' + 'Dixit' + res

// 'my name is ' + name + ' , my age is ' + age + ' , i live in ' + city
 
// // es6 template literals

// ` my name is ${name} , my age is ${age}, i live in ${city} `

// `masdsadasdasdas sadasdsad asdasds das`
// // teranary opertor ? :

// // true ? 'true' : 'false'
// ` ${name ? `${name}` : `No name`} `

var city = 'kanpur';
console.log(`${ (city=='kanpur') ? `i live in ${city}` : 'No name of city'}   `)

// functional scope(local scope):


// scope:
// let, var, const => local scope rules are same.
// if varaibale declared without using var, let , const it'll become global

// var n1 = 10; // global
function sub(){
    // local scope
    var n1 = 100; 
    console.log(n1); 
}
sub();

console.log(n1); 

// to make local vara of function to global var :

function sub(){
   
    n1 = 100; // global scope
    console.log(n1); 
}
sub();

console.log(n1); 



