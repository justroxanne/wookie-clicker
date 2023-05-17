import React, { useState, useRef, useContext } from 'react';
import { CountContext } from './utils/Context';
import Counters from './components/Header/Counters/Counters';
import SettingsButton from './components/Header/SettingsButton';
import ClickersContainer from './components/Main/ClickersContainer';
import ClickCounter from './components/Footer/ClickCounter';
import Overlay from './components/Overlay/Overlay';
import Confettis from './components/Confettis';
import Message from './components/EndGame/Message';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const target = useRef(null);
  const { count, displayConfetti, displayMessage } = useContext(CountContext);
  const displaySettings = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='App'>
      {displayConfetti && <Confettis />}
      {isVisible && <Overlay target={target} />}
      {displayMessage && <Message />}
      <header>
        <Counters key={`Counters-${count}`} />
        <SettingsButton displaySettings={displaySettings} target={target} />
      </header>
      <main>
        <ClickersContainer />
      </main>
      <footer>
        <ClickCounter key={`ClickCounter-${count}`} />
      </footer>
    </div>
  );
}

export default App;
