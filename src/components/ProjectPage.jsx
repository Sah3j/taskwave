import React, { useState, useEffect } from 'react'
import './ProjectPage.css'
import Tasks from './Tasks'
import Axios from "axios";

function ProjectPage({ ProjectName, SetSelectedProject, ProjectDescription, ProjectStartDate, ProjectEndDate, ProjectMembers, ProjectId }) {

    const [members, setMembers] = useState(ProjectMembers)

  return (
    <div className='project-page'>
        <div className='project-page-header'>
            <button onClick={() => SetSelectedProject(null)}>Back</button>
            <div className='project-page-title'>
                <h1>{ProjectName}</h1>
            </div>
            <div className='project-page-dates'>
                <p>Start Date: {ProjectStartDate} End Date: {ProjectEndDate}</p>
            </div>
            <div className='project-page-description'>
                <p>{ProjectDescription}</p>
            </div>
            <div>
                Members:
                <div className='project-page-members'>
                    {ProjectMembers.map((member) => {
                        return (
                            <div className='project-page-member'>
                                <p>{member}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='project-page-tasks'>
            <Tasks members={members} setMembers={setMembers} ProjectId={ProjectId} />
        </div>
    </div>
  )
}

export default ProjectPage