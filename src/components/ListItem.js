import React from 'react'

function ListItem({ task, toggleTask, deleteTask }) {
    return (
        <div key={task.id} className="item-task" >
            <div className={task.isComplete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(task.id)}
            >
                 {task.data}
             </div>

            <div className="item-delete" onClick={() => deleteTask(task.id)}> X </div>
        </div>
    )
}

export default ListItem
