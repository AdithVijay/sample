const companies =["apple","spacex","amazon","meta","google"]
let moded = companies.reduce((result,company,i)=>{

    if(company.startsWith("a")){
        return result
    }
   return result+ "_" +company
},"")
console.log(moded);