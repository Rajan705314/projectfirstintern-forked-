import React, { useState } from "react";

function ClickableButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const input = document.getElementById("input-tag");
    if (input) {
      setCount(parseInt(input.value) + count);
    }
  };

  return (
    <div>
      <input id="input-tag" type="number" />
      <button onClick={handleClick}>Count</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default ClickableButton();
