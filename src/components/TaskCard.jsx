import React, { useEffect, useState } from 'react'
import './TaskCard.css'
import axios from 'axios';

function TaskCard({ TaskDescription, TaskDueDate, TaskMember,  TaskStatus, TaskId, ProjectId, SetStatusChanger, StatusChanger }) {

    async function handleStatusChange(e) {
        const status = e.target.value
        try {
            const res = await axios.put(`https://task-wave.herokuapp.com/updateTaskStatus/${ProjectId}/${TaskId}`, { status });
            console.log(res.data); // log the updated task
          } catch (err) {
            console.error(err);
          }
        SetStatusChanger(!StatusChanger)
    }

  return (
    <div>
            <div className='task-card'>
                <div className='task-card-content'>
                    <div className='task-card-description'>
                        {TaskDescription}
                    </div>
                    <div className='task-card-date'>
                        {TaskDueDate}
                    </div>
                    <div className='task-footer'>
                        <div className='task-member'>
                            {TaskMember}
                        </div>
                        <div className='status-changer'>
                            <select onChange={(e) => {handleStatusChange(e)}}>
                                <option value="none" disabled selected>Change status</option>
                                <option value="Not Started">Not Started</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TaskCard