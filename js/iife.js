//Immediateluy invoke functions expressions (IIFE)

//IIFE is used to connect the appliucation immediately with the database as the application is started
// it also used to get rid of the pollution caused by the global variables on the local 
// syntax:
// ()(): first bracket is forfunction and second is for execution  so after writing in this form no need to call function it will automativcally executes
(function chai(){  // function with name is named IIFE 
    console.log("datebase disconnected ")
}());   // it is iife and note that ; should be there to ensure that the invoke is end otherwise it will run automatoicaly in

(function chaiaur(){
    console.log("database  ")
}());

(function chai(name){
    console.log(`my name is ${name}`)
}("Nikhil "));

((name)=>{   // function without name can also be declared here
    console.log(`my name is ${name}`)
})("sonu ");    // function without named iife is called simple IIFE 