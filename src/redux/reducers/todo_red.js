//they take =>action, state
//return =>updated state

import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-type"

// first we defind int state 

const initialState = []
export default (state=initialState, action)=>{
    // we can use if else also 
    // if (action.type == ADD_TODO){
    //     //ADD TODO LOGIC4
    // }

    switch(action.type){
        case ADD_TODO:
            //add todo
            return [...state, action.payload]
        case DELETE_TODO:
            //delete
            const newState = state.filter((todo)=>todo.id!== action.payload)
            return newState
        case UPDATE_TODO:
            const updateState = state.map(todo=>{
                if(todo.id==action.payload.todoId){
                    todo.title = action.payload.todo.title
                    todo.description = action.payload.todo.description
                    
                    
                }
                return todo;

            })
            return updateState;

            
        default:
            return state
    }
}