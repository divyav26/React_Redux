import {createStore,combineReducers} from 'redux'
import todoReducers from '../reducers/todo_red'
const rootReducer = combineReducers({todos:todoReducers})


const store = createStore(rootReducer)
export default store