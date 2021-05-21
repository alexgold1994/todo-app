import React, {useContext} from 'react'
import ListItem from './ListItem'
import {Context} from '../context/context'

function ListTasks() {

    const {tasks} = useContext(Context)

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
