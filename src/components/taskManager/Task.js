import React from 'react'

const Task = ({id,name,date,user,complete, editTask, deleteTask, completeTask}) => {
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
                        <button onClick={() => completeTask(id)} className='btn btn-warning my-1'>
                            <i className='fa fa-check-square' />
                        </button >
                        <button onClick={()=>editTask(id)} className='btn btn-primary my-1'>
                            <i className='fa fa-pen' />
                        </button >
                        <button  onClick={()=>deleteTask(id)} className='btn btn-danger my-1'>
                            <i className='fa fa-trash' />
                        </button>
                    </div>
            </span>

        </div>
    )
}

export default Task
