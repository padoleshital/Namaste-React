import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          className={`btn btn-danger ${styles.kgButton}`}
          onClick={() => onDeleteClick(todoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
