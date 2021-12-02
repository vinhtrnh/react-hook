import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Eric')

  const [address, setAddress] = useState('')

  const eventHandle = () => {
    setName(address)
  }
  const handleEventInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>day la hello world with {name}</h1>
        <input type="text" value={address} onInput={(event) => { handleEventInput(event) }} />
        <button type="button" onClick={eventHandle} >click me daddy</button>
      </header>
    </div>
  );
}

export default App;
