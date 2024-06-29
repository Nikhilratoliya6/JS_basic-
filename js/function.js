function saymyname(){
    console.log("hi")
}
saymyname  // it is the reference of the function
saymyname()  // it is the execution of the function

function name(username){
    if(username===undefined){      // username===undefined it also wriiteen as !username
        return `please enter your name `
    }
    return `${username} just logged in`
}
console.log(name("Nilhil"))
console.log(name())   // if no argument  is passed and function need a paramenter in this case function returns undefined  


function addToCart(...num1){ // spread operator to extent the size of the argument and stored them in a arrays 
    return num1
}
console.log(addToCart(200, 300, 500, 799, 677))

//+++++++how to pass object through the function

const myobject={
    usernames:"Nikhil ratoliya",
    Enrollement_no:345

}

function takingobj(anyobject){
    return `MY name is ${anyobject.usernames} and my enrollment no is:${anyobject.Enrollement_no}`
}
console.log(takingobj(myobject))
console.log(takingobj({
    usernames:"nsjdnb",
    Enrollement_no:"nhiucb@gmail.com"
}))
//+++++++how to pass arrays  through the function

const newarray=["rat", "dog", "canmel", 5000]
function returnarrayfirstvalue(getarray){
    return `first valiue of the array is:${getarray[1]}`
}
console.log(returnarrayfirstvalue(newarray)) 
console.log(returnarrayfirstvalue([20,30,90,78,56,"hitesh"])) 


////////////
// global scope of console brwser and node are different : 

//++++++++++++++++++++++++++interesting++++++++++++++++++


// we can define function in a variable

const addTwo=function(num){
    return num+1
}
console.log(addTwo(5))   // note: we cannot acces the addTwo() function before its declkaration 

//+++++++++++BUT+++++++++
console.log(addOne(67))  //but we can access it before its declaration 

function addOne(num1){
    return num1+1

}

