import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import { Home } from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <NavBar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
