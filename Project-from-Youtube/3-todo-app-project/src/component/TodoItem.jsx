import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem =({todoName,todoDate}) =>{
    return (       
            <div className="row">
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button className={`btn btn-danger ${styles.kgButton}`}>Delete</button>
                </div>
            </div>
     
    );
}
export default TodoItem;