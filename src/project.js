class project {
  constructor(name, description, tasks) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
  }

  sayHello() {
    console.log("hello, my name is " + this.name);
  }
}

let projectsJSON = [];
let projects = [
  {name: "Project 1", description: "This is project 1", tasks: ["Task 1.1", "Task 1.2"]},
  {name: "Project 2", description: "This is project 2", tasks: ["Task 2.1", "Task 2.2"]},
  {name: "Project 3", description: "This is project 3", tasks: ["Task 3.1", "Task 3.2"]},
  {name: "Project 4", description: "This is project 4", tasks: ["Task 4.1", "Task 4.2"]},
  {name: "Project 5", description: "This is project 5", tasks: ["Task 5.1", "Task 5.2"]},
  {name: "Project 6", description: "This is project 6", tasks: ["Task 6.1", "Task 6.2"]}
];
updateJSON();
loadProjects();


export function createProject() {
  let projectInputName = document.getElementById("name");
  let projectInputDescription = document.getElementById("description");
  let projectForm = document.getElementById("projects-form");

  let name = projectInputName.value;
  let description = projectInputDescription.value;
  let newProject = new project(name, description, []);
  projects.push(newProject);
  updateJSON(projects);
  projectForm.reset();
  console.log(projectsJSON);

  loadProjects();
}

// TO-DO: use JSON instead of projects array
export function loadProjects() {
  let projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    let li = document.createElement("li");
    let projectPageTitle = document.querySelector('.project-title')
    let projectPageDescription = document.querySelector('.project-description')
    let projectPageTasks = document.querySelector('.project-tasks')

    //clicking on project
    li.onclick = () => {
      projectPageTitle.innerHTML = projects[i].name;
      projectPageDescription.innerHTML = projects[i].description;
      projectPageTasks.innerHTML = "";
      
      console.log(li.innerHTML)

      for (let j = 0; j < projects[i].tasks.length; j++){
        
        let div = document.createElement("div")
        div.innerHTML = projects[i].tasks[j];
        projectPageTasks.appendChild(div);

        console.log(projects[i].tasks[j])
      }
    }
    li.innerHTML = projects[i].name;
    projectsList.appendChild(li);
    console.log(projects[i]);
    console.log(projectsJSON)

  }

  for (let i = 0; i < projects.length; i++) {
    console.log(
      ` "the id of the project is " ${i} "and "  ${projects[i].name}`
    );
  }

  // add functionality to projects:

}

function updateJSON (projects) {
  projectsJSON = JSON.stringify(projects);
};



updateJSON(projects);

console.log(projectsJSON);
