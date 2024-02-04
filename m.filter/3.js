const points =[1,23,19,99,85,2,32,87,8,5,2]
let lowprices = points.map((x)=>{
        return Math.floor(x+(x*0.15))
})
console.log(lowprices);
