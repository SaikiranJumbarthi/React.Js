import React,{useState} from "react";

const App= () => {
    const[sampleCondition,setSampleCondition] = useState(true)

return (
    <div>
        <h1>Welcome to React</h1>
        <br />
        <h1>
        {sampleCondition? "This is true Condition" : "This is false Condition"}
    </h1>
    </div>
)

}
export default App;