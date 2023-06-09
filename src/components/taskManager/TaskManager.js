import React from 'react'
import { useState } from 'react';
import Task from "./Task";
import "./TaskManager.css";
import './Task';


const TaskManager = () => {
  const [user, setUser] = useState("")
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [tasks, setTasks] = useState([])

  const [taskID, setTaskID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);




  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!name && !date && !user) || !name || !date) {
      alert("Please enter task name and date");
    } else if (name && date && user && isEditing) {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskID) {
            return { ...tasks, name, date, user, complete: false };
          }
          return task;
          ;
        })
      );
      setName("");
      setDate("");
      setUser("");
      setIsEditing(false);
      setTaskID(null);
    }
    else {
      const newTask = {
        id: Date.now(),
        name,
        date,
        user,
        complete: false
      }
      setTasks([...tasks, newTask])
      setName("")
      setDate("")
      setUser("")
    }
  };

  const editTask = (id) => {
    const thisTask = tasks.find((task) => task.id === id)
    setIsEditing(true);
    setTaskID(id);
    setUser(thisTask.user);
    setName(thisTask.name);
    setDate(thisTask.date);

  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task") === true) {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        }
        return task;
      })
    );
  };
  return (
    <div className='--bg-dark' >
      <h1 className='--text-center --text-light'>TaskManager</h1>
      <div className='--flex-center --p'>
        <div className='--card --bg-light --width-500px --p --flex-center'>
          <form onSubmit={handleSubmit} className='form --form-control'>
            <div>
              <label htmlFor='name'>Name:</label>
              <input type='text' placeholder='Task Name' name='name'
                value={user} onChange={(e) => setUser(e.target.value)} />
            </div>
            <div>
              <label htmlFor='name'>Task:</label>
              <input type='text' placeholder='Task Name' name='name'
                value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <label htmlFor='date'>Data:</label>
              <input type='date' placeholder='Task Name' name='date'
                value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button className='--btn --btn-success --btn-block'>Save
            </button>
          </form>
        </div>
      </div>
      <article className='--flex-center --my2'>
        <div className='--width-500px --p'>
          <h3 className='--text-light'>Tasks Lists</h3>
          <hr className={{ background: '#fff' }} />
          {tasks.length === 0 ? (
            <p className='--text-light '> no task</p>
          ) : (
            <div className='--text-dark'>
              {tasks.map((task) => {
                return (
                  <Task
                    {...task}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                   
                  />
                );
              })}
            </div>
            
          )}


        </div>

      </article>
    </div>
  )
}

export default TaskManager
