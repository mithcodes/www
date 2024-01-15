const obj1={
    name:"mithlesh kumar singh",
    address:"govindpur",
    about:function(){
        console.log(`${this.name} is belong from ${this.address}`)
    },
    applying:function(job,salary){
        console.log(`${salary}  ${job}`)
    }
}

const obj2={
    name:"sunjal ",
    address:"bishmugarh",
}

obj1.about.call(obj2);
const binding=obj1.about.bind(obj2);
console.log(binding);
binding();
obj1.applying.apply(obj2,["softwere",3000]);