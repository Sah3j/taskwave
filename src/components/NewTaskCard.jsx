import React, { useState } from 'react'
import NewTaskModal from './NewTaskModal';
import './NewTaskCard.css'

function NewTaskCard({ members, setMembers, ProjectId, SetStatusChanger, StatusChanger }) {

    const [modal, setModal] = useState(false);

    return (
        <div>
            <div className='new-task-card' onClick={() => setModal(!modal)}>
                <div className='card-content'>
                    <div className='plus-sign'>
                        +
                    </div>
                    <div className='card-description'>
                        <p>Add a new task</p>
                    </div>
                </div>
            </div>
            {modal && <NewTaskModal setModal={setModal} members={members} setMembers={setMembers} ProjectId={ProjectId} SetStatusChanger={SetStatusChanger} StatusChanger={StatusChanger}/>}
        </div>
  )
}

export default NewTaskCard