import "./grocery.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Grocery(props) {
  const removeItem = (e) => {
    props.onRemove(e.target.id);
  };

  const showToastMessage = () => {
    toast.success("Item deleted !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="grocery">
      <div className="checkBox">
        <input type="checkbox" name="checked" id="checked" />
        <label className="subjectName" htmlFor="checked">
          {props.grocery}
        </label>
      </div>

      <button className="remove"
      id={props.idx} onClick={(e)=>{
        removeItem(e);
        showToastMessage();
      }}>
        Delete
      </button>
    </div>
  );
}
