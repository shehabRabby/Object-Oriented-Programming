class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numofHours: number) {
    console.log(`${this.name} is sleeping for ${numofHours} hours.`);
  }
}




//child class Student and Teacher inheriting from Person
class Student extends Person {
  getSleep(numofHours: number) {
    console.log(`${this.name} is sleeping for ${numofHours} hours.`);
  }
}

const student1 = new Student("StudentJohn", 20, "123 Main St");
student1.getSleep(15);



// Teacher class inheriting from Person and adding a new method takeClass
class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address); // Call the parent class constructor
    this.designation = designation;
  }

  takeClass(numofClasses: number) {
    console.log(`${this.name} is taking ${numofClasses} classes.`);
  }
}

const teacher1 = new Teacher("TeacherJane", 30, "456 Elm St", "Math Teacher");
teacher1.getSleep(8);
teacher1.takeClass(5);
