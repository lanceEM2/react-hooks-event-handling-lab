// Code Keypad Component Here
// Using onChange

import React from "react";

function Keypad() {
  function handleKeypadInput(event) {
    console.log('Entering password...');
  }

  return (
    <div>
      <input
        type="password"
        onChange={handleKeypadInput}
      />
    </div>
  );
}

export default Keypad;
