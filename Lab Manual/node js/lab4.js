const os = require('os');
const { uptime } = require('process');

// console.log(os);
// console.groupCollapsed('os type : ',os.type())
// console.groupCollapsed('os relese : ',os.release())
// console.groupCollapsed('os platform : ',os.platform())
// console.groupCollapsed('os architecture: ',os.arch())

// function convertToGB(byte){
//     return byte/(1024*1024*1024).toFixed(2)
// }
// console.log('Total memory : ',convertToGB(os.totalmem()))

// const upTimeSecond = Math.floor(os.uptime().toFixed(1))
// const upTimeHoure = Math.floor((upTimeSecond/3600).toFixed(1))
// const upTimeMinit = Math.floor((upTimeSecond/60).toFixed(1))
// console.log('time : ',upTimeHoure,':',upTimeMinit,':',(upTimeSecond/100).toFixed(0))

const cpu = os.cpus()
// console.log(cpu.length)
cpu.forEach((core,index)=>{
    console.log(`model = ${core.model} , index = ${index+1}`)
})