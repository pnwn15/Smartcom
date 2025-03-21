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

function App() {
    

  return (
    <Router>
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
        <Route path="/product/:productId" element={<ProductDetail />} /> {/* เส้นทางสำหรับรายละเอียดสินค้า */}
        <Route path="/allcart" element={<Cartss />} /> {/* เส้นทางสำหรับรายละเอียดสินค้า */}
      </Routes>

    </Router>
  );
}

export default App;
