import './App.css';
import React, {useState, useRef } from 'react'
import Counters from './components/header/Counters';
import SettingsButton from './components/header/SettingsButton';
import ClickersContainer from './components/Main/ClickersContainer';
import ClickCounter from './components/Footer/ClickCounter';
import Overlay from './components/Overlay/Overlay';

function App() {

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const target = useRef(null);

  const displaySettings = () => {
    setIsVisible(!isVisible);
  }

  const moreCredits = () => {
      setCount(count + 1);
  }

  return (
    <div className="App">
      <header>
        <Counters count={count}/>
        <SettingsButton displaySettings={displaySettings} target={target}/>
      </header>
      <section>
        {isVisible && <Overlay  target={target}/>}
      </section>
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
