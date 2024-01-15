const person={
    name:"john",
    greet: function(greeting){
        console.log(`${greeting},${this.name}`)

    }
}
const anotherPerson={
    name:"alice",
};
person.greet.apply(anotherPerson,["hello"]);
//aply or call mai kch differnce nai h bas apply mai argument array k form mai pass hota han
