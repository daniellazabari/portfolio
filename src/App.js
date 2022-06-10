import logo from './logo.svg';
import './App.css';
import Cursor from './components/Cursor/Cursor';
import CursorCopy from './components/CursorCopy/CursorCopy';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <CursorCopy />
    </div>
  );
}

export default App;
