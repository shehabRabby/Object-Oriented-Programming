"use strict";
// class Animal {
//     name: string;
//     speed: number;
//     sound: string;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(name:string, speed:number, sound:string) {
//         this.name = name;
//         this.speed = speed;
//         this.sound = sound;
//     }
//     makeSound() {
//         console.log(`${this.name} says: ${this.sound}`);
//     }
// }
// const dog = new Animal("Dog", 10, "Woof");
// const cat = new Animal("Cat", 5, "Meow");
// dog.makeSound();
// cat.makeSound();
//parameter properties
class Animal {
    name;
    speed;
    sound;
    constructor(name, speed, sound) {
        this.name = name;
        this.speed = speed;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says: ${this.sound}`);
    }
}
const dog = new Animal("Dog", 10, "Woof");
const cat = new Animal("Cat", 5, "Meow");
dog.makeSound();
cat.makeSound();
//# sourceMappingURL=class.js.map