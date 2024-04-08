import 'tailwindcss/tailwind.css';

import { useState } from 'react';

// import Navbar from '../components/navbar.tsx';
import Splash from '../components/splash.tsx';
import Products from '../components/products.tsx';
import Popup from '../components/popup.tsx';
// import Footer from '../components/footer.tsx';

const CustomerPage: React.FC = () => {
  const [popupState, setPopupState] = useState(false);

  return (
    //this is the main page for laughlab.org
    <div onClick={handleClick}>
      {/* <Navbar/> */}
      <Splash />

      <h1 className='h1 mb-4 mt-4 text-4xl font-extrabold text-gray-900'>Products</h1>
      {popupState && <Popup />}

      <Products />
      {/* Footer */}
    </div>
  );
};

export default CustomerPage;

function handleClick() {
  setPopupState(true);
}