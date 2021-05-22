import React, {useReducer} from 'react';
import ListForm from './components/ListForm'
import ListTasks from './components/ListTasks'
import styled, {createGlobalStyle} from 'styled-components';
import {Context} from './context/context'
import reducer from './reducers/reducer'


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

  const [state, dispatch] = useReducer(reducer, { tasks: [], dataInput: '' })


  return (
	  <>
	  	<GlobalStyle/>	  
        <Context.Provider value={{state, dispatch}}>
          <Title>Task list: {state.tasks.length}</Title>	
          <ListForm/>
          <ListTasks/>              
        </Context.Provider>
    </>

  );
}

export default App;


