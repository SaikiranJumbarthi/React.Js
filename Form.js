import React from "react";

function Form() {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
