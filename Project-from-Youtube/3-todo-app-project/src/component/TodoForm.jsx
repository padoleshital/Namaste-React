import React from "react";
import styles from "./TodoForms.module.css";

function TodoForm()
{
    return (
        <div className="container "> 
         <div className="row">
          <div className="col-6">
            <input type="text" className={styles.fromInput} placeholder="Add a new task"></input>
          </div>
          <div className="col-4">
            <input type="datetime-local" className={styles.fromInput} placeholder="Add Date & Time"></input>
          </div>
          <div className="col-2">
            <button className={`btn btn-success ${styles.kgButton}`}>Add</button>
          </div>
        </div>
     
    </div>
    )
  }
export default TodoForm;