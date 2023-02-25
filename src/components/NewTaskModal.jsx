import React, { useState } from 'react'
import NewTaskModalForm from './NewTaskModalForm'
import './NewTaskModal.css'

function NewTaskModal({ setModal, members, setMembers, ProjectId, SetStatusChanger, StatusChanger }) {

    return (
        <div className='modal'>
            <div className='overlay' onClick={() => setModal(false)}></div>
            <div className='modal-container'>
                <div className='modal-content'>
                    <h2>Create a new task</h2>
                    <NewTaskModalForm members={members} setMembers={setMembers} ProjectId={ProjectId} SetStatusChanger={SetStatusChanger} StatusChanger={StatusChanger}/>
                    <button className='close-modal' onClick={() => setModal(false)}>
                        x
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewTaskModal