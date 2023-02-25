import React, { useState } from 'react'
import SearchableInputBox from './SearchableInputBox'
import './ModalForm.css'

function ModalForm() {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectStartDate, setProjectStartDate] = useState("");
    const [projectEndDate, setProjectEndDate] = useState("");
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [members, setMembers] = useState([
      'Alice Johnson', 'Bob Brown', 'Claire Davis', 'David Lee', 'Emily Wilson',  'Frank Miller', 'Grace Chen', 'Henry Zhang', 'Isabella Kim', 'Jack Wang',  'Katie Robinson', 'Liam Taylor', 'Mia Davis', 'Noah Wilson', 'Olivia Lee',  'Peter Chen', 'Quinn Jones', 'Rachel Brown', 'Sam Kim', 'Tom Wilson', 'John Doe'
    ]);
  
    async function handleSubmit(e) {
      e.preventDefault();
    
      // When a post request is sent to the create url, we'll add a new record to the database.
      const newProject = {
        name: projectName,
        description: projectDescription,
        assignedMembers: selectedMembers,
        startDate: projectStartDate,
        endDate: projectEndDate,
      }

      console.log(projectStartDate);
    
      await fetch("https://task-wave.herokuapp.com/createproject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      })
      .catch(error => {
        window.alert(error);
        return;
      });

      setProjectName("");
      setProjectDescription("");
      setSelectedMembers([]);
      setProjectStartDate("");
      setProjectEndDate("");
    }
   
  
    const handleTeamInput = (e) => {
      const value = e.target.value;
      // Use the value to search for team members
      // Add selected team members to assignedTeam
    };
  
    return (
      <form onSubmit={handleSubmit} className='new-project-form'>
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
        <div className='project-dates'>
          <div>
            <label for="start">Start date:</label>
            <input type="date" id="start" name="project-start"
              className='project-datepicker'
              value={projectStartDate}
              onChange={(e) => setProjectStartDate(e.target.value)}/>
          </div>
          <div>
            <label for="end">End date:</label>
            <input type="date" id="end" name="project-end"
              value={projectEndDate}
              onChange={(e) => setProjectEndDate(e.target.value)}/>
          </div>
        </div>
        <div>
          <label htmlFor="assign-team">Assign Team:</label>
          <SearchableInputBox selectedMembers={selectedMembers} setSelectedMembers={setSelectedMembers} members={members} setMembers={setMembers}/>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    );
  };


export default ModalForm