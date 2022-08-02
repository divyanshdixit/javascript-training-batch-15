// function getRequest(); // function declartion 

var a; // variable declartion

a = 10;

function getSum(x, y = 0, z, c) { // function definition
    var b = y; // local scope
    var res = a + b; //.
    return res;
}
var getResult = getSum(20, 50);
console.log(getResult);
getSum(30, 10, 20, 5); // argument
getSum();
getSum();
getSum();
getSum();
getSum();
// console.log(b);// undefined

// calling function 

// example

function sumCal(x,y){
    var sum = x + y;
    return sum;
}

var getVal = sumCal(-1,2);
console.log(getVal);