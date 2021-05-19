import React, {useState} from 'react'
import styled from 'styled-components';

const Btn = styled.button`
    padding: 16px 7px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
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
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #5d0cff;
    outline: none;
    background: transparent;
`

const Form = styled.form`
    text-align: center;
`

function ListForm({ addTask }) {

    const [dataInput, setDataInput] = useState('')   
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(dataInput)
        setDataInput("")
    }

    const handleChange = (e) => {
        setDataInput(e.currentTarget.value)
    }
    


    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text"
                value={dataInput}
                onChange={handleChange}
                placeholder="Enter value"
            />
            <Btn>Add</Btn>
        </Form>
    )
}

export default ListForm
