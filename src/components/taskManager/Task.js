import React from 'react'
import { FaCheckDouble, FaEdit, FaTrashAlt } from 'react-icons/fa'
const Task = ({id,name,date,user,complete}) => {
    return (
        <div  key={id} className={complete ? "task complete" :"task"}>
            <span>
              

                <p><strong>User:</strong>
                {user}</p>
                <p><strong>Task:</strong>
                {name}</p>
                <p><strong>Date:</strong>
                {date}</p>
            </span>
            <span>
                
                    <div className=' flex align-items-center '>
                        <button  className='btn btn-warning my-1'>
                            <i className='fa fa-eye' />
                        </button >
                        <button  className='btn btn-primary my-1'>
                            <i className='fa fa-pen' />
                        </button >
                        <button  className='btn btn-danger my-1'>
                            <i className='fa fa-trash' />
                        </button>
                    </div>
            </span>

        </div>
    )
}

export default Task
