import React from 'react';
import '../spinner.css';

const Popup = () => {
  return (
    <div className='absolute z-30'>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-lg">
          {/* if possible make an svg spinning animation that is in the shape of a hand sanitizer bottle and changes color each spin */}
          <h1 className="h1">You will be redirected to our ordering website: Touchnet</h1>
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
      
    </div>
  );
};

export default Popup;



// used for the popup telling people being redirecting to touchnet