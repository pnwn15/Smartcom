import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ใช้ HashRouter แทน BrowserRouter
import Homepage from './pages/Homepage';
import Solutions from './pages/Solutions';
import Navbar from './components/Navbar';
import InsightPage from './pages/Insight';

function App() {
  return (
    <Router > {/* ใช้ HashRouter เพื่อหลีกเลี่ยงปัญหาของ BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/solution" element={<Solutions />} />
        <Route path="/insight" element={<InsightPage />} />
      </Routes>
    </Router>
  );
}

export default App;
