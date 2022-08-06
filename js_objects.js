
// object => 

var name= "bavita"; 
var city = "noida";

function functionName(){
    console.log('first')
}

// call the function
functionName();

// property, method(function)
var detail = {
    // key:value
    name:"bavita", // property
    city:"noida",
    getcityName:function(x,y){ // method
        return this.city; // this referes to the current object
    }
}

// print the object property:
console.log(detail.name);
console.log(detail.city);

// print the object method:
console.log(detail.getcityName());


// based on reference 
// const x = 10; // 1000
// x = 20; // 1001

const someObj = { // 2000
    name:"bavita", // property
}

someObj.name = "div";

// change the property value:

// objectName.propertyName = "new value";
detail.name = "div";
console.log(detail);

// add new prop:
detail.newVal = 'add new';
console.log(detail);

// add new method:
detail.getName = function(){
    return this.name;
}

console.log(detail, detail.getName())