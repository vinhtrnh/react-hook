import Nav from './components/Nav';
import './App.css';

function App() {
  let name = 'Vinh'

  const eventHandle = () => {
    console.log('Button Clicked')
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>day la hello world with {name}</h1>
        <button type="button" onClick={eventHandle} >click me daddy</button>
      </header>
    </div>
  );
}

export default App;
