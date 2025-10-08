import React, { useState,useContext } from "react";
import styles from "./TodoForms.module.css";
import { IoAdd } from "react-icons/io5";
import { TodoItemsContext  } from "../../store/todo-items-store";
function TodoForm()
{
  const {addNewItem} = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate,setDueDate] = useState("");
   

const handleNameChange =(event) =>{
  setTodoName(event.target.value);
};

const handleDueDateChange =(event) =>{
  setDueDate(event.target.value);
};

const handleAddButtonClick = () =>{
  addNewItem(todoName,dueDate);
  setDueDate("");
  setTodoName("");
};

    return (
      <div className="container text-center ">
        <div className="row" >
          <div className="col-6">
            <input
              type="text"
              value={todoName}
              onChange={handleNameChange}
              className={styles.fromInput}
              placeholder="Add a new task"              
            ></input>
          </div>
          <div className="col-4">
            <input
             value={dueDate}
              type="date"
              onChange={handleDueDateChange}
              className={styles.fromInput}
              placeholder="Add Date & Time"             
            ></input>
          </div>
          <div className="col-2">
            <button             
              onClick={handleAddButtonClick}
              className={`btn btn-success ${styles.kgButton}`}
            >
              <IoAdd />
            </button>
          </div>
        </div>
      </div>
    );
}
 
export default TodoForm;