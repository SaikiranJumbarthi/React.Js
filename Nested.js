import React from "react";

import { userData } from "./Data";

// let fruits = ["apple", "Mango"];
console.log(userData);

const Nested = () => {
  return (
    <div>
      {userData.map((user) => {
        return (
          <div style={{ border: "1px solid black" }}>
            <div>{user.username} </div>
            <div>{user.email}</div>
            <div>{user.street}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Nested;
