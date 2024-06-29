//A shallow copy of an object is a copy whose properties share the same references
//deep copy:A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made
  
//JavaScript array-copy operations create shallow copies.
//in java array size can be changiable 

const myarr=new Array(1,2,3,4,5)  // array is an objecyt datatype
console.log(myarr)
console.log(typeof(myarr))

///++++++++array Methods++++++++++++++++===
myarr.push(6)  // add element in the array 
myarr.pop()  // by default remove the last element of the array 
console.log(myarr)

myarr.unshift(9) //add element in the starting of the array 
console.log(myarr)

myarr.shift()//remove the first element  of the array 
console.log(myarr)

console.log(myarr.includes(9))  
console.log(myarr.indexOf(3))

//    Join() is used to convert the array type into the string 

const newarr=myarr.join()
console.log(newarr)      // output: 1,2,3,4,5
console.log(typeof newarr)   // string type 

//+++++++++someimp_methods of the array++++++++++++++

const myArr=new Array(0,1,2,3,4,5,6,7,8,9)
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //return [1 2]  and imp:slice do not manupulate the original array 
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // return [1,2,3]   and imp: splice manupulate(change) the original array
console.log("C ", myArr);
console.log(myn2);

const mynewarray=[2,3,4,5]
console.log(mynewarray)
mynewarray.push(888)
mynewarray.pop() 
console.log(mynewarray)
// let  mynew2=mynewarray.push(888)
// console.log("my new array is", mynew2)