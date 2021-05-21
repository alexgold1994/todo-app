import React from 'react'
import ListItem from './ListItem'

function ListTasks({tasks}) {
    return (
		<div>
			{tasks.map((task) => {
				return (
					<ListItem
						task={task}
						key={task.id}
						
					/>
				)
			})}
		</div>
    )}

export default ListTasks
