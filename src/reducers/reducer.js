function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return   {
              ...state, tasks: [...state.tasks, action.payload]
            } 
  
        case 'RESET_INPUT': 
            return {...state, dataInput: action.payload}
            
        case 'DELETE_TASK':
            
          return { ...state, tasks: [...state.tasks.filter((task) => task.id !== action.payload)] }
  
  
        case 'TOGGLE_TASK':
          return {...state, tasks: state.tasks.map((task) => 
            task.id === action.payload ? {...task, isComplete: !task.isComplete} : {...task}
        )}
  
        case 'CHANGE_INPUT':
  
          return {...state, dataInput: action.payload} 
    
        default:
            return state
    }
  }

  export default reducer