import React, { useState } from 'react'
import NewProjectModal from './NewProjectModal';
import './NewProjectCard.css'

function NewProjectCard() {

    const [modal, setModal] = useState(false);

    return (
        <div>
            <div className='card' onClick={() => setModal(!modal)}>
                <div className='card-content'>
                    <div className='plus-sign'>
                        +
                    </div>
                    <div className='card-description'>
                        <p>create new project</p>
                    </div>
                </div>
            </div>
            {modal && <NewProjectModal setModal={setModal}/>}
        </div>
  )
}

export default NewProjectCard