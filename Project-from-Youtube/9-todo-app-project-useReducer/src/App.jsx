import AppName from "./component/AppName.jsx";
import TodoForm from "./component/TodoForm.jsx";
import TodoItems from "./component/TodoItems.jsx";
import WelcomeMessage from "./component/WelcomeMessage.jsx";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store.jsx";
function App() {
  return (
    <TodoItemsContextProvider>
       <center className="todo-container">
        <AppName />
        <TodoForm/>
       <WelcomeMessage ></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
   
  );
}
export default App;
