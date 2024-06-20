import React, { useState, useMemo } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  //calculate the square of the count using useMemo
  const squaredCount = useMemo(() => {
    console.log("Calculating squared count...");
    return count * count;
  }, [count]);

  //setCounter Function
  function counterSet() {
    setCount((prevCount) => prevCount + 1);
  }
  function decreaseSet() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h1>Detail Component</h1>
      <p>Count:{count}</p>
      <p>Squared Count:{squaredCount}</p>
      <button onClick={counterSet}>Increment Count</button>
      <button onClick={decreaseSet}>Decrease Count</button>
    </div>
  );
};
export default MyComponent;
