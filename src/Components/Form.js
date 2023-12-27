import "./form.css";
import Grocery from "./Grocery";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form(props) {
  let [groceryInput, setGrocery] = useState("");
  let [groceryList, setGroceryList] = useState([]);


  const showToastMessage = () => {
    if (groceryInput !== "") {
      toast.success("Item added to the list!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }else{
      toast.error("Please enter an item!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const onRemove = (itemId) => {
    let removedList = groceryList.filter((_, idx) => idx != itemId);
    setGroceryList(removedList);
  };

  // Load subjects from local storage on component mount
  useEffect(() => {
    const storedGrocery = JSON.parse(localStorage.getItem("groceryList")) || [];
    setGroceryList(storedGrocery);
  }, []);

  const addCard = () => {
    if (groceryInput !== "") {
      showToastMessage();
      setGroceryList((prevGroceryList) => {
        const updatedList = [...prevGroceryList, { groceryInput }];
        // Save to local storage
        localStorage.setItem("groceryList", JSON.stringify(updatedList));

        return updatedList;
      });
    }else{
      showToastMessage();
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
              id={idx}
              onRemove={onRemove}
            />
          );
        })}
        
      <ToastContainer />
      </div>
    </>
  );
}
