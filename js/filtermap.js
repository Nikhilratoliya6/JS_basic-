// since forEach() loop do not return any value so to counter this problem we user filter() which returns required value 
//it also requires callback functions
const array1=[1,2,3,4,5,6,7,8,9]
// const num=array1.filter((item)=>item>7) // here condition is called basis of filter() 

//and

const num=array1.filter((item)=>{
    return item>3
})
console.log(num)

// can also do it by forEach()
const array2=[]
array1.forEach((num)=>{
    if(num>3){
        array2.push(num) // push the nums in array2  
    }

})
console.log(array2) 

// 
const myobject=[{
    name:"nikhil", class:"12th", school:"rmps", age:"18"
},
{
    name:"ankit", class:"11th", school:"rmps", age:"18"
 
}
,{
    name:"sandy", class:"12th", school:"rmps", age:"17"

}]

const books=myobject.filter((item)=>item.age>17)  // so we can filter the incoming values from the dataabse according to user requirement 
console.log(books)

