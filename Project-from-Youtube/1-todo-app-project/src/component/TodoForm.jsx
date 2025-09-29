function TodoForm()
{
    return (
        <div class="container text-center"> 
         <div class="row kg-row">
          <div class="col-6">
            <input type="text" Placeholder="Add a new task"></input>
          </div>
          <div class="col-4">
            <input type="datetime-local" placeholder="Add Date & Time"></input>
          </div>
          <div class="col-2">
            <button className="btn btn-success kg-button">Add Task</button>
          </div>
        </div>
     
    </div>
    )
}

export default TodoForm;