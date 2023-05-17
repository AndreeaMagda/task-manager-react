import React from 'react'
import { FaCheckDouble, FaEdit, FaTrashAlt } from 'react-icons/fa'
const Task = () => {
    return (
        <div className='task'>
            <span>
                <p><strong>Task:</strong>Task one</p>
                <p><strong>Data:</strong>2023-05-17</p>
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
