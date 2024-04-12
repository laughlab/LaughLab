import 'tailwindcss/tailwind.css';

import { useState } from 'react';

// import Navbar from '../components/navbar.tsx';
import Splash from '../components/splash.tsx';
import FeaturedProducts from '../components/featuredproducts.tsx';
import PopularProducts from '../components/popularproducts.tsx';
import Popup from '../components/popup.tsx';
// import Footer from '../components/footer.tsx';

const CustomerPage: React.FC = () => {
  const [popupState, setPopupState] = useState(false);

  return (
    //this is the main page for laughlab.org
    <div onClick={handleClick}>
      {/* <Navbar/> */}
      <Splash />
      {/* its absolute positioned so no matter where */}
      {popupState && <Popup />}
      <h1 className='h1 mb-4 mt-4 text-4xl font-extrabold text-gray-900'>Limited-Time Offer! [for showing the new drop(s)] [countdown timer here]</h1>
      {/* <div className="flex justify-center"></div> */}

      <FeaturedProducts />




      <h1 className='h1 mb-4 mt-4 text-4xl font-extrabold text-gray-900'>Most Popular</h1>
      <PopularProducts />
      {/* Footer */}

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">
            {/* <!-- Content for the first grid item --> */}
          </div>
          <div className="bg-white p-4 shadow-md">
            {/* <!-- Content for the second grid item --> */}
          </div>
          <div className="bg-white p-4 shadow-md">
            {/* <!-- Content for the third grid item --> */}
          </div>
          {/* <!-- Add more grid items as needed --> */}
        </div>
      </div>

    </div>
  );
};

export default CustomerPage;

function handleClick() {
  setPopupState(true);
}