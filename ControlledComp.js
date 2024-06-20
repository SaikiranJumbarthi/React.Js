import React, { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Email:
        <input type="text" value={email} onchange={handleChange} />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </div>
  );
}
export default ControlledComponent;
