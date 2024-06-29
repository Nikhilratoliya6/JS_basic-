const month=3;
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("january")
        break;
    case 4:
        console.log("january")
        break;

    default:
        console.log("invalid minth");
        break;
}

// falsy values in js 
// false, -0,0."", null , undefined, BigInt 0n, NaN
const arr2=[]
if(arr2.length==0){
    console.log("array is empty")
}
const objectempty={}

if(Object.keys(objectempty).length==0){  // it will result the array of the keys of the objects 
    console.log("object  is empty")
}

// Nullish Coalishing Operators(??) : used for safety check from null and undefined values if will consider omly 2 cases : null and undefined 

let value;
value=5 ??10
console.log(value) // 5

value =null ?? 12 // can also used function here 
console.log(value); // 12

// ternary operator 
const mast=234
mast <=1000 ? console.log("you can go "):console.log("cnnno");