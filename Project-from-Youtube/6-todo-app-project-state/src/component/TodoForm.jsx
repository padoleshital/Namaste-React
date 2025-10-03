import React from "react";
import styles from "./TodoForms.module.css";
import { useState } from "react";
function TodoForm({onNewItem})
{
  //local state
const [todoName,setTodoName]= useState("");
const [dueDate,setDueDate] = useState("");

const handleNameChange = (event) =>{
setTodoName(event.target.value);
 
}
const handleDateChnage =(event) =>{
  setDueDate(event.target.value);  
}
const handleAddButtonClick = ()=>{
  onNewItem(todoName,dueDate);
  setTodoName("");
  setDueDate("");
}

    return (
        <div className="container "> 
         <div className="row">
          <div className="col-6">
            <input type="text" className={styles.fromInput} placeholder="Add a new task"
            value={todoName || ""}
            onChange={handleNameChange}></input>
          </div>
          <div className="col-4">
            <input type="datetime-local" className={styles.fromInput} placeholder="Add Date & Time"
           value={dueDate}
           onChange={handleDateChnage}></input>
          </div>
          <div className="col-2">
            <button className={`btn btn-success ${styles.kgButton}`}
            onClick={handleAddButtonClick}>Add</button>
          </div>
        </div>
     
    </div>
    )
  }
export default TodoForm;