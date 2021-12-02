import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';
import Todos from './components/Todos/Todo';

function App() {
  const [name, setName] = useState('Eric')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Watch hoi dan it',
      type: 'Vinh'
    },
    {
      id: 2,
      title: 'Doing homework',
      type: 'Vinh'
    },
    {
      id: 3,
      title: 'Reading Book',
      type: 'Drake'
    }
  ])

  const eventHandle = () => {
    let newTodo = {
      id: 'abc',
      title: address,
      type: 'Drake'
    }
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleEventInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>day la hello world with {name}</h1>
        <Todos todos={todos} title={'Vinh todos'} />

        <Todos todos={todos.filter(todo => todo.type === 'Drake')} title={'Drake todos'} />

        <input type="text" value={address} onInput={(event) => { handleEventInput(event) }} />
        <button type="button" onClick={eventHandle} >click me daddy</button>
      </header>
    </div>
  );
}

export default App;
