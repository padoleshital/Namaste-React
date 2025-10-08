
import React, { useContext } from "react";
import { TodoItemsContext } from "../../store/todo-items-store.jsx";
import  TodoItem  from "./TodoItem.jsx"
const TodoItems = () => {   
 const {todoItems, DeleteClick} = useContext(TodoItemsContext)
 debugger
 
  return (
    <div  className="container mt-3">
      {todoItems.map((item) => (
        <TodoItem  
        key={item.name}     
          todoName={item.name}
          todoDate={item.tDate}
          DeleteClick={DeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
