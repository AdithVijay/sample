let houseforsale = new Map()
houseforsale.set("area","940")
houseforsale.set("value","fifth street")
houseforsale.set("built","2012")
houseforsale.set("owner",[29000,295000,315000,312000])
houseforsale.set("offers",{name : "blake",age:29})


houseforsale.delete("built")
houseforsale.get("offers").age=30

let offers = houseforsale.get("owner")
let total = offers.reduce((acc,curr)=>{
   return acc + curr;
},0)
console.log(total);
