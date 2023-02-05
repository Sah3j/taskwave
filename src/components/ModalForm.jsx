import React, { useState } from 'react'
import SearchableInputBox from './SearchableInputBox'
import './ModalForm.css'

function ModalForm() {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [assignedTeam, setAssignedTeam] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Do something with the form data (projectName, projectDescription, assignedTeam)
      // for example, send it to the server
    };
  
    const handleTeamInput = (e) => {
      const value = e.target.value;
      // Use the value to search for team members
      // Add selected team members to assignedTeam
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="project-name">Project Name:</label>
          <input
            type="text"
            id="project-name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="project-description">Project Description:</label>
          <textarea
            id="project-description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="assign-team">Assign Team:</label>
          <SearchableInputBox />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    );
  };


export default ModalForm