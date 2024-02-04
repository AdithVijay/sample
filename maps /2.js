let mypet =new Map()
mypet.set("name","stedo")
mypet.set("type","dog")
mypet.set("breed","poodle")
mypet.set("age","7")
mypet.set("friends",["Bit","byte","gata"])


mypet.set("color","black")
mypet.set("breed","beagle")
let friends = mypet.get("friends")
let arry = friends.filter((x)=> x!== "Bit")
mypet.set("friends",arry)
mypet.get("friends").push("chip")


console.log(mypet);