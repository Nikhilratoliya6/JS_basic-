// object lliterals

const mysym=Symbol("key1")

const jsuser={        // it is known as non-singlketon object 
    name:"NIkhil ",
    "full name":"Nikhil Ratoliya",
    roll_no:12,
    [mysym]:"hi",  // to use it as a symbol 
    email:"nikhil@gmail.com",
    user:["h",2 , 3 ]

}
// to acces the elemnt of the object 
console.log(jsuser.name)

// other way to acces the lement of the object
console.log(jsuser['name'])
console.log(jsuser['full name'])  // we can acces it only by using this 
console.log(jsuser[mysym])       // to print symbol


// to update the value
jsuser.email="nikhilratoli@gmail"
console.log(jsuser.email)

// to freeze  the object ie.cannot change the value after it 
// Object.freeze(jsuser)
jsuser.email="nikhilratoli@microsoft.com"

// console.log(jsuser.email)
// console.log(jsuser)


// to declare funtion from the object 
jsuser.greet=function(){
    console.log("helloworld")
}
console.log(jsuser.greet) //[Function (anonymous)]
console.log(jsuser.greet()) //helloworld

jsuser.greet1=function(){
    console.log(`my name is ${this.name} `)  // to specifyy the value of the same objecy we use this keyword
}
console.log(jsuser.greet1())


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email  // to acces the first element of the array of the objects it is generally use ehen we acces the data from db

 console.log(Object.keys(jsuser));  // it gives keys array of the objecy
console.log(Object.values(jsuser));   // it gives keys array of the objet
console.log(Object.entries(jsuser));

// console.log(tinderUser.hasOwnProperty('id')); //to check 









