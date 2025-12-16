const fs = require('fs')

fs.writeFile("output.txt","writing file",(err)=>{
    if(err){
        console.group(err)
    }else{
        console.log("File written succesfully")
    }
})