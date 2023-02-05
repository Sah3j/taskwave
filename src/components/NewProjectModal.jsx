import React, { useState } from 'react'
import ModalForm from './ModalForm'
import './NewProjectModal.css'

function NewProjectModal({ setModal }) {

    return (
        <div className='modal'>
            <div className='overlay' onClick={() => setModal(false)}></div>
            <div className='modal-container'>
                <div className='modal-content'>
                    <h2>Create new project</h2>
                    <ModalForm/>
                    <button className='close-modal' onClick={() => setModal(false)}>
                        x
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewProjectModal