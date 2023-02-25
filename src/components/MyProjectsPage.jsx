import React, { useState, useEffect } from 'react'
import Axios from "axios";
import ProjectCard from './ProjectCard';
import ProjectPage from './ProjectPage';
import './MyProjectsPage.css'

function MyProjectsPage() {

  const [listOfProjects, setListOfProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:5000/getProjects").then((response) => {
      setListOfProjects(response.data);
    })
  }, [])

  return (
    <div>
      <div className='projects-page-content'>
        <div className='my-projects-title'>
          <h1>John Doe - Projects</h1>
        </div>
        {selectedProject ? (
          <ProjectPage 
            ProjectId={selectedProject._id}
            ProjectName={selectedProject.name}
            SetSelectedProject={setSelectedProject}
            ProjectDescription={selectedProject.description}
            ProjectStartDate={selectedProject.startDate}
            ProjectEndDate={selectedProject.endDate}
            ProjectMembers={selectedProject.members}/>
        ) : (
          <div className='all-cards'>
            {listOfProjects.map((project) => {
              if(project.members.includes("John Doe")){
                return (
                  <>
                  <div onClick={() => setSelectedProject(project)}>
                    <ProjectCard 
                      ProjectName={project.name} 
                      ProjectDescription={project.description}
                      ProjectStartDate={project.startDate}
                      ProjectEndDate={project.endDate}
                      ProjectMembers={(project.members).length}
                      ProjectTasks={(project.tasks).length}/>
                  </div> 
                  </> 
                )
              }
            })}
        </div>
        )}
      </div>
    </div>
  )
}

export default MyProjectsPage