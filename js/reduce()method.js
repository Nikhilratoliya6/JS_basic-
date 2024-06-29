//it executes a user supplied "reducer" callback function on each element of the array 

// reduce generally used in the shopping cart where the bill be add as the customer buy things without cahnging any value of the rray as we can do it using forEach functio but it will be very easy to use reduce fiunction 


const mynums=[1,2,3]


const mytotal=mynums.reduce(function(accumulator, curvall){
      return accumulator+curvall
},0) // initial value will be assign to accumulator but after first execution the accumulator value will  be the sum of acc+curr i.e sum of the previous value
console.log(mytotal)// 6

const mytotal2=mynums.reduce(function(accumulator, curvall){
    return accumulator+curvall
},4) // here the initial values of acc is 10 
console.log(mytotal2)// 10

///or 
console.log("using arrow function ")
const mytotal3=mynums.reduce((acc, curr)=>acc+curr,8)
console.log(mytotal3)


