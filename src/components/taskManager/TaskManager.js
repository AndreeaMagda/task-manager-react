import React from 'react'
import { useState} from 'react';
import Task from "./Task";
import "./TaskManager.css";
import './Task';

const TaskManager = () => {
  const[user, setUser]=useState("")
  const[name, setName]=useState("")
  const[date, setDate]=useState("")
  const[tasks, setTasks]=useState([])



  const handleSubmit=(e) => {
    e.preventDefault();
     if(!name && !date || !name || !date){
      alert("Please enter a username, task name and date")
     }
     else {
      const newTask={
        id: Date.now(),
        name,
        date,
        user,
        complete:false
      }
    setTasks([...tasks, newTask])
    setName("")
    setDate("")
    setUser("")
     }
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
  {tasks.length === 0 ?(
  <p className='--text '> no task</p>
  ):(
    <div className='--text-dark'> 
{tasks.map((task)=>{
  return ( <><Task {...task}/>  </> )
  
})}
</div>
  )}


</div>

</article>
    </div>
  )
}

export default TaskManager
