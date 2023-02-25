import React from 'react'
import './ProjectCard.css'
import { BsFillPersonFill } from 'react-icons/bs';
import { HiClipboardDocument } from 'react-icons/hi2';
import { BsDot } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl'

function ProjectCard({ ProjectName, ProjectDescription, ProjectStartDate, ProjectEndDate, ProjectMembers, ProjectTasks }) {
  return (
    <div>
            <div className='project-card' onClick={() => setModal(!modal)}>
                <div className='project-card-content'>
                    <div className='project-card-header'>
                        <div className='project-name'>
                            <h2>{ProjectName}</h2>
                        </div>
                        <div className='project-card-dates'>
                            <SlCalender/>
                            <p>{ProjectStartDate}</p>
                            <BsDot />
                            <p>{ProjectEndDate}</p>
                        </div>
                        <div className='project-description'>
                            <p>{ProjectDescription}</p>
                        </div>
                    </div>
                    <div className='project-card-footer'>
                        <div className='project-assigned-members'>
                            <BsFillPersonFill/>
                            <BsDot />
                            <p>{ProjectMembers}</p>
                        </div>
                        <div className='project-tasks'>
                            <HiClipboardDocument/>
                            <BsDot />
                            <p>{ProjectTasks}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard