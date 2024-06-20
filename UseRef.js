// import React, { useRef } from "react";

// function MutableValue() {
//   const counterRef = useRef(0);

//   const incrementCounter = () => {
//     counterRef.current += 1;
//     console.log("Counter:", counterRef.current);
//   };
//   return (
//     <div>
//       <p>Counter:{counterRef.current}</p>
//       <button onClick={incrementCounter}>Increment</button>
//     </div>
//   );
// }
// export default MutableValue;

import React, { useRef, useEffect } from "react";

function MutableValue() {
  const CounterRef = useRef(0);

  function PrevValueRef({ Value }) {
    const PrevValueRef = useRef();

    useEffect(() => {
      PrevValueRef.current = Value;
    }, [Value]);
  }

  const incrementCounter = () => {
    CounterRef.current += 1;
    console.log("Counter:", CounterRef.current);
  };

  return (
    <div>
      <p>Counter: {CounterRef.current}</p>
      <button onclick={incrementCounter}>Increment</button>
      <h1>Current Value:{Value}</h1>
      <h1>PreviousValue:{PrevValueRef.current}</h1>
    </div>
  );
}
export default MutableValue;

//soring Previous Values
// import React, { useRef, useEffect } from "react";

// function PrevValueRef({ value }) {
//   const prevValueRef = useRef();

//   useEffect(() => {
//     prevValueRef.current = value;
//   }, [value]);

//   return (
//     <div>
//       <h1>Current Value:{value}</h1>
//       <h1>PreviousValue:{prevValueRef.current}</h1>
//     </div>
//   );
// }
// export default PrevValueRef;
