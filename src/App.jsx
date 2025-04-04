import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'; // ใช้ HashRouter แทน BrowserRouter
import Homepage from './pages/Homepage';
import Solutions from './pages/Solutions';
import Navbar from './components/Navbar';
import InsightPage from './pages/Insight';
import Industries from './pages/Industries';
import Aboute from './pages/About';
import ContactComponent from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetail from './pages/Cart';
import Cartss from './pages/Carts';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Business from './pages/Business';
import CookieConsent from './components/Cookie';
import Vision from './pages/Vision';
import Addproduct from './pages/Addproduct';
import Portfolio from './pages/Portfolio';
import AccountPage from './pages/Account';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ซ่อนการแสดง Loading หลังจากโหลดเสร็จ
    const timer = setTimeout(() => {
      setLoading(false); // หยุดแสดง Loading
    }, 1000); // ทำให้ loading แสดงเป็นเวลา 2 วินาที

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>   
      {loading && <Loading />}
      <CookieConsent />
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/solution" element={<Solutions />} />
        <Route path="/insight" element={<InsightPage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/business" element={<Business />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/account" element={< AccountPage/>} />
        <Route path="/product/:productId" element={<ProductDetail />} /> {/* เส้นทางสำหรับรายละเอียดสินค้า */}
        <Route path="/allcart" element={<Cartss />} /> {/* เส้นทางสำหรับรายละเอียดสินค้า */}
      </Routes>

    </Router>
  );
}

export default App;
