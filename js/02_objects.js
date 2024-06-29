// singleton obj\
const user=new Object()   // it is same as user={} but it is a singketon obj 
user.id="123abc"
user.name="jimmy"
user.email="jimmy@some.com"
user.fullname={
    email2:"jimm@gmail",
    firstname:
    {
       id2:"345",
       name2:"Mediat"
    }
}
console.log(user) 
console.log(user.fullname.firstname)
console.log(user.fullname.firstname.name2)
// to avoid any non given value of the key we use "?" called option chaining 
  //  console.log(user.fullname.firstname?.name2)

  const newu=new Object()
  newu.id="12345", 
  newu.email="nikhil@gmail.com",
  newu.School="RMPS"

  const obj3=Object.assign({}, user,newu)
  console.log(obj3)    // it will give:{ email2: 'jimm@gmail', firstname: { id2: '345', name2: 'Mediat' } }, School: 'RMPS'}

// to avoid this:
console.log("new object is given below")
const obj4={...user,...newu}
console.log(obj4) 


// destructuring of the code : to avoid the again and again use of the variabkes to  acces the required valoue from the objects  
// to acces the value we need to wriyte like this:  user.fullname

const {fullname}=user
console.log(fullname)
// or
const {fullname:FN}=user   //so can use as a short cut 
console.log(FN)
 

//++++++++++++++++++++++++API+++++++++++++++++++++++
//JSON: written as like and its key are written in a string and it is written lije a object of without name
{
  "name:":"NIkhil"
  "roll_no": "12"
  "email":"hjsdionbub@gmaik"


}

//API can be given in form of the array like:
[
  {},
  {},
  {}
]
