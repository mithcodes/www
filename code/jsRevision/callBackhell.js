function stepOne(){
   setTimeout(()=>{
    console.log("step one");
    callback()
   },1000) 
}

function stepTwo(){
    setTimeout(()=>{
     console.log("step one");
     callback()
    },1000) 
 }

 function stepThree(){
    setTimeout(()=>{
     console.log("step one");
     callback()
    },1000) 
 }

 function startprocess(){
    stepOne(()=>{
        stepTwo(()=>{
            stepThree(()=>{
                console.log('processs completed')
            })
        })
    })
 }
 