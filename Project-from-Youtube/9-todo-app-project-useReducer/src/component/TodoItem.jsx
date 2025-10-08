import React from "react";
import styles from "./TodoItem.module.css";
import { MdOutlineDelete } from "react-icons/md";


const TodoItem = ({todoName,todoDate}) => {
    
  return (
    <div className="row">
      <div className="col-6 text-start">{todoName}</div>
      <div className="col-4 text-start">{todoDate}</div>
      <div className="col-2 ">
        <button
          className={`btn btn-danger ${styles.kgButton}`}
          onClick={() => onDeleteClick(todoName)}
        >
          <MdOutlineDelete />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
