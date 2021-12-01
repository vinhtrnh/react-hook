
import './App.css';

function App() {

  let name = 'Vinh'
  let years = 2021
  let link = 'https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=8&ab_channel=H%E1%BB%8FiD%C3%A2nIT'
  return (
    <div className="App">
      <header className="App-header">
        <h1>day la hello world with {name} in {years}</h1>
        <a href={link} target="_blank" >  Click me</a>
      </header>
    </div>
  );
}

export default App;
