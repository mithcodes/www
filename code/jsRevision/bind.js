const person={
    name:"singh ji",
    address:"govindpur",
    greet:function(greeting){
        console.log(`${greeting},${this.name}`)
    }
}

const anotherPerson={
    name:"mithlesh",
    address:"govindpur",
}

const creatingFunction=person.greet.bind(anotherPerson);
creatingFunction("hello");