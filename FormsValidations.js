import React, { useState } from "react";
import "./Forms.css";

function FormsValidations() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const Name = () => {
    console.log(Name);
  };
  const Email = () => {
    console.log(Email);
  };
  const password = () => {
    if (password <= 8) {
      return;
    } else {
      alert("Enter the correct password");
    }
  };

  return (
    <div className="forms">
      <h1>Login-Form</h1>
      <label>
        Name:
        <input type="text" placeholder="Enter your Name" />
      </label>
      <br />
      <br />
      <label>
        Email:
        <input type="email" placeholder="Enter your email" />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input type="Password" placeholder="Enter Password" />
      </label>
      <br />
      <br />
      <label>
        password:
        <input type="password" placeholder="Enter password " />
      </label>
      <br />
      <br />
      <button>Submit</button>
    </div>
  );
}
export default FormsValidations;
