//pollymorphism

class Person {
  getSleep() {
    console.log(`I am normal person and I sleep 8 hours a day`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a student and I sleep 6 hours a day`);
  }
}

class NextLevelStudent extends Student {
  getSleep() {
    console.log(`I am a next level student and I sleep 4 hours a day`);
  }
}

const getSleepingHours = (person: Person) => {
  person.getSleep();
};

const person1 = new Person();
getSleepingHours(person1);

const student = new Student();
getSleepingHours(student);

const nextLevelStudent = new NextLevelStudent();
getSleepingHours(nextLevelStudent);

//----------------------

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) =>{
    console.log(param.getArea());
}

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10,20);

getArea(shape1);
getArea(shape2);
getArea(shape3);
