
// Exercise: Advanced Objects

// #1 Evaluate these comparisons:

console.log([2] === [2]); // false
console.log({} === {}); // false

// #2 What is the value of property "a" for each object?

const object1 = { a: 5 }; // a1 = 5
const object2 = object1; // a2 = a1 = 5
const object3 = object2; // a3 = a2 = a1 = 5
const object4 = { a: 5 }; // a4 = 5
object1.a = 4; // a1 = a2 = a3 = 4

// #3 Create two classes: an Animal class and a Mammal class!
// Create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color!

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound() {
        console.log(`Moooo, I'm ${this.name}, the ${this.color} ${this.type}.`);
    }
}

const cow = new Mammal("Bessie", "cow", "lilac");
cow.sound();
