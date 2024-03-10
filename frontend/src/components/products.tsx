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
            alt="Cozy Blanket"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://placehold.co/600"
            width={400}
          />
          <div className="grid gap-1.5 p-4">
            <h3 className="font-semibold">Cozy Blanket</h3>
            <p className="text-sm leading-none">Warm and Soft for Chilly Nights</p>
            <h4 className="font-semibold">$29.99</h4>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 mb-2 z-20">
          Add to cart
        </div>
      </div>
      <div className="relative group">
        <Link className="absolute inset-0 z-10" to="#">
          <span className="sr-only">View</span>
        </Link>
        <div className="grid gap-2.5 relative group">
          <img
            alt="Autumn Mug"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://placehold.co/600"
            width={400}
          />
          <div className="grid gap-1.5 p-4">
            <h3 className="font-semibold">Autumn Mug</h3>
            <p className="text-sm leading-none">Enjoy Your Hot Beverages in Style</p>
            <h4 className="font-semibold">$12.99</h4>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 mb-2 z-20">
          Add to cart
        </div>
      </div>
      <div className="relative group">
        <Link className="absolute inset-0 z-10" to="#">
          <span className="sr-only">View</span>
        </Link>
        <div className="grid gap-2.5 relative group">
          <img
            alt="Fall Fragrance Candle"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://placehold.co/600"
            width={400}
          />
          <div className="grid gap-1.5 p-4">
            <h3 className="font-semibold">Fall Fragrance Candle</h3>
            <p className="text-sm leading-none">Fill Your Space with a Cozy Scent</p>
            <h4 className="font-semibold">$16.99</h4>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 mb-2 z-20">
          Add to cart
        </div>
      </div>
      <div className="relative group">
        <Link className="absolute inset-0 z-10" to="#">
          <span className="sr-only">View</span>
        </Link>
        <div className="grid gap-2.5 relative group">
          <img
            alt="Autumn Leaves Wall Art"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://placehold.co/600"
            width={400}
          />
          <div className="grid gap-1.5 p-4">
            <h3 className="font-semibold">Autumn Leaves Wall Art</h3>
            <p className="text-sm leading-none">Decorate Your Space with Nature's Beauty</p>
            <h4 className="font-semibold">$39.99</h4>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 mb-2 z-20">
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default Products;