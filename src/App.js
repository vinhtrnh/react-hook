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
      title: 'Watch hoi dan it'
    },
    {
      id: 2,
      title: 'Doing homework'
    }
  ])

  const eventHandle = () => {
    let newTodo = {
      id: 'abc',
      title: address
    }
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleEventInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>day la hello world with {name}</h1>
        <Todos todos={todos} />
        <input type="text" value={address} onInput={(event) => { handleEventInput(event) }} />
        <button type="button" onClick={eventHandle} >click me daddy</button>
      </header>
    </div>
  );
}

export default App;
