/*

****
***
**
*

*/
let n = 4;
let str = "";

for(let i=1;i<=n;i++){  //line, i=2
    for(let j=0;j<i;j++){ // star j=2, 2<=3, 3, 3<=3, 
        str = str + "*"; // str += "*";
    }
   str = str + '\n';
}

console.log(str);
