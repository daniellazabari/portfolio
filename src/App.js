import logo from './logo.svg';
import './App.css';
import Cursor from './components/Cursor/Cursor';
import CursorCopy from './components/CursorCopy/CursorCopy';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Employment from './pages/Employment/Employment';
import Projects from './pages/Projects/Projects';
import Technologies from './pages/Technologies/Technologies';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Employment />
      <Technologies />
      <Contact />
      <CursorCopy />
    </div>
  );
}

export default App;
