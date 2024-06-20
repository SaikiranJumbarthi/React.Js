// import { useState, useEffect } from "react";

// function useEffect() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const increaseC1 = () => {
//     setCount1(count1 + 1);
//   };
//   const increaseC2 = () => {
//     setCount2(count2 + 2);
//   };

//   useEffect(() => {
//     console.log(count1 + "useEffect");
//   }, [count1]);
// }

// export default useEffect;

import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    /*   side effect code goes here 
         this function will run after every
         render of the component */
    // CLean-up function (optional)
    return () => {
      /* this function will run before the component unmounts or brfore the next re-render, depending on the dependencies  */
    };
  }, [dependency1, dependency2]);

  return <div></div>;
}
