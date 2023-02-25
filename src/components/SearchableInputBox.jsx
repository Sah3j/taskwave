import React, { useState } from 'react'
import './SearchableInputBox.css'

function SearchableInputBox({ selectedMembers, setSelectedMembers, members, setMembers }) {

    const [searchTerm, setSearchTerm] = useState('');
    //const [selectedMembers, setSelectedMembers] = useState([]);
    const filteredMembers = members.filter(
        member => member.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleMembersSelection = (member) => {
        setSelectedMembers([...selectedMembers, member]);
        setMembers(prevMembers => prevMembers.filter(m => m !== member));
        setSearchTerm('');
    }

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onClick={() => setSearchTerm('')}
            />
            {(searchTerm) ? (
                <ul className='input-dropdown'>
                    {filteredMembers.map(member => (
                        <li key={member} onClick={() => handleMembersSelection(member)}>
                            {member}
                        </li>
                    ))}
                </ul>
            ) : (
                <ul className='input-dropdown'>
                    {members.map(member => (
                        <li key={member} onClick={() => handleMembersSelection(member)}>
                            {member}
                        </li>
                    ))}
                </ul>
            )}
            {selectedMembers.length > 0 && (
                <div>
                    <label>Selected Members:</label>
                    <ul>
                        {selectedMembers.map(member => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SearchableInputBox