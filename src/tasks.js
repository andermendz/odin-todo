class task {
  constructor(name, status, dueDate, priority) {
    this.name = name;
    this.status = status;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  sayHello() {
    console.log("hello, my name is " + this.name);
  }
}

export function createTask(name, status, dueDate, priority) {
  
  let newTaskObject = new task(name, status, dueDate, priority)
  
  return newTaskObject;
}
 
