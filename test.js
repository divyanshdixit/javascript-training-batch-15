
var x; // undefined
console.log(typeof x, x)

var y = 10;
console.log(typeof y, y);


var obj = { // alphabatical indexes
    carname: 'volvo',
    color:'red',
    modal:11,
    transport: function(){
        console.log('method')
    }
}

// prop access
console.log(obj.carname);

// method access
console.log(obj.transport())
// console.log(obj['carname'])
// prop, method


var arr = [10,20,30,40]; // numbered indexes

console.log(typeof arr);

// null =>

var a = null; 
var b = undefined;

console.log(a, typeof a)

console.log( a == b , a === b);


var v = function(){
    console.log('function')
}

console.log(typeof v);

// ===============================================

/*
var password  = '123'; // global scope

function getv(){
    console.log(k)// 100
    console.log(password);
    var password = '123'
    var k = 10;// functional scope local




    console.log(k) // 10


}
console.log(k); // 100
*/
console.log('=======');

// let l = 20;

// {
//     let x1 = 30;
//     console.log(x1); // 30
//     console.log(l) // 20
// }
// console.log(l); // 20
// console.log(x1) // undeinfed

// const g = 100;
// g = 200; // not possible

// let g = 100;
// g = 200; // possible

var j = 10;
j = 122;
console.log(j) // 122

{
    var j = 20;
}

console.log(j) // 20

console.log('*******')
// let to var re-declaration not allowed in same scope

var l1 = 10;

console.log(l1); // 10

{
    let l1 = 2;
    
    // var l1 = 4; // not allowed
    console.log(l1)// 4
}

var l1 = 20;
console.log(l1) // 20


// var to let re-declartion=> not allowed in same scope.

var p=10;
// let p = 20; // not allowed
console.log(p)

{
    var p =30; // allowed
    // let p =40; // not allowed
}

console.log(p)

// let to let re-declartion=> not allowed in same scope


let q = 2;
// let q = 5; // not allowed
console.log(q)

{
    let q = 6; // allowed
    console.log(q)
    // let q = 10; // not allowed
}


// let to let re-declatin=> allowd in different scope

let w = 3;
console.log(w)
{
    let w = 4;
    console.log(w)
}

// let to const in same scope: not allowed

let e = 1;
// const e = 2;

// const => reference must be constant and can't be changes
const t = 10; // 10
// t = 100;// 100

// const t = 10; 
// 10 4bits of memory for number

// 1000=> refernece/ address

console.log(t)

// const value can;'t be changed.

const u = {
    country:'india',

} // 200

// u.country = 'uk';
// u = 20; // 20

console.log(t, u)