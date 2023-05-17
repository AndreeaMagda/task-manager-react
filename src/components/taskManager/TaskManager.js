import React from 'react'
import './TaskManager.css'

const TaskManager = () => {
  return (
    <div className='--bg-violet' >
      <h1 className='--text-center --text-light'>TaskManager</h1>
      <div className='--flex-center --p'>
        <div className='--card --bg-light --width-500px --p --flex-center'>
            <form  className='form --form-control'>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='Task Name' name='name' />
               </div>
               <div>
                <label htmlFor='name'>Task:</label>
                <input type='text' placeholder='Task Name' name='name' />
               </div>
               <div>
                <label htmlFor='date'>Data:</label>
                <input type='date' placeholder='Task Name' name='date' />
               </div>
               <button className='--btn --btn-success --btn-block'>Task</button>
            </form>
        </div>

      </div>
    </div>
  )
}

export default TaskManager
