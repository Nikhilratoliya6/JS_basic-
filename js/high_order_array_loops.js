// for of loop  : it can be applied on any object 
const array=[1,2 , 3,4,5]
for (const index of array) {
    console.log(index);

}

const hello="helloworld"
for (const iterator of hello) {
    console.log(`each character in the string is ${iterator}`);
}

//map : it is also an object but has a unique value(keys ) and order of the keys also mantained as inserted by the user 

const map=new Map()

map.set("IN","india")
map.set("US","USA")
map.set("IN","india", "canada ")
// map.set("india")

// map.set("india")
// console.log(map);  // Map(2) { 'IN' => 'india', 'US' => 'USA' } 
// console.log(map.size); //2
// console.log(map.get('IN'));//india
// console.log(map.delete('US'));


// how can we apply loop on the map 
for (const key of map) {   // it return array
    console.log(key);   // [ 'IN', 'india' ]
                         //[ 'US', 'USA' ]
}

// to avoid it 
for (const [key, value] of map) {
    console.log(key ,":-" ,value)   // IN :- india
                                      //US :- USA
}

// object
const myobject={
    name:"Nikhil",
    class:"12",
    emailid:"nikhi@gmail"
}
// for (const key of myobject) {  // by using for of objects cannot be iteratable 
//     console.log(key);
// }


//+++++++++for in loop : used for object iteration++++++++++++++++++
console.log("here for in loop discussion stsrts");
for (const key in myobject) {
        console.log(key);  // we got keys 
    }
for (const key in myobject) {
        console.log(myobject[key]);  // we got values
    }
    
for (const key in myobject) {
        console.log(`${key}for shortcut is for${myobject[key]} `);  // we got values
    }


    // for in in array 
    const arrs=[1,2,3,4,5,6,7]
    for(const key in arrs){
        console.log(key);  // returns only array keys : note that the keys of the array stsrts from 0 and they can be integer value only so to solve this problem objects concept comes where keys camn be of any dayatype 
         console.log([key]); // return value
    }

    // we cannot use for in in maps : reason: because maps is not iteratible









    //+++++++++++++++++++++for each loop+++++++++++++++++++++++
     //syntax: array.forEach(calbackfunction{  }) // callback function: function without nae is called callback function
     const arry3=["NIkhil ", 2 ,3 , "rohit"]
    arry3.forEach(function (item) {
        console.log(item);
    })

    //using arrow function
    arry3.forEach((item)=>{
        console.log(item);
    })

    // or
    console.log("by function reference ")
    function printMe(item){
        console.log(item)
    }
    arry3.forEach(printMe) // we will given the function reference only


    // forEach have others parameyters other than items 
    console.log("others parameters ")


    arry3.forEach((item,index,arry3)=>{
        console.log(item,index,arry3);
    })

    // array of the objects 
    const mynewCoding=[
        {
            language:"js",
            venue:"delhi"
        },
        {
            language:"py",
            venue:"mumbai"
        },
        {
            language:"ruby",
            venue:"bijnor"
        },
        {
            language:"c++",
            venue:"agra"
        }
    ];

    mynewCoding.forEach((item)=>{ 
        console.log(item.language);  // can acces the lang of each obj
    })// here item points to each  object of the array

