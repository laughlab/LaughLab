import '../spinner.css';

const Popup = () => {
  return (
    <div className='absolute z-30'>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-lg m-8 mb-0">
          {/* if possible make an svg spinning animation that is in the shape of a hand sanitizer bottle and changes color each spin */}
          <h1 className="h1 m-8">You will be redirected to our TouchNet ordering store soon!</h1>
          <a className='text-sm link mb-8 block text-blue-500'>https://secure.touchnet.net/C20159_ustores/web/store_cat.jsp?STOREID=148&CATID=698</a>
          <div className="lds-spinner m-8"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
      
    </div>
  );
};

export default Popup;



// used for the popup telling people being redirecting to touchnet