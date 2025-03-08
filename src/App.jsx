import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // นำเข้าจาก react-router-dom
import Homepage from './pages/Homepage';
import Solutions from './pages/Solutions';

function App() {
  return (
    <Router> {/* ครอบแอปพลิเคชันด้วย Router */}
      {/* การตั้งค่า Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/solution" element={<Solutions />} />
      </Routes>
    </Router>
  );
}

export default App;
