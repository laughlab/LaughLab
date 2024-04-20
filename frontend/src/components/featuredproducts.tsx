import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {
  
  return (

    <>
      <div className="flex justify-center items-center">
        <div className="relative group sm:w-96">
          <Link className="absolute inset-0 z-10" to="#">
            <span className="sr-only">View</span>
          </Link>
          <div className="grid gap-2.5 relative group">
            <img
              alt="Go Piss Girl"
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              height={400}
              src="https://i.imgur.com/qrF4FPA.png"
              width={400}
            />
            <div className="grid gap-1.5 p-4">
              <h3 className="font-semibold" id='product'>Go piss girl</h3>
              <p className="text-sm leading-none">Go Piss Girl is a 2 ounce bottle of hand sanitizer that is lightly scented with lemon essential oils.</p>
              <h4 className="font-semibold">$4</h4>
            </div>
          </div>
          <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
            Buy now! ➡️
          </div>
        </div>
      </div>
    </>
    
  );
};

export default FeaturedProducts;