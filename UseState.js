import React, { useState } from "react";

function HooksuseState() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1 style={{ color: "lightBlue" }}>Counter | useState</h1>
      <h1>Counter : {count} </h1>
      <button onClick={increase}>Click to Increase</button>
      <br />
      <br />
      <button onClick={decrease}>Click to Decrease</button>
    </div>
  );
}

export default HooksuseState;

// import React, { useState } from "react";

// function Bike() {
//   const [bike, setBike] = useState({
//     brand: "Pulsar",
//     model: "Dominor-220",
//     year: "2023",
//     color: "White & red",
//   });
//   const updateColor = () => {
//     setBike((previousState) => {
//       return { ...previousState, color: "black" };
//     });

//     return (
//       <>
//         <h1>Bikes</h1>
//         <p>
//           My favourite bike is {bike.brand} {bike.model}
//           It is a {bike.color} from {bike.year}.
//         </p>
//         <button onClick={updateColor}>Black Color</button>
//       </>
//     );
//   };
// }
// export default Bike;
