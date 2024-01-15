setTimeout(()=>{
    console.log("call back hell 1")
    setTimeout(()=>{
        console.log("call back hell 2")


        setTimeout(()=>{
            console.log("three")
            setTimeout(()=>{
                console.log("four")
            },3000)
        },1000)
    },0)
},1000)


setTimeout(()=>console.log("0ne"),2000)
setTimeout(()=>console.log("two"),0)