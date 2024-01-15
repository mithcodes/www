class user{
    constructor(name,age,address){
        this.name=name;
        this,age=age;
        this.address=address;
    }
    about(){
        console.log(`${this.name} ${this.age}`)
    }
}

const user1=new user("mithlesh",23,"govindpur");
console.log(user1);
