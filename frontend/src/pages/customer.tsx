import 'tailwindcss/tailwind.css';

import { useState } from 'react';


import Splash from '../components/splash.tsx';
import FeaturedProducts from '../components/featuredproducts.tsx';
import PopularProducts from '../components/popularproducts.tsx';
import Popup from '../components/popup.tsx';
import Footer from '../components/footer.tsx';


const CustomerPage: React.FC = () => {
  const [popupState, setPopupState] = useState(false);

  return (
    //this is the main page for laughlab.org
    <div onClick={handleClick}>
      {/* <Navbar/> */}
      <Splash />
      {/* its absolute positioned so no matter where */}
      {popupState && <Popup />}
      <h1 className='h1 mb-1 mt-1 text-4xl  font-extrabold text-gray-900 py-6'>Limited-Time Offer! [for showing the new drop(s)] [countdown timer here]</h1>
      {/* <div className="flex justify-center"></div> */}

      <FeaturedProducts />

      <h1 className='h1 mb-1 mt-1 text-4xl  font-extrabold text-gray-900 py-6'>Most Popular</h1>
      <PopularProducts />


      {/* Table */}
      <h1 className='h1 mb-1 mt-1 text-4xl  font-extrabold text-gray-900 pt-6 pb-1'>Our Table Schedule</h1>
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
              <td className="border border-gray-800 px-1 py-2">1/17 Wednesday</td>
              <td className="border border-gray-800 px-1 py-2">2-1pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">1/19 Friday</td>
              <td className="border border-gray-800 px-1 py-2">12-2pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>

            {/* Week 1 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">1/25 Thursday</td>
              <td className="border border-gray-800 px-1 py-2">2-1pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">1/25 Thursday</td>
              <td className="border border-gray-800 px-1 py-2">1-6pm</td>
              <td className="border border-gray-800 px-1 py-2">SEC Plaza</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">1/26 Friday</td>
              <td className="border border-gray-800 px-1 py-2">12-2pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>

            {/* Week 5 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">1/30 Tuesday</td>
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
              <td className="border border-gray-800 px-1 py-2">2-1pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/9 Thursday</td>
              <td className="border border-gray-800 px-1 py-2">2-1pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/10 Friday</td>
              <td className="border border-gray-800 px-1 py-2">TBD</td>
              <td className="border border-gray-800 px-1 py-2">SEC Plaza</td>
            </tr>

            {/* Week 7 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/11 Tuesday</td>
              <td className="border border-gray-800 px-1 py-2">1-6pm</td>
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
              <td className="border border-gray-800 px-1 py-2">1-6pm</td>
              <td className="border border-gray-800 px-1 py-2">Weatherford</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/21 Friday</td>
              <td className="border border-gray-800 px-1 py-2">12-2pm</td>
              <td className="border border-gray-800 px-1 py-2">Austin</td>
            </tr>

            {/* Week 9 */}
            <tr>
              <td className="border border-gray-800 px-1 py-2">5/28 Tuesday</td>
              <td className="border border-gray-800 px-1 py-2">1-6pm</td>
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

function handleClick() {
  setPopupState(true);
}