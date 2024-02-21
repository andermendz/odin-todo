import { createTask } from "./tasks";

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
  {
    name: "Project 1",
    description: "This is project 1",
    tasks: ["Task 1.1", "Task 1.2"],
  },
  {
    name: "Project 2",
    description: "This is project 2",
    tasks: ["Task 2.1", "Task 2.2"],
  },
  {
    name: "Project 3",
    description: "This is project 3",
    tasks: ["Task 3.1", "Task 3.2"],
  },
  {
    name: "Project 4",
    description: "This is project 4",
    tasks: ["Task 4.1", "Task 4.2"],
  },
  {
    name: "Project 5",
    description: "This is project 5",
    tasks: ["Task 5.1", "Task 5.2"],
  },
  {
    name: "Project 6",
    description: "This is project 6",
    tasks: ["Task 6.1", "Task 6.2"],
  },
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
    function loadSelectedProject() {
      projectPageTitle.innerHTML = projects[i].name;
      projectPageDescription.innerHTML = projects[i].description;
      projectPageTasks.innerHTML = "";

      console.log(li.innerHTML);

      // TASK INPUT
      let taskInputSection = document.createElement("div");
      taskInputSection.classList.add("newtask-inputsection");
      taskInputSection.innerHTML = ` <input class="newtask-input" type="text">
       <div class="save-newtask">   <span class="material-symbols-outlined">
       save
       </span></div>
    
       `;

      //TASK ADDING
      let taskAdd = document.createElement("div");

      taskAdd.innerHTML = `    <div class = "add-task"> <span class="material-symbols-outlined">
      add
      </span></div>`;

      projectPageTasks.appendChild(taskAdd);
      projectPageTasks.appendChild(taskInputSection);
      let newTaskInput = document.querySelector(".newtask-input");
      let saveNewTaskButton = document.querySelector(".save-newtask");

      newTaskInput.oninput = function () {
        if (newTaskInput.value.length > 0) {
          console.log("Task Name" + newTaskInput.value);
          saveNewTaskButton.style.display = "flex";

        } else {
          console.log("No Task Name");
          saveNewTaskButton.style.display = "none";
         
        }
      };
      taskAdd.onclick = () => {
       
      };

      saveNewTaskButton.onclick = () => {
        console.log(newTaskInput.value)
        let newTask = createTask(newTaskInput.value);
        projects[i].tasks.push(newTaskInput.value);
        loadSelectedProject()
      };

      // TASKS STRUCTURE
      console.log(projects[i].tasks);
      for (let j = 0; j < projects[i].tasks.length; j++) {
        let div = document.createElement("div");
        div.innerHTML = `
    
        <div class="task-content">
        <div class="task-text">${projects[i].tasks[j]}</div>
        <div class= " task-options">
        <input type="checkbox">
        <span class="material-symbols-outlined">
delete
</span>
        </div>
        </div>
      
       `;

        projectPageTasks.appendChild(div);

        console.log(projects[i].tasks[j]);
      }
    }
    let li = document.createElement("li");
    let projectPageTitle = document.querySelector(".project-title");
    let projectPageDescription = document.querySelector(".project-description");
    let projectPageTasks = document.querySelector(".project-tasks");

    //clicking on project
    li.onclick = () => {
      loadSelectedProject();
    };

    li.innerHTML = projects[i].name;
    projectsList.appendChild(li);
    console.log(projects[i]);
    console.log(projectsJSON);
  }

  for (let i = 0; i < projects.length; i++) {
    console.log(
      ` "the id of the project is " ${i} "and "  ${projects[i].name}`
    );
  }

  // add functionality to projects:
}

function updateJSON(projects) {
  projectsJSON = JSON.stringify(projects);
}

updateJSON(projects);

console.log(projectsJSON);
