import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckOutPage from './pages/CheckOutPage';
import PaymentStatusPage from './pages/PaymentStatusPage';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/mens' element={<HomePage category="men"/>}/>
      <Route path='/women' element={<HomePage  category="women"/>}/>
      <Route path='/kids' element={<HomePage  category="kid"/>}/>
      <Route path='/product/:id' element={<ProductDetailPage/>}/>
      <Route path='/checkout' element={<CheckOutPage/>}/>
      <Route path="/payment-status" element={<PaymentStatusPage/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
