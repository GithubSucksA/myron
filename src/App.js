import './App.css';
import { useState } from 'react';
import TodoList from './Date';
import UseCoin from './useCoin';
import MouseTracker from './mouse';
import ShowWeather from './Weather';
import Todos from './Todo';
import RequestTracker from './Tracker';

function App() {

  const [firstName, setFirstName] = useState('');

  return (
    <div className="App">
      <div className='container'>
        <div className='divver'>
          <ShowWeather />
        </div>
        <div className='divver'>
          <Todos />
        </div>
        <div className='divver'>
          <RequestTracker />
        </div>
      </div>
      <div className="App-header">
      <div class="container">
        <label className='divver'>
          <p>First name:</p>
          <input value={firstName} onChange={e => setFirstName(e.target.value)} />
          {firstName !== '' && <p>Your name is {firstName}.</p>}
        </label>
        <div className='divver'>
          <blockquote contenteditable="true">
            <p>Edit this content to add your own quote</p>
          </blockquote>
        </div>
        <div className='divver'>
          <TodoList/>
        </div>
      </div>
      <div className='container'>
        <UseCoin name='eth'/>
        <UseCoin name='btc'/>
        <MouseTracker />
      </div>
      <div className='container'>
        <div className='divver'>

        </div>
        <div className='divver'>

        </div>
        <div className='divver'>

        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
