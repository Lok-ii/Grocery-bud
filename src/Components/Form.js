import "./form.css";
import Grocery from "./Grocery";
import { useState, useEffect } from "react";

export default function Form() {
  let [groceryInput, setGrocery] = useState("")
  let [groceryList, setGroceryList] = useState([]);

  // Load subjects from local storage on component mount
  useEffect(() => {
    const storedGrocery = JSON.parse(localStorage.getItem("groceryList")) || [];
    setGroceryList(storedGrocery);
  }, []);

  const addCard = () => {
    if (groceryInput !== "") {
      setGroceryList((prevGroceryList) => {
        const updatedList = [...prevGroceryList, { groceryInput}];
  
        // Save to local storage
        localStorage.setItem("groceryList", JSON.stringify(updatedList));
  
        return updatedList;
      });
    }
    setGrocery("");
  };

  return (
    <>
      <h1>Grocery Bud</h1>
      <div className="form">
        <input
          type="text"
          className="groceryInput"
          value={groceryInput}
          onChange={(e) => setGrocery(e.target.value)}
        />
        <button onClick={addCard}>Add Item</button>
      </div>
      <div className="groceryContainer">
        {groceryList.map((ele, idx) => {
          return (
            <Grocery
              key={idx}
              grocery={ele.groceryInput}
            />
          );
        })}
      </div>
    </>
  );
}
