import {Container} from 'react-bootstrap'
import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import store from './redux/store/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store = {store}>
        <Container>
      <AddTodo />
      <DisplayTodo />
    </Container>
    </Provider>
  );
}

export default App;
