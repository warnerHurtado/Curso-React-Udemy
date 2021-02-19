import React, { useRef } from "react";
import "../02-useEffect/Effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus screem</h1>

      <hr />
      <input ref={inputRef} className="form-control" placeholder="Su nombre" />

      <button className="btn btn-outline-primary mt-" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
