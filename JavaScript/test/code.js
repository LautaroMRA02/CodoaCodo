
// let obj = {a:1,b:2,c:3};

// for(let prop in obj){
//     console.log(`obj.${prop} = ${obj[prop]}`);
// }



// let iterable = [10, 20, 30];

// for (let value of iterable) { 
//     value += 1; console.log(value);
// }


// let iterable1 = "boo";

// for (let value of iterable1) { 
//     console.log(value);
// }


// let arr = [3, 5, 7]; arr.foo = "hola";

 

// for (let i in arr) {

// console.log(i); // logs "0", "1", "2", "foo"

// }




// for (let i of arr) {

// console.log(i);;; // logs "3",, "5", "7"

// }



// document.getElementsByTagName("p")[1].innerHTML= "Hello";
 document.getElementsByTagName("p")[0].innerHTML= "Hello";
//  document.getElementsByTagName("p").innerHTML= "Hello";

// document.getElementById("image").source = "pic_mountain.jpg";
 document.getElementById("image").src = "pic_mountain.jpg";
//  document.getElementById("image").image= "pic_mountain.jpg";

// document.getElementById("demo1").fontColor = "red";
//  document.getElementById("demo1").color = "red";
 document.getElementById("demo1").style.color = "red";



 var person = {
    name: "John",
    age: 50
  };

//   alert(person.name + " is " +person.age );
//   alert(person.name , " is " , person.age );
//   alert(name + " is " + age );

var frutas = ["Manzana", "Plátano", "Naranja"];


for (i=0;i<3;i++) {

    console.log(frutas[i]);
  
  }