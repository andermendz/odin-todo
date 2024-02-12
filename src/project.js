class project {

    constructor(name, description, tasks){
        this.name = name;
        this.description = description
        this.tasks = tasks;
    }

  sayHello() {
 console.log('hello, my name is ' + this.name)
    }
}

let projects = []

let avn = new project('dadas', 'testing project with class',['test'])
projects.push(avn)
let avn2 = new project('dadas2', 'testing project with class2',['task', 'task2'])
projects.push(avn2)


let objectJSON = [];

export function createProject() {

    let projectInputName = document.getElementById('name');
let projectInputDescription = document.getElementById('description');
let projectForm = document.getElementById('projects-form')

    let name = projectInputName.value
    let description = projectInputDescription.value
    let newProject = new project(name, description, [])
    projects.push(newProject)
    updateJSON(projects)
    console.log(objectJSON)
    projectForm.reset()
}


const updateJSON = (projects) => {
   objectJSON = JSON.stringify(projects)

}


updateJSON(projects)

console.log(objectJSON)