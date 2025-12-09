const EventEmiiter = require('events');

const myEmiter = new EventEmiiter();

myEmiter.on('hii',()=>{
    console.log("Hii from 'MEET'")
    setInterval(()=>{
        console.log("Hii from 'MEET'")
    },1900)
});

myEmiter.emit('hii')