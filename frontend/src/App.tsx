import './App.css';
import './index.css';
import 'tailwindcss/tailwind.css';
import { HashRouter, Routes, Route, } from 'react-router-dom';

import CustomerPage from './pages/customer.tsx';
// import BusinessPage from './pages/business.tsx';
// import AboutPage from './pages/about.tsx';

function App() {
  

  return (
    <div className="overscroll-hidden">
      {/* <Navbar /> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={< CustomerPage/>}>
          </Route>
          {/* <Route path="/business" element={< BusinessPage/>}>
          </Route>
          <Route path="/about" element={< AboutPage/>}>
          </Route> */}
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
