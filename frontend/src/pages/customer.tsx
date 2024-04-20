import 'tailwindcss/tailwind.css';

import { useState, useEffect } from 'react';

import Navbar from '../components/navbar.jsx';
import Splash from '../components/splash.tsx';
import FeaturedProducts from '../components/featuredproducts.tsx';
import PopularProducts from '../components/popularproducts.tsx';
import Popup from '../components/popup.tsx';
import Footer from '../components/footer.tsx';

const CustomerPage: React.FC = () => {
  const [popupState, setPopupState] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (popupState) {
      const timeoutId = setTimeout(() => {
        setPopupState(false);
        window.open('https://secure.touchnet.net/C20159_ustores/web/store_cat.jsp?STOREID=148&CATID=698', '_blank');
      }, 2000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(timeoutId);
    }
  }, [popupState]);

  function handleClick() {
    setPopupState(true);
  }

  return (
    //this is the main page for laughlab.org
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <Splash />
      {/* Pop is absolute positioned so no matter where */}
      {popupState && <Popup />}
      <h1 id='product' className='h1 mb-1 mt-1 text-4xl font-extrabold text-gray-900 pt-6'> Featured Product!</h1>
      <p className='pb-6'>Buy our products online for a quick pickup at our table!</p>
      {/* Limited-Time Offer! */}
      {/* [for showing the new drop(s)] [countdown timer here] */}
      {/* <div className="flex justify-center"></div> */}
      <div onClick={handleClick} className='pb-5'>
        <FeaturedProducts />
      </div>

      <h1 className='h1 mb-1 mt-1 text-4xl  font-extrabold text-gray-900 py-6'>Most Popular</h1>
      <div onClick={handleClick} className='pb-5'>
        <PopularProducts />
      </div>



      {/* Table */}
      <h1 id='table' className='h1 mb-1 mt-1 text-4xl  font-extrabold text-gray-900 pt-6 pb-1'>Our Table Schedule</h1>
      <p className='pb-6'>You can find us in-person on the OSU campus at these times!</p>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border border-gray-800 px-1 py-2">Date</th>
              <th className="border border-gray-800 px-1 py-2">Time</th>
              <th className="border border-gray-800 px-1 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {/* Week 3 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">4/17 Wednesday</td>
              <td className="border border-gray-800 px-1 py-2">2-4pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">4/19 Friday</td>
              <td className="border border-gray-800 px-1 py-2">12-2pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>

            {/* Week 1 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">4/25 Thursday</td>
              <td className="border border-gray-800 px-1 py-2">2-4pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">4/25 Thursday</td>
              <td className="border border-gray-800 px-1 py-2">4-6pm</td>
              <td className="border border-gray-800 px-1 py-2">SEC Plaza</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">4/26 Friday</td>
              <td className="border border-gray-800 px-1 py-2">12-2pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>

            {/* Week 5 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">4/30 Tuesday</td>
              <td className="border border-gray-800 px-1 py-2">12-2pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/1 Wednesday</td>
              <td className="border border-gray-800 px-1 py-2">3-5pm</td>
              <td className="border border-gray-800 px-1 py-2">SEC Plaza</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/3 Friday</td>
              <td className="border border-gray-800 px-1 py-2">12-2pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>

            {/* Week 6 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/8 Wednesday</td>
              <td className="border border-gray-800 px-1 py-2">2-4pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/9 Thursday</td>
              <td className="border border-gray-800 px-1 py-2">2-4pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/10 Friday</td>
              <td className="border border-gray-800 px-1 py-2">TBD</td>
              <td className="border border-gray-800 px-1 py-2">SEC Plaza</td>
            </tr>

            {/* Week 7 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/14 Tuesday</td>
              <td className="border border-gray-800 px-1 py-2">4-6pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/17 Friday</td>
              <td className="border border-gray-800 px-1 py-2">12-2pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>

            {/* Week 8 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/20 Monday</td>
              <td className="border border-gray-800 px-1 py-2">4-6pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/24 Friday</td>
              <td className="border border-gray-800 px-1 py-2">12-2pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>

            {/* Week 9 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/28 Tuesday</td>
              <td className="border border-gray-800 px-1 py-2">4-6pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>


            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <Footer />

    </div>
  );
};

export default CustomerPage;