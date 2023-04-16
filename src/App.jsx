import './App.css';
import React, {useState } from 'react'
import Counters from './components/header/Counters';
import SettingsButton from './components/header/SettingsButton';
import ClickersContainer from './components/Main/ClickersContainer';
import ClickCounter from './components/Footer/ClickCounter';

function App() {

  const [count, setCount] = useState(0);

  const moreCredits = () => {
      setCount(count + 1);
  }

  return (
    <div className="App">
      <header>
        <Counters />
        <SettingsButton />
      </header>
      <main>
        <ClickersContainer moreCredits={moreCredits} count={count}/>
      </main>
      <footer>
        <ClickCounter count={count}/>
      </footer>
    </div>
  );
}

export default App;
