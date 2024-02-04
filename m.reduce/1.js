const points =[55,56,57,58,59,60]
let sum = points.reduce((result,points)=>{
   return result += points
},0)
console.log(sum);
