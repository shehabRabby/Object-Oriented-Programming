// class Animal {
//     name: string;
//     speed: number;
//     sound: string;

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
  constructor(
    public name: string,
    public speed: number,
    public sound: string,
  ) {}

  makeSound() {
    console.log(`${this.name} says: ${this.sound}`);
  }
}
const dog = new Animal("Dog", 10, "Woof");
const cat = new Animal("Cat", 5, "Meow");

dog.makeSound();
cat.makeSound();