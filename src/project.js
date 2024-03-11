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

// TODO: ADD LOCAL STORAGE API with retrieving

let projects = localStorage.getItem("projectsJSON") ? JSON.parse(localStorage.getItem("projectsJSON")) : [] ;








loadProjects();



export function createProject() {
  let projectInputName = document.getElementById("name");
  let projectInputDescription = document.getElementById("description");
  let projectForm = document.getElementById("projects-form");

  let name = projectInputName.value;
  let description = projectInputDescription.value;
  let newProject = new project(name, description, []);
  projects.push(newProject);

  projectForm.reset();


  loadProjects();
}

// TO-DO: use JSON instead of projects array
export function loadProjects() {
  let projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    function loadSelectedProject() {

      // HOME MENU

      let homeMenu = document.querySelector(".home-menu")
      let projectContentPage = document.querySelector(".project-content")
      homeMenu.onclick = () => {
        projectContentPage.style.display = "none";
      }
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
      saveNewTaskButton.style.display = 'none';

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

      // TASK ADDING TO PROJECT
      saveNewTaskButton.onclick = () => {
        console.log(newTaskInput.value)
        let newTaskObject = createTask(newTaskInput.value, 'incomplete')
        projects[i].tasks.push(newTaskObject);

        loadSelectedProject()
        console.log(projects)
      };

      // TASKS STRUCTURE
      console.log(projects[i].tasks);
      for (let j = 0; j < projects[i].tasks.length; j++) {
        let div = document.createElement("div");
        div.innerHTML = `
    
        <div class="task-content">
        <div class="task-text">${projects[i].tasks[j].name}</div>
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

      projectContentPage.style.display = "flex";
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
   
  }

  for (let i = 0; i < projects.length; i++) {
    console.log(
      ` "the id of the project is " ${i} "and "  ${projects[i].name}`
    );
  }

  // add functionality to projects:
}


