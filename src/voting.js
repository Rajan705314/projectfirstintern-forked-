import { useState } from "react";

const state = useState();
let count = 1;
function vote() {
  const [count, setCount] = useState(50);
  const IncNum = () => {
    setCount(100);
    console.log("clicked " + count++);
  };
  return (
    <>
      <h1> {count} </h1>
      <button onClick={IncNum}> Click Me </button>
    </>
  );
}

export default vote();
