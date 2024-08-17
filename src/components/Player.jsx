import { useState } from "react";
import React from "react";
import '../index.css';

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setCurrentName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
    }

    const handleNameChange = (e) => {
        setCurrentName(e.target.value);
    }

    let editingPlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing){
        editingPlayerName = <input type="text" required value={playerName} onChange={handleNameChange}/>;
    }

    return <>
     <li className={isActive? 'active' : undefined}>
        <span className="player">
            {editingPlayerName}
        </span>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
}