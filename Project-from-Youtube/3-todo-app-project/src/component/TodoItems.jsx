import React from "react";
import TodoItem from "./TodoItem.jsx";
import styles from "./TodoItem.module.css";

const TodoItems = ({ todoList }) =>{
    return (
        <div className={`container ${styles.itemsContainer}`}>
            {
            todoList.map((item) =>                    
            <TodoItem key={item.id} todoName={item.name} todoDate={item.tDate}></TodoItem>
            )}
                     
        </div>
    );
}
export default TodoItems;