let animal = {
    name: "Unkonwn",
    color: "red",
    age: 0,
    sound: function(){
        return `${this.name} makes a sound`
    }
};

// prototype

let cat = Object.create(animal);
cat.name = "williams";
cat.color = "grey";
cat.age = 1;
console.log(cat.sound());


let newCat = Object.create(cat);
newCat.name = "wiliams Lanbert";
newCat.color = "blue";

console.log(newCat);

let dog = {}
Object.setPrototypeOf(animal, dog);
dog.name = "Emeka";
dog.color = "purple";
dog.age = 28;


console.log(dog);


let human = {
    _proto_ : animal
};
console.log(human);

//construction function

function Human(name, age){
    this.name = name;
    this.age = age;


    this.profile = function(){
        return `Hello i am ${this.name} and i am ${this.age} years old`
    };
};

let personOne = new Human("williams", 8);


console.log(personOne);

console.log(personOne.profile());

Human.prototype.sense = false;

console.log(personOne.sense);
