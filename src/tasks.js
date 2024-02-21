class task {
  constructor(name, status) {
    this.name = name;

    this.status = status;
  }

  sayHello() {
    console.log("hello, my name is " + this.name);
  }
}

export function createTask(name, status) {}
