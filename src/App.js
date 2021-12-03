import Nav from './components/Nav';
import './App.css';
import { useState, useEffect } from 'react';
import Todos from './components/Todos/Todo';
import Covid from './components/Covid/Covid';

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

  useEffect(() => {
    console.log('Something running')
  }, [address])

  useEffect(() => {
    console.log('Something running')
  }, [todos])

  const eventHandle = () => {
    if (!address) {
      alert("Please fill the input")
      return
    }

    let newTodo = {
      id: Math.floor((Math.random() * 100) + 1),
      title: address,
      type: 'Drake'
    }

    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleEventInput = (event) => {
    setAddress(event.target.value)
  }

  const deleteTodo = (id) => {
    let currentTodo = todos
    currentTodo = currentTodo.filter(item => item.id !== id)
    setTodos(currentTodo)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>day la hello world with {name}</h1>
        <Covid />
        {/* <Todos todos={todos} title={'Vinh todos'} deleteTodo={deleteTodo} />

        <Todos todos={todos.filter(todo => todo.type === 'Drake')} title={'Drake todos'} deleteTodo={deleteTodo} />

        <input type="text" value={address} onInput={(event) => { handleEventInput(event) }} />
        <button type="button" onClick={eventHandle} >click me daddy</button> */}
      </header>
    </div>
  );
}

export default App;
