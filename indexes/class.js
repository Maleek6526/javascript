class Human{

    #name; //A private field
    #age;
    #sex;

    constructor(name, age, sex){
        this.#name = name
        this.age = age
        this.sex = sex;
    }

    constructor(name, age){
        this.#name = name;
        this.age = age;
    }

    set name(newName){
        this.#name = newName;
    }

    set age(newAge){
        if(newAge > 0){
            this.#age = newAge;
        }else{
            throw new Error("Age should not be less than zero ofcourse");
        }        
    }

    set sex(sex){
        this.#sex = sex;
    }

    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get sex(){
        return this.#sex;
    }

    describe = ()=> {
        return `i am ${this.#name} and i am ${this.age} and i am a ${this.sex}`
    };
}

const anotherWoman = new Human("adewale", 24, "female");
let woman = new Human("caleb", 44);
console.log(anotherWoman.describe());
console.log(woman.describe());

class Man extends Human{
    
    constructor(name, age){
        super(name, age, sex)
    }
}

module.exports = Human;