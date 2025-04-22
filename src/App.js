import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import CustomHeader from './pages/CustomHeader';

function App() {
  return (
    <Router>
      <div className="App bg-gray-900 text-white scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CustomHeader />
      </div>
    </Router>
  );
}

export default App;
