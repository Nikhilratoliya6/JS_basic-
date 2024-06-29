// it also takes callback function 
// it automatically return the value unlike filter 
const array1=[1,2,3,4,5,6,7,8]
// example we want to add 10 to each and every value 
const newarray1=array1.map((num)=>num+10) // here it auatomatically return the value 
console.log(newarray1);

const newarray2=array1.map((num)=>{return  num+10}) // here different scope so we required to return the value of the array

console.log(newarray2);


// chaining  of the methods  like: array1.map().map().filter()......
// note that the method 1 value willl be pass to other method in chaining as the previous method return the value 
const array3=array1.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>52).map((num)=>num-4)

console.log(array3)
