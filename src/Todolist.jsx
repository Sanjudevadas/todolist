import React, { useState } from "react";
function Todolist() {
  const [task, setTask] = useState(["sanju", "rayya", "phyo"]);
  const [newtask, setNewtask] = useState("");
  
  
  function HandleChange(event) {
    setNewtask(event.target.value);
  }
  function Addtasks(){

  }

function Deletetask()
{
    
}

  return (
    <>
      <div>
        <h1>To do list Created By Sanju devadas</h1>
        <div>
          <input
            type="text"
            placeholder="Enter task..." value={newtask}
            onChange={HandleChange}
          />
          <button className="addbutton" onClick={Addtasks}>Add</button>
         
        </div>
        <ol>
            {task.map((c, index) => 
              <li key={index}>
                <span className="text">{c}</span>
                <button className="deletebutton" onClick={Deletetask}>Delete</button>
              </li>
            )}
          </ol>
      </div>
    </>
  );
}

export default Todolist;
