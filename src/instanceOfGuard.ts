//instance of typeguard -- type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  doSleep(numOfHours: number) {
    console.log(`${this.name} is sleeping for ${numOfHours} hours`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOfHours: number) {
    console.log(`${this.name} is studying for ${numOfHours} hours`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numOfHours: number) {
    console.log(`${this.name} is taking a class for ${numOfHours} hours`);
  }
}


//function Guard
const isStudent = (user: Person) => {
    return user instanceof Student;
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}



//instance of type guard
const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(5);
  } else if (isTeacher(user)) {
    user.takeClass(3);
  } else {
    user.doSleep(8);
  }
};

const student1 = new Student("Alice");
const teacher1 = new Teacher("Dr.Bob");
getUserInfo(student1);
getUserInfo(teacher1);
