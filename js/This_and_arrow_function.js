// this: it is used to refer the current context 

const welcom={
    username:"Nikhil",
    Price:878,
    message:function(){
        console.log(`${this.username}, welcome to our website`)  // here this refer to the current context(value)
    }
}
welcom.message()

welcom.username="Sam"
welcom.message()  // here the name of the username will change this is done becasuse we assign the value of the username of the current context 
 

// console.log(this); // this will give {} here because in node  the object is empty object and in browsers the global object is "window"
// but wwe can acces the details by using functions that is global values

// function crazy(){

//     console.log(this)
// }
// crazy()




// function chai(){
//     let username="raju"
//     console.log(this.username)
// }
// chai()   // it will give output: undefined   i.e this is compatibe for use in objects in functions




//++++++++++++++++++++++Arrow++++++++++++++++
//we can declare functions using arrow functions  :syntax()=>{}



// const chai=()=>{
//     let username="raju"
//     console.log(this.username)  // here it is undefined also 
// }
// chai() 


const fun1=(num1,num2)=>{
    return console.log(num1+num2);
}
fun1(3,4)

//or we can declare it in another way called (implicit )
const func2=(num1,num2)=> console.log(num1+num2) //we let it will return  // that value that we want to return should close in () bracket 
func2(5,7)

const func3=(num1,num2)=> console.log({username:"nikhil", school:"rm public school"}) //in this way we can return the objects also
func3()
