const banana = {name: "bannana",quantity: 1,price: 1.95}
const apple = {name: "apple",quantity: 1,price: 1.45}
const candy = {name: "candy",quantity: 1,price: 3.50}

let store = new Map()
store.set("storenumber","5")
store.set("locationcity","Milan")
store.set("locationcountry","italy")
store.set("products",[banana,apple,candy])

console.log(store.get("locationcountry"));
console.log(store.get("products")[0]);

store.get("products")[0].price=1.75
 console.log(banana)


 candy.price=4.99
 console.log(candy);