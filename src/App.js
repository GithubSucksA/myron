import './App.css';
import { useState } from 'react';
import TodoList from './Date';
import UseCoin from './useCoin';
import MouseTracker from './mouse';
import Form from './form';
import ShowWeather from './Weather';

//<Number|0>
function App() {
  //const [todos, setTodos] = useState(() => createTodos());  blijft hem steeds callen 
  //const [todos, setTodos] = useState(createInitialTodos);   werkt als initializer en called 1 keer
  const [version, setVersion] = useState(0);
  const [firstName, setFirstName] = useState('');

  const handleReset = () => {
    setVersion(version + 1);
  }

  return (
    <div className="App">
      <header>
        <div className='headDiv1'>
          <ShowWeather />
        </div>
        <div className='headDiv'></div>
        <div className='headDiv'></div>
      </header>
      <div className="App-header">
      <label>
        First name:
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      {firstName !== '' && <p>Your name is {firstName}.</p>}
      <blockquote contenteditable="true">
        <p>Edit this content to add your own quote</p>
      </blockquote>
      <TodoList />
      <UseCoin name='eth'/>
      <UseCoin name='btc' />
      <MouseTracker />
      <button onClick={handleReset}>Reset Component</button>
      <Form key={version} />
      </div>
    </div>
  );
}

export default App;
