import React,  { createContext ,useState } from "react";


export const TodoItemsContext = createContext(
    { 
    todoItems:[],
    addNewItem:() => {},
    deleteItem:() =>{} 
    }
);
