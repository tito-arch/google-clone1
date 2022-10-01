import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchPage from './Components/SearchPage'

function App() {
  return (
    // BEM
  
      <Router>
      <div className="app">
        <Routes>
          
          <Route path="search" element={<SearchPage/>}/>
          <Route path="/" element={<Home />} />

        </Routes>
        </div>
      </Router>

  );
}

export default App;
