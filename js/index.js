     for (let i = 100; i >= 1; i--) {
       console.log(i);
 }
 
 let foo = function bar(){}
 console.log(typeof bar);
 
let arr = new Array(10);
for (let i = 0; i < arr.length; i++){
    arr.fill(i, i);
}
console.log(arr);

let str = "abc";
console.log([...str].length)