//UseState :
// import React,{useState} from 'react'

// function ReactComponents ()  {
//     const [count, setCount] = useState(0)

//     const increment = () => {
//         // setCount(prevCount => prevCount + 1);
//         setCount(count + 1);
//     }

//   return (
//     <div>
//         <p>Count:{count}</p>
//         <button onClick={increment}>increment</button>
//     </div>
//   )
// }

// export default ReactComponents


// import React,{useState} from 'react';

// function HooksState() {
//     const[count, setCount] = useState(0)

//     const Increase = () => {
//         setCount(count + 1)
//     }

//     const Decrease= () => {
//         if(count <= 0) {
//             return;
//         } else {
//         setCount(count - 1)
//     }
// }

//     return(
//         <div>
//             <h1>Hooks State Counter App</h1>
//             <br />
//             <p>Count : {count}</p>
//             <br/ >
//             <button onClick={Increase}>Increase</button>
//             <button onClick={Decrease}>Decrease</button>
//         </div>
//     )
// }
// export default HooksState



//State With Object :
// import React, { useState } from "react";
 
// function Bikes() {
//     const [bike, setBike] = useState({
//         brand:"Pulsar",
//         model:"Dominor",
//         year:"2021",
//         color:"red"
//     });

//     const updateColor = () => {
//         setBike(prevState => {
//             return {  ...prevState, color:"black"}
//         });
//         }
//         return (
//             <div>
//                 <h1>Bikes</h1>
//                 <p> 
//                  My favourite is{bike.brand},{bike.model}
//                 <br />
//                 <br />
//                 it is a { bike.color } 
//                 color, from {bike.year}. <br /></p>
//                 <br />
//                 <button onClick={updateColor}>Black Color  </button>
//             </div>
//         )
   
// }
// export default Bikes;




//useEffect:


// import React,{useState, useEffect} from 'react'

// function Effect() {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//     console.log("useEffect");
// },[count]);
// return (
//     <div>
//         <h1>Count:{count}</h1>
//         <button onClick={() => setCount(count+1) }>Click me</button>
//     </div>
// )
// }
// export default Effect;



//useCallback

// import React,{useState, useCallback} from 'react'

// function ParentComponent() {
//     const[count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     const memoizedIncrement = useCallback(() => {
//         setCount((prevCount) => prevCount + 1);
//     },[count]);
  

//     return(
//         <div>
//             <h1>count:{count}</h1>
//             <ChildComponent increment={increment} />
//             <ChildComponent increment = {memoizedIncrement} />
//         </div>
//     )
// }

// function ChildComponent ({increment}){
//     return <button onClick={increment}>Increment</button>
// }
// export default ParentComponent



// //useMemo

// import React,{useState, useMemo} from 'react'

// const MyComponent = () => {
//     const[count, setCount] = useState(0)

//   //calculate the square of the count using useMemo

//     const squaredCount = useMemo(() => {
//         console.log('Calculating squared count...');
//         return count * count;
//     },[count]);

//     function counterSet() {
//         setCount((prevCount) => prevCount + 1);
//     }
//     return (
//         <div>
//             <h1>Detail Component </h1>
//             <p>Count:{count}</p>
//             <p>Squared Count:{squaredCount}</p>
//             <button onClick={counterSet}>Increment</button>
//         </div>
//     )
// }
// export default MyComponent


// //useRef

// import React,{useRef} from 'react'

// function MutableValue() {
//   const counterRef = useRef(0);
 
//   const incrementCounter = () => {
//     counterRef.current += 1;
//     console.log('Counter:', counterRef.current);
//   }
//   return (
//     <div>
//         <p>Counter:{counterRef.current}</p>
//         <button onClick={incrementCounter}>Increment</button>
//     </div>@
//   )

// }
// export default MutableValue


// //Storing Previous Values

// import React,{useRef, useEffect} from 'react';

// function PreviousValueTracker ({Value}) {
//     const prevValueRef = useRef();
     
//         useEffect (() => {
//             prevValueRef.current = Value;
//         },[Value]);
//     }
//     return(
//         <div>
//         <p>Current value:{value}</p>
//         <p>Previous Value:{prevValueRef.current}</p>
//         </div>
//     )

// export default PreviousValueTracker

// //useReducer

// import React,{useReducer} from 'react';
// //initialState
// const initialState = {count: 0}; 

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return {count: state.count + 1};
//         case 'DECREMENT':
//             return {count: state.count - 1};
//         default:
//             return state;
//     }
// };

// const  Counter = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

// return (
//     <div>
//         <h1>Count: {state.count}</h1>
//         <button onClick={() => dispatch({type:'INCREMENT'})}>INCREMENT</button>
//         <button onClick={() => dispatch({type:'DECREMENT'})}>DECREMENT</button>
//     </div>
// )
// }
// export default Counter


//props(properties)

// import React from 'react'
// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props)
//     this.state = {
//         count : 0
//     }
// }
// handleClick() {
//     this.setState({count:this.state.count + 1})
// }
// SubstractionClick() {
//     this.setState({count:this.state.count - 1})
// }

// render() {
// return (
//   <div>
//     <p>count:{this.state.count}</p>
//     <button onClick={() =>this.handleClick()}>Increment</button>
//     <button onClick={() =>this.SubstractionClick()}>Decrement</button>
//     </div>
// )
// }
// }
// export default MyComponent


//Keys

// import React from 'react'

// function list() {
// const items = [
//     {id:1,name:'item-1'},
//     {id:2, name:'item-2'},
//     {id:3, name:'item-3'}
// ];
// return (
//     <div>
//         <h2>List of Items</h2>
//         <ul>
//             {items.map(item => (
//                 <li key={item.id}>{item.name}</li>
//             ))}
//         </ul>
//     </div>
// );
// }
// export default list;

//React Redux

import React,{Component} from 'react'
class App extends Component{
render() {
    const wishes = "Welcome to React Portal";
    return (
        <div>
            <Greeting wishes={wishes} />
        </div>
    );
} 
}
class Greeting extends Component {
    render () {
        return <h1>Welcome to {this.props.wishes} world</h1>
    }
}
export default App