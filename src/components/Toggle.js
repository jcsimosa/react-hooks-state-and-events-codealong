import React, {useState}from "react";

function Toggle() {
  const [toggleButton, setToggleButton] = useState(false)

  const handleClick = (event)=> {
    setToggleButton(!toggleButton)
  }
  const color = toggleButton ? "red" : "white"

  return <button style={{background: color}} onClick={handleClick}> {toggleButton ? "ON" : "OFF" }</button>;
}

export default Toggle;
