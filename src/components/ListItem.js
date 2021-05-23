import React, {useContext} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import {Context} from '../context/context'

const ListItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    width: 550px;
    font-weight: 500;
    margin: 0 auto;
    margin-top: 15px;
    background: linear-gradient(
    90deg,
    rgb(209, 190, 248) 0%,
    rgb(107, 109, 252) 100%
    );
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;    
`

const ListItemText = styled.div`
    display: flex;
    cursor: pointer;
    font-size: 18px;
    text-decoration: ${props => props.decoration? 'line-through' : 'none'};
    text-decoration-color: #21ff21;
    text-decoration-style: wavy
`

const DeleteBtn = styled.div`
  padding: 0; 
  cursor: pointer;
              
`

function ListItem({ task }) {

  const {dispatch} = useContext(Context)
    const {id, isComplete, data} = task

  return (
    <ListItemWrapper key={id}>
      <ListItemText decoration={isComplete}
          onClick={() => dispatch({
              type: 'TOGGLE_TASK',
              payload: id
          })}>
            {data}
        </ListItemText>
      <DeleteBtn onClick={() => dispatch({
          type: 'DELETE_TASK',
          payload: id
      })}> <DeleteIcon />  </DeleteBtn>
    </ListItemWrapper>
  )
}

export default ListItem
