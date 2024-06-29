const x=null;
const f=function(){
    return console.log("hello");
}
console.log(typeof(f))

let myObj={
    name:"Nikhil",
    roll:56

}
const id=Symbol('890')
console.log(typeof(id))

const n="nikhil"
const m=18
console.log(n+m)  //conactinate two strings

//+++++++++++++++++++++++++++++++++++++++++++ OR 
console.log(`my name is  ${n} and my age is ${m}`)

const game=new String("Hell-owo-rl-d")


console.log(game.length)
console.log(game.toUpperCase())  // it did not change the original string 
console.log(game.__proto__)
console.log(typeof(game))
console.log(game)
console.log(game[0])
console.log(typeof(game.indexOf(4)))  // give index character
console.log(game.charAt('w'))  // gives index value of the character 


// to split string into array on the basis of any character in the strings 
console.log(game.split('-'))  // output will be [ 'Hell', 'owo', 'rl', 'd' ]

const str1=game.substring(0,4)// can take only positive values and return hell and skip 4th character that is last character  
console.log(str1)
const str2=game.slice(-8,3)// can start from the negative value
console.log(str2)

//trim method used to remove the spaces 
const here="      hirishabh    "

console.log(here.trim())

// replace: use to replace the particular characters 
const rep="https://nikhil%20ratoliya.com"
console.log(rep.replace("%20", "hhhh")) 

// includes:to check any character is there in a strings 
console.log(rep.includes('nikhil'))

//
const num=new Number(400)  //number id also an object
console.log(num)

// toFixed property is to define the value upto the required fixed points 
// console.log(num.toFixed(2)) 

// to convert num to string  by using toString
console.log(num.toString.length)

// toFixed property is to define the value upto the required fixed points 
console.log(num.toFixed(2)) 

// to know about the zeroes values by using toLocaleString()

const number2=1000000000;
console.log(number2.toLocaleString()) 
console.log(number2.toLocaleString('en-IN'))  // by defaut it is according to the us_standard to convert it into indian sytsnadrd use" "


//++++++++++++++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++

console.log(Math.abs(-3)) //gives absolute value
console.log(Math.round(5.6)) //roundoff the value

console.log(Math.ceil(5.6)) //takes upper value
console.log(Math.floor(5.6)) //takes lower value

//++++++++++++++random+++++++++++++++

console.log(Math.random())  // by defaut it gives any random value between 0 and 1
console.log(Math.random()*10)+1  // to avoid zero value we added 1 
console.log(Math.floor(Math.random()*10)+1)  // for lower value 


let min=10
let max=20

  // now to get any random value between any range [min,max] the formula is  Math.floor(Math.random()*(max-min+1))+min
  console.log(Math.floor(Math.random()*(max-min+1))+min)


//+++++++++++++++++++++++++++DATE+++++++++++++++++++++++++
const mydate=new Date()
console.log(mydate.toString())  // Wed Jun 19 2024 17:20:50 GMT+0530 (India Standard Time)
console.log(mydate.toDateString())  //Wed Jun 19 2024
console.log(mydate.toLocaleString())  //6/19/2024, 5:20:50 PM
console.log(typeof(mydate))    // date is an object

const mynewdate=new Date(2023,0,20)
console.log(mynewdate.toDateString())
// to get date in milisecond that date will be compared to 1970

const datenow=Date.now()  
console.log(datenow)   // gives date in milisec like this:1718798774341 

const datewhen=new Date(2024,0,26)
console.log(datewhen.getTime())  //gives value in milisec 
console.log(datewhen.getDay())
console.log(datewhen.getMonth()+1)  //to get exact value of a month add  +1 



//to convert date of milisec into seconds 
console.log(Math.floor(Date.now()/1000))  




