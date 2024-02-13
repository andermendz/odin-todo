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

let projects = [];

let projectsJSON = [];

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
    li.innerHTML = projects[i].name;
    projectsList.appendChild(li);
    console.log(projects[i].name);
  }

  for (let i = 0; i < projects.length; i++) {
    console.log(
      ` "the id of the project is " ${i} "and "  ${projects[i].name}`
    );
  }
}

const updateJSON = (projects) => {
  projectsJSON = JSON.stringify(projects);
};

updateJSON(projects);

console.log(projectsJSON);
