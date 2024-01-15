// koi object jab dusra object k function k access karta HashChangeEvent
const user1={
    name:"mithleshsingh",
    salary:40000,
    about: function(){
        console.log(this.name + "salary is"+this.salary);
    }
}

user1.about();

const user2={
    name:"singhji",
    salary:400000,
}
user1.about.call(user2);

