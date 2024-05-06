class task {
  constructor(name, type, status, dueDate, priority) {
    this.name = name;
    this.type= type;
    this.status = status;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  sayHello() {
    console.log("hello, my name is " + this.name);
  }
}

export function createTask(name, type, status, dueDate, priority) {
  
  let newTaskObject = new task(name, type, status, dueDate, priority)
  
  return newTaskObject;
}
 
