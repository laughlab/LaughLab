import './App.css';
import './index.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar.jsx';
import CustomerPage from './pages/customer.tsx';
import BusinessPage from './pages/business.tsx';
import AboutPage from './pages/about.tsx';

function App() {
  

  return (
    <div className="overscroll-hidden">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< CustomerPage/>}>
          </Route>
          <Route path="/business" element={< BusinessPage/>}>
          </Route>
          <Route path="/about" element={< AboutPage/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
