import React,{useContext} from "react";
import TodoItem from "./TodoItem.jsx";
import styles from "./TodoItem.module.css";
import { todoItemsContext } from "../store/todo-items-store.jsx";

const TodoItems = () =>{
    const {todoItems} = useContext(todoItemsContext);  
   
    return (
        <div className={`container ${styles.itemsContainer}`}>
            {
            todoItems.map((item) =>                    
            <TodoItem key={item.name} todoName={item.name} todoDate={item.tDate}></TodoItem>
            )}                     
        </div>
    );
}
export default TodoItems;