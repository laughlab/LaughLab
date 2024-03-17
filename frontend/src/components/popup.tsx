import React from 'react';
import '../spinner.css';

const Popup = () => {
  return (
    <div className='absolute z-30'>
      <h1 className="h1">You will be redirected to our ordering website: Touchnet</h1>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Popup;



// used for the popup telling people being redirecting to touchnet