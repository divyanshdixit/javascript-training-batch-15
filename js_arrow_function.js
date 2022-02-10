abc();
function abc(){
    console.log('first')
}

function lname(){
    var fname = "Dixit";
    return fname;
}

// arrow function 
var def = () => {
    console.log('second');
}
def();
// always define function first then call 

let arrowFn = () => {
    return 2;
}
console.log(arrowFn());
console.log(lname());
// console.log(fname);
// lname(); // dixit



function sum(x,y=0){
    let sum = x + y;
    return sum;
}

// arrow function
var add = (x,y) => {
    let sum = x + y;
    return sum;
}
console.log(add(2,3));
console.log(sum(1,2));

var x = 10;

// window