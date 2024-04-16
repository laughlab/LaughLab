import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">

      <div className="relative group">
        <Link className="absolute inset-0 z-10" to="#">
          <span className="sr-only">View</span>
        </Link>
        <div className="grid gap-2.5 relative group">
          <img
            alt="Technically Alcohol"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://placehold.co/600"
            width={400}
          />
          <div className="grid gap-1.5 p-4">
            <h3 className="font-semibold">Technically Alcohol</h3>
            <p className="text-sm leading-none">Technically Alcohol is a 2 ounce bottle of hand sanitizer, killing 99.9% of germs in as little as 15 seconds while on the go.</p>
            <h4 className="font-semibold">$4</h4>
          </div>
        </div>
        <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
          Buy now! ➡️
        </div>
      </div>

      <div className="relative group">
        <Link className="absolute inset-0 z-10" to="#">
          <span className="sr-only">View</span>
        </Link>
        <div className="grid gap-2.5 relative group">
          <img
            alt="Child of Divorce"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://placehold.co/600"
            width={400}
          />
          <div className="grid gap-1.5 p-4">
            <h3 className="font-semibold">Child of Divorce</h3>
            <p className="text-sm leading-none">Child of Divorce is a 2 ounce bottle of hand sanitizer that is lightly scented with peppermint essential oils.</p>
            <h4 className="font-semibold">$4</h4>
          </div>
        </div>
        <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
          Buy now! ➡️
        </div>
      </div>
      <div className="relative group">
        <Link className="absolute inset-0 z-10" to="#">
          <span className="sr-only">View</span>
        </Link>
        <div className="grid gap-2.5 relative group">
          <img
            alt="Shield Potion"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://placehold.co/600"
            width={400}
          />
          <div className="grid gap-1.5 p-4">
            <h3 className="font-semibold">Shield Potion</h3>
            <p className="text-sm leading-none">Shield Potion is a 2 ounce bottle of hand sanitizer that is lightly scented with bergamot essential oils.</p>
            <h4 className="font-semibold">$4</h4>
          </div>
        </div>
        <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
          Buy now! ➡️
        </div>
      </div>
      <div className="relative group">
        <Link className="absolute inset-0 z-10" to="#">
          <span className="sr-only">View</span>
        </Link>
        <div className="grid gap-2.5 relative group">
          <img
            alt="Go Piss Girl"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://placehold.co/600"
            width={400}
          />
          <div className="grid gap-1.5 p-4">
            <h3 className="font-semibold">Go piss girl</h3>
            <p className="text-sm leading-none">Go Piss Girl is a 2 ounce bottle of hand sanitizer that is lightly scented with lemon essential oils.</p>
            <h4 className="font-semibold">$4</h4>
          </div>
        </div>
        <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
          Buy now! ➡️
        </div>
      </div>
      <div className="relative group">
        <Link className="absolute inset-0 z-10" to="#">
          <span className="sr-only">View</span>
        </Link>
        <div className="grid gap-2.5 relative group">
          <img
            alt="Wine Wednesday"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://placehold.co/600"
            width={400}
          />
          <div className="grid gap-1.5 p-4">
            <h3 className="font-semibold">Wine Wednesday</h3>
            <p className="text-sm leading-none">Wine Wednesday is a 2 ounce bottle of hand sanitizer that is lightly scented with grapefruit essential oils.</p>
            <h4 className="font-semibold">$4</h4>
          </div>
        </div>
        <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
          Buy now! ➡️
        </div>
      </div>
    </div>
  );
};

export default Products;