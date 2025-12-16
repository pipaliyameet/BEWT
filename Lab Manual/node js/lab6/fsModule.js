const fs = require('fs')

// const data = fs.writeFile("data.txt","Heyy friends!",(err)=>{
//     if(err){
//         console.log("Error : ",err)
//     }else{
//         console.log('Write sucssecfully!')
//     }
// })


// console.log('start')
// try{
//     const syncData = fs.writeFileSync("info.txt","New file successfully created!")
//     console.log('write successfully!')
// }catch(err){
//     console.log('Error genrated : ',err)
// }
// console.log('end')

// const output = fs.write('output.txt','utf8',(err,data)=>{
//     if(err){
//         console.log('Error : ',err)
//     }else{
//         console.log('Write successfully in "output.txt" file',data)
//     }
// })

// const append = fs.appendFile('data.txt','\nAppend new data',(err)=>{
//     if(err){
//         console.log("Error : ",err)
//     }else{
//         console.log('append sucssecfully!')
//     }
// })

// const dlt = fs.unlink('info.txt',(err)=>{
//     if(err){
//         console.log('Error : ',err)
//     }else{
//         console.log('delete successfully!')
//     }
// })

// const makeDir = fs.mkdir('myDemoDir',(err)=>{
//     if(err.code==='EEXIST'){
//         console.log('Error : ',err)
//         console.log('Directory is alredy exist')
//     }else{
//         console.log('Directory create successfully!')
//     }
// })

// fs.readdir('myDemoDir',(err,files)=>{
//     if(err){
//         console.log("Err : ",err)
//     }else{
//         console.log("Your all file is ")
//         files.forEach(file=>{
//             console.log(file)
//         })
//     }
// })

// fs.copyFile('data.txt','copyFile',(err)=>{
//     if(err){
//         console.log("Error : ",err)
//     }else{
//         console.log("Your file successfully coppyed!")
//     }
// })
