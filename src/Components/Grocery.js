import "./grocery.css";

export default function Grocery(props) {
  const removeItem = (e) => {
    props.onRemove(e.target.id);
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
      id={props.idx} onClick={removeItem}>
        Delete
      </button>
    </div>
  );
}
