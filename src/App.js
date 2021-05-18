import React, {useState} from 'react';
import ListForm from './components/ListForm'
import ListItem from './components/ListItem'





function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (dataInput) => {
	if (dataInput) {
		const newTask = {
			id: Math.random().toString(20).substr(3,12),
			data: dataInput,
			isComplete: false
		}
		setTasks([...tasks, newTask])
	}
  }

  const deleteTask = (id) => {
	setTasks([...tasks.filter((task) => task.id !== id)])
  }

  const toggleTask = (id) => {
    setTasks([
		...tasks.map((task) => 
			task.id === id ? {...task, isComplete: !task.isComplete} : {...task}
		)
	])
  }

  return (
    <div className="App">
		<h1>Task list: {tasks.length}</h1>	
		<ListForm addTask={addTask}/>

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
  );
}

export default App;


