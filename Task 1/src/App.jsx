import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from "react";


function App() {
  // Sidebar collapse state
  const [collapsed, setCollapsed] = useState(
  window.innerWidth <= 768
);
  return(
    <Router>
      <div>
        <Header/>
        <div className="layout">
        {(!collapsed || window.innerWidth > 768) && (
  <Sidebar collapsed={collapsed} />
)}
        <main className="main-content">
          <button className="toggle-btn"
  onClick={() => setCollapsed(!collapsed)} >
  ☰
</button>

        <Routes>
          <Route path="/" element={<Overview/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
        </main>
      </div>
      </div>
    </Router>
  );
}
export default App;