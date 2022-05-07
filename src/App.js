import { Button } from './components/Button/Button';
import { Counter } from './components/Count/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter counter = '0'/>
     <Button title = '+'/>
     <Button title = '-'/>
    </div>
  );
}

export default App;
