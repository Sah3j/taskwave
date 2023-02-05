import { useState } from "react"
import Navbar from "./components/Navbar"
import ProjectsPage from "./components/ProjectsPage"
import MyProjectsPage from "./components/MyProjectsPage"
import MyTasksPage from "./components/MyTasksPage"
import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState("projects");

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage}/>
      {currentPage === "projects" && <ProjectsPage />}
      {currentPage === "my-projects" && <MyProjectsPage />}
      {currentPage === "my-tasks" && <MyTasksPage />}
    </div>
  )
}

export default App
