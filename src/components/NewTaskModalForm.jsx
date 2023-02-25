import React, { useState } from 'react'
import SearchableInputBox from './SearchableInputBox'
import './NewTaskModalForm.css'

function NewTaskModalForm({ members, setMembers, ProjectId, SetStatusChanger, StatusChanger }) {

    const [taskDescription, setTaskDescription] = useState("")
    const [taskDueDate, setTaskDueDate] = useState("")
    const [selectedMembers, setSelectedMembers] = useState([])

    async function handleSubmit(e) {
        e.preventDefault();
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newTask = {
          description: taskDescription,
          assignedTo: selectedMembers[0],
          dueDate: taskDueDate,
          status: "Not Started",
          projectId: ProjectId,
        }

        console.log(newTask.projectId);
      
        await fetch('https://task-wave.herokuapp.com/addNewTask', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
  
        setTaskDescription("");
        setTaskDueDate("");
        setSelectedMembers([]);
        SetStatusChanger(!StatusChanger);
      }

  return (
    <div>
        <form onSubmit={handleSubmit} className='new-task-modal-form'>
            <div>
            <label htmlFor="task-description">Task Description:</label>
            <textarea
                id="task-description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            </div>
            <div>
            <label for="task-due-date">Due date:</label>
            <input type="date" id="task-due-date" name="task-due-date"
              value={taskDueDate}
              onChange={(e) => setTaskDueDate(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="assign-member">Assign Member:</label>
            {selectedMembers.length === 0 ? (
                <SearchableInputBox selectedMembers={selectedMembers} setSelectedMembers={setSelectedMembers} members={members} setMembers={setMembers}/>
            ) : (
                <p>{selectedMembers[0]}</p>
            )} 
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default NewTaskModalForm