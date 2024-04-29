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

// TODO:   DELETE PROJECTS, CHANGE NAME,ETC. // FORMS VALIDATION, SEPARATE PROJECT TASKS AND NOTES

//MAIN DOCUMENT ELEMENTS
let homeMenu = document.querySelector(".home-menu");

let projectCreateSection = document.querySelector(".project-create");
let projectContentPage = document.querySelector(".project-content");

// DECLARES STORAGE VARIABLE
let projects = localStorage.getItem("projectsStorage")
  ? JSON.parse(localStorage.getItem("projectsStorage"))
  : [];

// UPDATE STORAGE FUNCTION
function updateStorage() {
  localStorage.setItem("projectsStorage", JSON.stringify(projects));
}

loadProjects();

// CREATE PROJECT FUNCTION
export function createProject() {
  let projectInputName = document.getElementById("name");
  let projectInputDescription = document.getElementById("description");
  let projectForm = document.getElementById("projects-form");

  let name = projectInputName.value;
  let description = projectInputDescription.value;
  let newProject = new project(name, description, []);
  projects.push(newProject);
  updateStorage();
  console.log(JSON.stringify(projects));

  projectForm.reset();

  loadProjects();
}

// PROJECTS LOADING
export function loadProjects() {
  let projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    function loadSelectedProject() {
      // DECLARES PROJECT SECTION
      let projectContent = document.querySelector(".project-content");

      function cleanProjectInfo() {
        projectContent.innerHTML = "";
      }

      projectCreateSection.style.display = "none";
      cleanProjectInfo();

      projectContent.innerHTML = `  
  <div class="project-content-elements" id="project-info">
    <div class="project-content-elements-title"></div>
    <div class="project-description"></div>
  </div>
  <div class="project-content-elements" id="project-tasks"></div>



  <div class="project-content-elements" id="project-notes-container">
  
    <div class="project-content-elements-title">Notes</div>
    <div class="project-content-elements" id="project-notes">
    
    <div class="project-note-container">
    dadsadsa
    </div>

    </div>

 

 

  </div>
`;
      // HOME MENU FUNCTIONS

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
      let projectPageNotes = projectContent.querySelector("#project-notes")

      projectPageTitle.innerHTML = projects[i].name;
      projectPageDescription.innerHTML = projects[i].description;
      projectPageTasks.innerHTML = "";

      console.log(li.innerHTML);

      // TASK INPUT SECTION
      let taskInputSection = document.createElement("div");
      taskInputSection.classList.add("newtask-input-container");
      taskInputSection.innerHTML = ` 
      <div class="task-inputs">    
       <input id="newtask-input-text" type="text" required>

       <div>

       <input id="newtask-duedate" type="date" required>

       <select class="priority-selector"name="priority" id="newtask-priority" required>
       <option selected disabled hidden> Select A Priority </option>
         <option value="critical">Critical Priority</option>
         <option value="high">High Priority</option>
         <option value="medium">Medium Priority</option>
         <option value="low">Low Priority</option>
         <option value="non-priority">Not A Priority</option>
       </select>

       </div>
     
      </div>
 
       <div class="save-newtask"> <div> <span class="material-symbols-outlined">
       save
       </span></div>  </div> 
    
       `;

      //TASK ADDING SECTION SCRIPT
      let taskAdd = document.createElement("div");

      taskAdd.innerHTML = `<div class = "add-task"> <span class="material-symbols-outlined">
      add
      </span></div>`;

      let newTaskInput = taskInputSection.querySelector("#newtask-input-text");
      let newTaskDueDate = taskInputSection.querySelector("#newtask-duedate")
      let newTaskPriority = taskInputSection.querySelector("#newtask-priority")
      let saveNewTaskButton = taskInputSection.querySelector(".save-newtask");



      // newTaskInput.oninput = function () {
      //   if (newTaskInput.value.length > 0) {
      //     console.log("Task Name" + newTaskInput.value);
   
      //     saveNewTaskButton.style.display = "flex";
      //   } else {
      //     console.log("No Task Name");
      //     saveNewTaskButton.style.display = "none";
      //   }
      // };

      projectPageTasks.appendChild(taskAdd);
      projectPageTasks.appendChild(taskInputSection);

      taskAdd.onclick = () => {};

      // TASK ADDING TO PROJECT
      saveNewTaskButton.onclick = () => {
        console.log(newTaskInput.value);
        console.log(newTaskDueDate.value)
        console.log(newTaskPriority.value)
        let newTaskObject = createTask(newTaskInput.value, "incomplete", newTaskDueDate.value, newTaskPriority.value );
        projects[i].tasks.push(newTaskObject);

        updateStorage();
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
        <input type="checkbox" class="checkbox" ${
          projects[i].tasks[j].status == "done" ? "checked" : ""
        }>
        <span class="material-symbols-outlined delete-task">delete</span>
        </div>
        </div>
      
       `;

        // DELETE TASK FROM PROJECT

        let deleteTaskButton = div.querySelector(".delete-task");
        deleteTaskButton.onclick = () => {
          projects[i].tasks.splice(j, 1);
          console.log(projects[i].tasks);
          updateStorage();
          loadSelectedProject();
        };

        let taskCheckbox = div.querySelector(".task-options>.checkbox");
        taskCheckbox.onclick = () => {
          if (projects[i].tasks[j].status == "incomplete") {
            projects[i].tasks[j].status = "done";
          } else if (projects[i].tasks[j].status == "done") {
            projects[i].tasks[j].status = "incomplete";
          }
          console.log(projects[i].tasks);
          updateStorage();
          console.log(`Status of task: ${projects[i].tasks[j].name} changed`);
        };

        projectPageTasks.appendChild(div);
      }

      projectContentPage.style.display = "grid";
    }

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
