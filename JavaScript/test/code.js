
let obj = {a:1,b:2,c:3};

for(let prop in obj){
    console.log(`obj.${prop} = ${obj[prop]}`);
}



let iterable = [10, 20, 30];

for (let value of iterable) { 
    value += 1; console.log(value);
}


let iterable1 = "boo";

for (let value of iterable1) { 
    console.log(value);
}


let arr = [3, 5, 7]; arr.foo = "hola";

 

for (let i in arr) {

console.log(i); // logs "0", "1", "2", "foo"

}

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


for (let i of arr) {

console.log(i);;; // logs "3", "5", "7"

}

