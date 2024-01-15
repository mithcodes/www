class student{
    static count=0;
    constructor(name,roll,age){
        this.name=name,
        this.roll=roll,
        this.age=age,
        student.countst()

    }
    info() {
        console.log(`${this.name}  ${this.roll}   ${this.age}`)
    }
    static countst(){
        student.count++;
    }
    static printcount(){
        console.log(student.count);
    }
}

const mith=new student("mithlesh",23,23);
const mith1=new student("mithlesh",23,23);
const mith2=new student("mithlesh",23,23);
const mith3=new student("mithlesh",23,23);
const mith5=new student("mithlesh",23,23);

mith.info();
student.printcount();
