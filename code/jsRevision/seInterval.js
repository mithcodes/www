//setInterval and setTimeout mai differnce y ha ki setInterval lagatr call hoga or setTimeout ek baar call hoga


const set=setInterval(function(){
    let count=0;
    while(count<10){
    console.log(" i will come after every second")
    count++;
}
},1000)