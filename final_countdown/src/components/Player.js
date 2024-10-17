import { useState, useRef } from "react";

export default function Player() {
    const  nameInput = useRef();
    const [playerName, setPlayerName] = useState(null);

    function handleClick() {
        setPlayerName(nameInput.current.value);
        // This breaks some ideas of React by directly updating the DOM, but in this case
        playerName.current.value = "";
    }

    return (
      <section id="player">
        {/* Return playerName if playerName has value, else unknown entity */}
        <h2>Welcome {playerName ?? "unknown entity"}</h2>
        <p>
          <input ref={nameInput} type="text" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    );
  }
  