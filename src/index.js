 import styles from './styles.css'
 import { createProject } from './project';
//  import projects from './project.js'

let createProjectButton = document.getElementById('create-project')


createProjectButton.onclick = (e) => {
e.preventDefault()
createProject()

}