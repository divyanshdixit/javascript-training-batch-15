var fname = 'divyansh';
console.log(fname);


// lname = 'dixit';
// console.log(lname);
// const lname = 'dixit';
// let lname;
// var lname;


const x = 100; // reference (address) constant reference == value
// x = 20; // 
// console.log(x);

const obj = { // 1000 {}
    color:'fair'
}

obj.color = 'black';
console.log(obj);

// function :

function add(n1=0,n2=0, n3=0){ // parameter => pass at the time of definition
    // default value of a parameter n3=0
    // var n1 = 10;
    // var n2 = 20;

    var sum = n1 + n2 + n3; // 30 + 0
    return sum;
}
var result = add(10,20); // arguments => passing value of parameter at the tie of calling a function
console.log('sum of 10 and 20 is ' + result )
// nan => not an number
console.log( result)

console.log(typeof add);

// scope:
// let, var, const => local scope rules are same.
// if varaibale declared without using var, let , const it'll become global

// var n1 = 10; // global
function sub(){
    // local scope
    var n1 = 100; // global scope
    console.log(n1); 
}
sub();

console.log(n1); 
