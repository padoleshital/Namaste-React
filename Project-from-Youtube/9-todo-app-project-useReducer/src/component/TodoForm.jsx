import React from "react";
import styles from "./TodoForms.module.css";
import { useState,useContext } from "react";
import { IoAdd } from "react-icons/io5";
import { todoItemsContext } from "../store/todo-items-store.jsx";

function TodoForm()
{
  //local state
const [todoName,setTodoName]= useState("");
const [dueDate,setDueDate] = useState("");
//Context For add newItem
const { addNewItem } = useContext(todoItemsContext);

const handleNameChange = (event) =>{
setTodoName(event.target.value);
 
}
const handleDateChnage =(event) =>{
  setDueDate(event.target.value);  
}
const handleAddButtonClick = ()=>{
  addNewItem(todoName,dueDate);
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
            <input type="date" className={styles.fromInput} placeholder="Add Date & Time"
           value={dueDate}
           onChange={handleDateChnage}></input>
          </div>
          <div className="col-2">
            <button
            type="submit" className={`btn btn-success ${styles.kgButton}`}
            onClick={handleAddButtonClick}><IoAdd /></button>
          </div>
        </div>
     
    </div>
    )
  }
export default TodoForm;