class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    details(){
        console.log(`the age of ${this.name} and age is ${this.age}`)

    }

}

const p=new person("mithlesh",23);
p.details();



class person2{
    constructor(profession,salary){
        this.profession=profession;
        this.salary=salary;

    }
    detailss(){
     console.log(`${this.profession} and their salary ${this.salary}`)
    }
}

const mithlesh=new person2("softwere enginner",400000);
mithlesh.detailss();