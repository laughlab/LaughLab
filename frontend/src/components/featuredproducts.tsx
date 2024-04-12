import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {

  return (
    // trying to center featured products but not working
    // <div className="flex flex-wrap items-center justify-center ">
    //   <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

    //     <div className="relative group">
    //       <Link className="absolute inset-0 z-10" to="#">
    //         <span className="sr-only">View</span>
    //       </Link>
    //       <div className="grid gap-2.5 relative group">
    //         <img
    //           alt="Cozy Blanket"
    //           className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
    //           height={400}
    //           src="https://placehold.co/600"
    //           width={400}
    //         />
    //         <div className="grid gap-1.5 p-4">
    //           <h3 className="font-semibold">am i the problem?</h3>
    //           <p className="text-sm leading-none">description</p>
    //           <h4 className="font-semibold">$4</h4>
    //         </div>
    //       </div>
    //       <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
    //         Buy now ➡️
    //       </div>
    //     </div>

    //   </div>
    // </div>
    <>
      <div className="flex justify-center items-center">
        <div className="relative group sm:w-96">
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
              <h3 className="font-semibold">am i the problem?</h3>
              <p className="text-sm leading-none">description</p>
              <h4 className="font-semibold">$4</h4>
            </div>
          </div>
          <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
            Buy now! ➡️
          </div>
        </div>
      </div>
    </>
    // <div className="flex justify-center w-full">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

    //     <div className="relative group">
    //       <Link className="absolute inset-0 z-10" to="#">
    //         <span className="sr-only">View</span>
    //       </Link>
    //       <div className="grid gap-2.5 relative group">
    //         <img
    //           alt="Cozy Blanket"
    //           className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
    //           height={400}
    //           src="https://placehold.co/600"
    //           width={400}
    //         />
    //         <div className="grid gap-1.5 p-4">
    //           <h3 className="font-semibold">am i the problem?</h3>
    //           <p className="text-sm leading-none">description</p>
    //           <h4 className="font-semibold">$4</h4>
    //         </div>
    //       </div>
    //       <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
    //         Buy now ➡️
    //       </div>
    //     </div>

        // <div className="relative group">
        //   <Link className="absolute inset-0 z-10" to="#">
        //     <span className="sr-only">View</span>
        //   </Link>
        //   <div className="grid gap-2.5 relative group">
        //     <img
        //       alt="Cozy Blanket"
        //       className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        //       height={400}
        //       src="https://placehold.co/600"
        //       width={400}
        //     />
        //     <div className="grid gap-1.5 p-4">
        //       <h3 className="font-semibold">am i the problem?</h3>
        //       <p className="text-sm leading-none">description</p>
        //       <h4 className="font-semibold">$4</h4>
        //     </div>
        //   </div>
        //   <div className="btn bg-blue-950 my-2 py-3 rounded z-20 text-white hover:">
        //     Buy now ➡️
        //   </div>
        // </div>

    //   </div>
    // </div>
  );
};

export default FeaturedProducts;