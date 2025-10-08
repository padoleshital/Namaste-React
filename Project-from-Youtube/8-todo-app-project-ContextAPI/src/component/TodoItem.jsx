import React from "react";

const TodoItem = ({ todoName, todoDate, DeleteClick }) => {
 
  return (
    <div className="row mt-2">
      <div className="col-6 text-start">{todoName}</div>
      <div className="col-4 text-start">{todoDate}</div>
      <div className="col-2 ">
        <button
          onClick={() => DeleteClick(todoName)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;