import 'tailwindcss/tailwind.css';

// import Navbar from '../components/navbar.tsx';
// import Splash from '../components/splash.tsx';
import Products from '../components/products.tsx';
// import Popup from '../components/popup.tsx';
// import Footer from '../components/footer.tsx';

const CustomerPage: React.FC = () => {
  return (
    //this is the main page for laughlab.org
    <div>
      {/* <Navbar/> */}
      {/* <Splash/> */}
      <p>Welcome to the Main page!</p>
      {/* <Popup/> */}
      <Products />
      {/* Navbar */}
    </div>
  );
};

export default CustomerPage;