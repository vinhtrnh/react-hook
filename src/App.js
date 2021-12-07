import Nav from './components/Nav';
import './App.css';
import { useState, useEffect } from 'react';
import Todos from './components/Todos/Todo';
import Covid from './components/Covid/Covid';
import Countdown from './components/Countdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

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

  const onTimesUp = () => {
    // alert('Times up')
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <div style={{ backGroundColor: '#282c34' }}>
          <Switch>

            <Route path="/home" exact>
              <h1>Welcome to my React basic app</h1>
              <h3>Use Nav menu to orther app</h3>
            </Route>

            <Route path="/covid" exact>
              <Covid />
            </Route>

            <Route path="/timer">
              <Countdown onTimesUp={onTimesUp} />
            </Route>

            <Route path="/todo">
              <Todos todos={todos} title={'Vinh todos'} deleteTodo={deleteTodo} />

              <Todos todos={todos.filter(todo => todo.type === 'Drake')} title={'Drake todos'} deleteTodo={deleteTodo} />

              <input type="text" value={address} onInput={(event) => { handleEventInput(event) }} />
              <button type="button" onClick={eventHandle} >click me</button>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
