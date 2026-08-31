import React, { useState } from "react";
import "../App.css";

function MyState() {
  const [state, setState] = useState(0);
  const [color, setColor] = useState("White");

  const handleLike = () => {
    setState(state + 1)
    setColor("Green")
  }
  
  const handleDislike = () => {
    setState(state - 1)
    setColor("orange");
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{state}</h1>
      <button onClick={handleLike}>👍Like</button>
      <button onClick={handleDislike}>👎Dislike</button>
    </div>
  );
}

export default MyState;
