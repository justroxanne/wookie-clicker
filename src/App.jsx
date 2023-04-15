import './App.css';
import Counters from './components/header/Counters';
import SettingsButton from './components/header/SettingsButton';

function App() {
  return (
    <div className="App">
      <header>
        <Counters />
        <SettingsButton />
      </header>
    </div>
  );
}

export default App;
