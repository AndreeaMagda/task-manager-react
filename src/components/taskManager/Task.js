import React from 'react'
import {FaCheckDouble, FaEdit,FaTrashAlt} from 'react-icons/fa'
const Task = () => {
  return (
    <div className='task'>
        <span>
            <p><strong>Task:</strong>Task one</p>
            <p><strong>Data:</strong>2023-05-17</p>
        </span>
        <span>
<button>
    <FaEdit button color='green'/>
</button>

<button>
    <FaTrashAlt color='red'/>
</button>
<button>
    <FaCheckDouble color='blue'/>
</button>

        </span>
     
    </div>
  )
}

export default Task
