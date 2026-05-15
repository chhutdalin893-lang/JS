class Person{
    // constructor(){
    //     console.log("This is a person class");
    // }

    #name;
    #age;
constructor(name,age){
    this.#name = name;
    this.#age = age;
}
show(){
    console.log(`Name: ${this.#name}, Age: ${this.#age}`);
    if(this.#age >= 18){
        console.log(`She has relationship`);
    }else{
        console.log(`She has no relationship`);
    }
}
    
}
let person1 = new Person(`Dalin`,21);
person1.show();