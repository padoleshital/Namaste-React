import AppName from "./component/AppName.jsx";
import TodoForm from "./component/TodoForm.jsx";
import TodoItems from "./component/TodoItems.jsx";
import "./App.css";

function App() {
  let todoList = [
    { id: 1, name: "Buy Milk", tDate: "4/10/2025" },
    { id: 2, name: "Buy Bread", tDate: "4/11/2025" },
    { id: 3, name: "Buy Fruits", tDate: "4/12/2025" },
    { id: 4, name: "Buy Vegetables", tDate: "4/13/2025" },
    { id: 5, name: "Buy Meat", tDate: "4/14/2025" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <TodoForm />
      <TodoItems todoList={todoList}></TodoItems>
    </center>
  );
}
export default App;
