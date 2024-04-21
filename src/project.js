import { createTask } from "./tasks";

// PROJECT OBJECT DECLARED
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

// TODO: CHANGE STATUS OF TASK / DONE - UNDONE  and DELETE PROJECTS, CHANGE NAME,ETC. // REFACTORIZE CODE
let projects = localStorage.getItem("projectsStorage")
  ? JSON.parse(localStorage.getItem("projectsStorage"))
  : [];

loadProjects();

export function createProject() {
  let projectInputName = document.getElementById("name");
  let projectInputDescription = document.getElementById("description");
  let projectForm = document.getElementById("projects-form");

  let name = projectInputName.value;
  let description = projectInputDescription.value;
  let newProject = new project(name, description, []);
  projects.push(newProject);
  localStorage.setItem("projectsStorage", JSON.stringify(projects));
  console.log(JSON.stringify(projects));

  projectForm.reset();

  loadProjects();
}

//MAIN ELEMENTS
let homeMenu = document.querySelector(".home-menu");

let projectCreateSection = document.querySelector(".project-create")
let projectContentPage = document.querySelector(".project-content");

// PROJECTS LOADING
export function loadProjects() {
  let projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    function loadSelectedProject() {
      let projectContent = document.querySelector(".project-content");
      projectCreateSection.style.display = "none";
      function cleanProjectInfo() {
        projectContent.innerHTML = "";
      }

      cleanProjectInfo();

      projectContent.innerHTML = `   <div class="project-content-elements">
    <div class="project-content-elements-title"></div>
    <div class="project-description"></div>
  </div>
  <div class="project-content-elements" id="project-tasks"></div>
`;
      // HOME MENU

      homeMenu.onclick = () => {
        projectCreateSection.style.display = "flex";
        cleanProjectInfo();
      };

      let projectPageTitle = projectContent.querySelector(
        ".project-content-elements-title"
      );
      let projectPageDescription = projectContent.querySelector(
        ".project-description"
      );
      let projectPageTasks = projectContent.querySelector("#project-tasks");

      projectPageTitle.innerHTML = projects[i].name;
      projectPageDescription.innerHTML = projects[i].description;
      projectPageTasks.innerHTML = "";

      console.log(li.innerHTML);

      // TASK INPUT
      let taskInputSection = document.createElement("div");
      taskInputSection.classList.add("newtask-input-container");
      taskInputSection.innerHTML = ` <input id="newtask-input" type="text">
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
      let newTaskInput = document.getElementById("newtask-input");
      let saveNewTaskButton = document.querySelector(".save-newtask");
      saveNewTaskButton.style.display = "none";

      newTaskInput.oninput = function () {
        if (newTaskInput.value.length > 0) {
          console.log("Task Name" + newTaskInput.value);
          saveNewTaskButton.style.display = "flex";
        } else {
          console.log("No Task Name");
          saveNewTaskButton.style.display = "none";
        }
      };

      taskAdd.onclick = () => { };

      // TASK ADDING TO PROJECT
      saveNewTaskButton.onclick = () => {
        console.log(newTaskInput.value);
        let newTaskObject = createTask(newTaskInput.value, "incomplete");
        projects[i].tasks.push(newTaskObject);

        localStorage.setItem("projectsStorage", JSON.stringify(projects));
        loadSelectedProject();
        console.log(projects);
      };

      // TASKS STRUCTURE
      console.log(projects[i].tasks);
      // PROJECT TASK LOADING
      for (let j = 0; j < projects[i].tasks.length; j++) {
        let div = document.createElement("div");
        div.innerHTML = `
    
        <div class="task-content">
        <div class="task-text">${projects[i].tasks[j].name}</div>
        <div class= " task-options">
        <input type="checkbox">
        <span class="material-symbols-outlined delete-task">
delete
</span>
        </div>
        </div>
      
       `;

        // DELETE TASK

        let deleteTaskButton = div.querySelector(".delete-task");
        deleteTaskButton.onclick = () => {
          projects[i].tasks.splice(j, 1);
          console.log(projects[i].tasks);
          localStorage.setItem("projectsStorage", JSON.stringify(projects));
          loadSelectedProject();
        };

        projectPageTasks.appendChild(div);
      }

      projectContentPage.style.display = "flex";
    }

    // TODO: reduce redundance
    let li = document.createElement("li");

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
}
