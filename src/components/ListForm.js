import React, { useContext } from 'react'
import styled from 'styled-components';
import {Context} from '../context/context'
import { v4 as uuid } from 'uuid';

const Btn = styled.button`
  padding: 16px 7px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  border: 1px solid #5d0cff;
  background: linear-gradient(
  90deg,
  rgb(209, 190, 248) 0%,
  rgb(107, 109, 252) 100%
  );
  color: rgb(0, 0, 0);
  text-transform: capitalize;
      }
`

const Input = styled.input`
  padding: 15px 30px 15px 15px;
  border-radius: 5px 0 0 5px;
  border: 2px solid #5d0cff;
  width: 500px;
  outline: none;
  background: transparent;
`

const Form = styled.form`
  text-align: center;
`

function ListForm() {
    
  const {state, dispatch} = useContext(Context)  

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: e.currentTarget.value
    })      
  } 
  
  const addTask = (state) => {
    if (state.dataInput) {
      dispatch({
        type: 'ADD_TASK',
        payload:   {
            id: uuid(),
            data: state.dataInput,
            isComplete: false
        }
      }) 
    }}

  const ResetInput = (e) => {
    dispatch({
        type: 'RESET_INPUT',
        payload: ''
    })
  }    

  const handleSubmit = (e) => {        
    e.preventDefault()
    addTask(state)
    ResetInput()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
          type="text"
          value={state.dataInput}
          onChange={handleChange}
          placeholder="Enter value"
      />
      <Btn>Add</Btn>
    </Form>
  )
}

export default ListForm
