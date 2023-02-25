import React, { useEffect, useState } from 'react'
import './Tasks.css'
import NewTaskCard from './NewTaskCard'
import TaskCard from './TaskCard';
import axios from 'axios';

function Tasks({ members, setMembers, ProjectId }) {

  const [listOfTasks, setListOfTasks] = useState([]);
  const [statusChanger, setStatusChanger] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://task-wave.herokuapp.com/getTasks/${ProjectId}`,
    }).then((response) => {
      console.log(response.data.tasks)
      setListOfTasks(response.data.tasks);
    });
  }, [statusChanger]);

  useEffect(() => {
    document.querySelector('.tasks-not-started').classList.add('show');
  }, []);

  const handleStatusChange = (e) => {
    const value = e.target.value;
    switch(value) {
      case 'Not Started':
        document.querySelector('.tasks-not-started').classList.add('show');
        document.querySelector('.tasks-in-progress').classList.remove('show');
        document.querySelector('.tasks-completed').classList.remove('show');
        break;
      case 'In Progress':
        document.querySelector('.tasks-not-started').classList.remove('show');
        document.querySelector('.tasks-in-progress').classList.add('show');
        document.querySelector('.tasks-completed').classList.remove('show');
        break;
      case 'Completed':
        document.querySelector('.tasks-not-started').classList.remove('show');
        document.querySelector('.tasks-in-progress').classList.remove('show');
        document.querySelector('.tasks-completed').classList.add('show');
        break;
      default:
        document.querySelector('.tasks-not-started').classList.remove('show');
        document.querySelector('.tasks-in-progress').classList.remove('show');
        document.querySelector('.tasks-completed').classList.remove('show');
        break;
    }
  }

  return (
    <div className='tasks-columns'>
        <div className='tasks-status-selecter'>
          <select onChange={(e) => {handleStatusChange(e)}}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className='tasks-not-started'>
            <h3>Not Started</h3>
            <NewTaskCard members={members} setMembers={setMembers} ProjectId={ProjectId} SetStatusChanger={setStatusChanger} StatusChanger={statusChanger}/>
            {listOfTasks.map((task) => {
              if(task.status === 'Not Started'){
                return (
                  <>
                    <TaskCard
                      TaskDescription = {task.description}
                      TaskDueDate = {task.dueDate}
                      TaskMember = {task.assignedTo}
                      TaskStatus = {task.status}
                      TaskId = {task._id}
                      ProjectId = {ProjectId}
                      SetStatusChanger = {setStatusChanger}
                      StatusChanger = {statusChanger} />
                  </>
                )
              }
            })}
        </div>
        <div className='tasks-in-progress'>
            <h3>In Progress</h3>
            {listOfTasks.map((task) => {
              if(task.status === 'In Progress'){
                return (
                  <>
                    <TaskCard
                      TaskDescription = {task.description}
                      TaskDueDate = {task.dueDate}
                      TaskMember = {task.assignedTo}
                      TaskStatus = {task.status}
                      TaskId = {task._id}
                      ProjectId = {ProjectId}
                      SetStatusChanger = {setStatusChanger}
                      StatusChanger = {statusChanger} />
                  </>
                )
              }
            })}
        </div>
        <div className='tasks-completed'>
            <h3>Completed</h3>
            {listOfTasks.map((task) => {
              if(task.status === 'Completed'){
                return (
                  <>
                    <TaskCard
                      TaskDescription = {task.description}
                      TaskDueDate = {task.dueDate}
                      TaskMember = {task.assignedTo}
                      TaskStatus = {task.status}
                      TaskId = {task._id}
                      ProjectId = {ProjectId}
                      SetStatusChanger = {setStatusChanger}
                      StatusChanger = {statusChanger} />
                  </>
                )
              }
            })}
        </div>
    </div>
  )
}

export default Tasks