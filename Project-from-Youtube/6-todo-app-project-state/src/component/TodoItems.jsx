import React from "react";
import TodoItem from "./TodoItem.jsx";
import styles from "./TodoItem.module.css";

const TodoItems = ({ displayTodoItems,onDeleteClick }) =>{
    return (
        <div className={`container ${styles.itemsContainer}`}>
            {
            displayTodoItems.map((item) =>                    
            <TodoItem key={item.id} todoName={item.name} todoDate={item.tDate} onDeleteClick={onDeleteClick}></TodoItem>
            )}
                     
        </div>
    );
}
export default TodoItems;