import React from "react";

const TodList = () => {
  const todoList = ["Task-1", "Task-2", "Task-3", "Task-4"];
  const ListItem = ["JS", "React", "HTML", "CSS"];
  return (
    <div>
      <h1>Project-1.md</h1>
      {todoList.length > 0 ? (
        <ul>
          {todoList.map((todoItem, index) => (
            <li key={index}> {todoItem}</li>
          ))}
        </ul>
      ) : (
        <h1>No Items</h1>
      )}

      {ListItem.length < 0 ? (
        <ol>
          {ListItem.map((ListItem, index) => (
            <li key={index}> {ListItem}</li>
          ))}
        </ol>
      ) : (
        <h1>NO Items</h1>
      )}
      <div>
        <label for htmlFor="agree">
          <input type="checkbox" id="agree" name="agreeterms" />
          Agree{" "}
        </label>
      </div>
    </div>
  );
};
export default TodList;
