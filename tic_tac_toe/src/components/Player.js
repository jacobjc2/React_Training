import React, { useState } from 'react'

const Player = ({initialName, symbol, isActive, onChangeName}) => {
    const [ playerName, setPlayerName ] = useState(initialName); 
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    // event will be passed automatically because the function is passed to an event handler
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = isEditing ? 
    <input type="text" required value={playerName} onChange={handleChange} /> :
    <span className="player-name">{playerName}</span>;

  return (
    <li className={isActive ? "active" : undefined}>
        <span className="player">
            { editablePlayerName }
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button> 
    </li>
  )
}

export default Player