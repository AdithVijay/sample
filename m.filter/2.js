const arry = ["France","south africa","United states"]
let news = arry.filter((x)=>{
    if(x.includes(" ")){
        return true
    }
    return false
})
console.log(news);