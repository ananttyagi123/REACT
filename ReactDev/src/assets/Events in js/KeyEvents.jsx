
import React from 'react';

const  KeyButton = () => {
  const displayEventInformation = () => {
   console.log("key pressed")
  };

  const handleKeyDown = (event) => {
    document.addEventListener('keydown',{})
    if (event.key === 'Enter') {
      displayEventInformation();
    }
  };

  return (
   <button id="eventInfo" onKeyDown={handleKeyDown}></button>
  );
};

export default KeyButton;
