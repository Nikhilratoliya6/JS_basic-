// push merge two array and take the seond array as a element 
 //push mere the existing array 
 // to avoid this concat is used to merge two array and it return a new array of the merge of two 

 const arr1=["thor", "spiderman","pokemon"]
 const arr2=["shaktiman", "pokemon", "doremon"]

//  arr1.push(arr2)
const arr3=arr1.concat(arr2)
 console.log(arr3)

 //or we can use spread operator : basically it spread the elemnts of botn array
 const arr4=[...arr1,...arr2]  // spread operator 
 console.log(arr4)

 arr5=[1,2,3,4,[6,7,8,[89]],90,78,[68,69]]  //to make a nomal array use flate(indinity)
console.log(arr5.flat(Infinity))   // output : [1,2,3,4,6,7,8,89,90,78,68,69]


// to ceck this is array or not use :
console.log(Array.isArray("Nikhil"))

// to convert above into array use Array.from()
console.log(Array.from("Nikhil"))  //[ 'N', 'i', 'k', 'h', 'i', 'l' ]
const nik=Array.from("hikjhdxd")
console.log(Array.from("hikjhdxd"))
console.log(typeof nik)
console.log(nik.length)
console.log(typeof nik)
console.log(Array.from({ name:"nikhil", roll_no:34})) // output:[]  //interseting case (interview)


let sc1=100
let sc2=200
let sc3=300
console.log(Array.of(sc1,sc2,sc3))  // can make array of the values ofd any type 

