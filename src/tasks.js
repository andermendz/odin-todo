class project {
  constructor(name, description, priority, date) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.date = date;
  }

  sayHello() {
    console.log("hello, my name is " + this.name);
  }
}
