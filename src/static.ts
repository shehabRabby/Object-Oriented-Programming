//static

class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count += 1);
  }

  static decrement() {
    return (Counter.count -= 1);
  }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log("------------------");
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
