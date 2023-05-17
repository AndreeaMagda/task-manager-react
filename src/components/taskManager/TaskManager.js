import React from 'react'
import { useState } from 'react';
import Task from "./Task";
import "./TaskManager.css";

const TaskManager = () => {
  const[user, setUser]=useState("")
  const[name, setName]=useState("")
  const[date, setDate]=useState("")
  const[tasks, setTasks]=useState([])

  const handleSubmit=(e) => {
    e.preventDefault();
       console.log(name);
       console.log(date);
  };

  return (
    <div className='--bg-primary' >
      <h1 className='--text-center --text-light'>TaskManager</h1>
      <div className='--flex-center --p'>
        <div className='--card --bg-light --width-500px --p --flex-center'>
            <form  onSubmit={handleSubmit} className='form --form-control'>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='Task Name' name='name' 
                value={user} onChange={(e)=>setUser(e.target.value)}/>
               </div>
               <div>
                <label htmlFor='name'>Task:</label>
                <input type='text' placeholder='Task Name' name='name'
                value={date} onChange={(e)=>setDate(e.target.value)} />
               </div>
               <div>
                <label htmlFor='date'>Data:</label>
                <input type='date' placeholder='Task Name' name='date' 
                value={name} onChange={(e)=>setName(e.target.value)}/>
               </div>
               <button className='--btn --btn-success --btn-block'>Task</button>
            </form>
        </div>
      </div>
<article className='--flex-center --my2'> 
<div className='--width-500px --p'>
  <h3 className='--text-light'>Tasks Lists</h3>
  <hr className={{background:'#fff'}}/>
<Task/>

</div>

</article>
    </div>
  )
}

export default TaskManager
