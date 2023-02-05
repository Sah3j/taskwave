import React, { useState } from 'react'
import './Navbar.css'

function Navbar({ setCurrentPage }) {

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("projects");

  return (
    <div>
        <header>
            <div className="logo">TaskWave</div>
            <div className='hamburger' onClick={ () => setIsActive(!isActive)}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <nav className={`nav-bar ${isActive ? 'active' : ''}`}>
                <ul>
                    <li 
                        onClick={() => {
                            setCurrentPage("projects");
                            setSelected("projects");
                        }}
                        className={selected === "projects" ? "active" : ""}>
                            Projects
                    </li>
                    <li 
                        onClick={() => {
                            setCurrentPage("my-projects");
                            setSelected("my-projects");
                        }}
                        className={selected === "my-projects" ? "active" : ""}>
                            My Projects
                    </li>
                    <li 
                        onClick={() => {
                            setCurrentPage("my-tasks");
                            setSelected("my-tasks");
                        }}
                        className={selected === "my-tasks" ? "active" : ""}>
                            My Tasks
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar