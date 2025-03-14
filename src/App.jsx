import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // ใช้ HashRouter แทน BrowserRouter
import Homepage from './pages/Homepage';
import Solutions from './pages/Solutions';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router> {/* ใช้ HashRouter เพื่อหลีกเลี่ยงปัญหาของ BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/solution" element={<Solutions />} />
      </Routes>
    </Router>
  );
}

export default App;
