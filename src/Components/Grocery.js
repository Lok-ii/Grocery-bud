import { useState } from "react";
import "./grocery.css";

export default function Grocery(props) {
  const removeItem = () => {
    // setCurrentHours(Number(hours) + 1);
  };

  return (
    <div className="grocery">
      <div className="checkBox">
        <input type="checkbox" name="checked" id="checked" />
        <label className="subjectName" htmlFor="checked">
          {props.grocery}
        </label>
      </div>

      <button className="remove" onClick={removeItem}>
        Delete
      </button>
    </div>
  );
}
