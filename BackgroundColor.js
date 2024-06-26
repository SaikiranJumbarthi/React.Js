import React, { useState } from "react";

function BackgroundColor() {
  const [name, SetName] = useState("");
  const handleChange = (e) => {
    SetName(e.target.value);
  };

  return (
    <div style={{ backgroundColor: `#${Math.random().toString().slice(-6)}` }}>
      <label>
        Name:
        <input type="text" />
      </label>
      <br />
      <br />

      <label>
        Email:
        <input type="text" />
      </label>
      <br />
      <br />
      <button
        style={{ background: `#${Math.random().toString().slice(-6)}` }}
        type="submit"
        onChange={handleChange}
      >
        submit{" "}
      </button>
    </div>
  );
}
export default BackgroundColor;
