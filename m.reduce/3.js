const prices = [1.23,19.99,85.2,32.87,8,5.2]
let aftertax = prices.reduce((result,points)=>{
    if(points > 6){
        return result+points
    }
    return result+ points *1.2
},0)
console.log(aftertax);