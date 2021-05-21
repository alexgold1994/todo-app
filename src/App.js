import React, {useState} from 'react';
import ListForm from './components/ListForm'
import ListTasks from './components/ListTasks'
import styled, {createGlobalStyle} from 'styled-components';
import {Context} from './context/context'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;


function App() {

  const [tasks, setTasks] = useState([])
  const [dataInput, setDataInput] = useState('') 

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

  const handleSubmit = (e) => {
      e.preventDefault()
      addTask(dataInput)
      setDataInput("")
  }


  const handleChange = (e) => {
      setDataInput(e.currentTarget.value)
  }


  return (
	  <>
	  	<GlobalStyle/>	  
        <Context.Provider value={{
          toggleTask, deleteTask, addTask, handleSubmit, handleChange, dataInput, tasks
        }}>
          <Title>Task list: {tasks.length}</Title>	
          <ListForm/>
          <ListTasks/>              
        </Context.Provider>
    </>

  );
}

export default App;


