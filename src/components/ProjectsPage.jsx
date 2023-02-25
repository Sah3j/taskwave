import React, { useEffect, useState } from 'react'
import NewProjectCard from './NewProjectCard'
import ProjectCard from './ProjectCard'
import './ProjectsPage.css'
import Axios from "axios";
import ProjectPage from './ProjectPage';

function ProjectsPage() {

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
            <NewProjectCard />
            {listOfProjects.map((project) => {
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
            })}
        </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage