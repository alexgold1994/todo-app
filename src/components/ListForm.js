import React, {useState} from 'react'

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
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={dataInput}
                onChange={handleChange}
                placeholder="Enter value"
            />
            <button>Add</button>
        </form>
    )
}

export default ListForm
