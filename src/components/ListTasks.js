import React, {useContext} from 'react'
import ListItem from './ListItem'
import {Context} from '../context/context'
import {Title} from '../App'

function ListTasks() {

    const {state} = useContext(Context)

	if (state.tasks.length === 0) {
		return <Title color="black">Task list is empty ! Add some tasks please. </Title>
	}
	
    return (
		
		<div>
			
			{state.tasks.map((task) => {
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
