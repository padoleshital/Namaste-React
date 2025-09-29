
import AppName from './component/AppName.jsx';
import TodoForm from './component/TodoForm.jsx';
import TodoItem1 from './component/TodoItem1.jsx';  
import TodoItem2 from './component/TodoItem2.jsx';
import "./App.css";
function App() {
  return (
    <center className="todo-container">     
    <AppName/>              
    <TodoForm/> 
    <div className="items-container">
      <TodoItem1/>
    <TodoItem2/>
      </div> 
    
    </center>
  );
}
export default App;
