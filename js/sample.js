const mathss=["horse", "cow", "ox", "camel"] 
console.log(mathss.splice(2))  // splice change the array 
console.log(mathss.slice(3))

console.log(mathss)
const nikhi=Symbol("meaning")

const nik=["nik", 23 , "ihcsui"]
const nik1=[...nik,...mathss]
console.log(nik1)

const dat=new Date()

console.log(dat.toLocaleDateString())  // these are the functions so that they are writtemn in the form of the brackits
// console.log(typeof dat)

const datenow =new Date(2023, 5,1)
console.log("new sring is :")
console.log(datenow.toString)
console.log("new date is")
console.log(datenow.getDay())
console.log(datenow.getTime())
console.log(datenow.getTime()*10)

const newarr=["horse", "camel", "dog",["dog",2 , 4, 65]]
const newarr3=newarr.splice(2) // it will get the value from index 2
console.log(newarr3)
const newarr4=[...newarr3,...newarr]
console.log(typeof newarr3)
console.log(typeof nik)

const newobj=new Object()
newobj.name="sidd",
newobj.class="12th"

const obj2=new Object()
obj2.name2="sidd",
obj2.class2="12th"

// const obj3=new Object()
const obj3=Object.assign({},obj2,newobj,mathss )
console.log(obj3)


// const obj3=({},...newobj,...obj2)

// console.log(obj3)




