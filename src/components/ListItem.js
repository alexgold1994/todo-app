import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

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
    cursor: pointer;
`

const ListItemText = styled.div`
    display: flex;
    cursor: pointer;
    font-size: 18px;    
    text-decoration: ${props => props.decoration? 'line-through' : 'none'};
    text-decoration-color: #21ff21;
    text-decoration-style: wavy
`

function ListItem({ task, toggleTask, deleteTask }) {
    return (
        <ListItemWrapper key={task.id}>
            <ListItemText decoration={task.isComplete}
                onClick={() => toggleTask(task.id)}>
                 {task.data}
             </ListItemText>
            <div className="item-delete" onClick={() => deleteTask(task.id)}> <DeleteIcon />  </div>
        </ListItemWrapper>
    )
}

export default ListItem
