import React from 'react'
import ListItem from './ListItem'

function ListTasks({tasks, toggleTask, deleteTask}) {
    return (
		<div>
			{tasks.map((task) => {
				return (
					<ListItem
						task={task}
						key={task.id}
						toggleTask={toggleTask}
						deleteTask={deleteTask}
					/>
				)
			})}
		</div>
    )}

export default ListTasks
