import React from "react";
import image from './../images/winter.jpg'
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

const Explore = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-28">
        <h1 className="text-5xl font-semibold">Explore popular trips</h1>
        <p className="text-gray-700 text-xl mt-5">
          Get started with handpicked top rated trips.
        </p>
      </div>

{/* -------------- card ----------------------- */}

      <div className="w-[30vw] flex flex-col ml-8 mb-10 shadow rounded-md hover:shadow-xl mt-10 ">
        <div className="overflow-hidden">
            <img className="w-full rounded-t-md hover:scale-110 transition-all ease-in duration-500" src={image} alt="" />
        </div>
        <div className="px-5 ">
        <h1 className="py-6 text-xl text-gray-950">Winter Spiti Valley</h1>
        <hr className="w-[27vw] mx-auto mt-3 mb-6" />
        <div className="flex items-center gap-3 pb-5">
            <div>
                <CiLocationOn size={20} className="text-green-500"/>
            </div>
            <div className="text-gray-700">Winter Spiti Valley Backpacking</div>
        </div>
        <div className="flex justify-between items-center pb-4">
            <div className="flex items-center gap-3">
                <div>
                    <CiClock2 size={20} className="text-green-500"/>
                </div>
                <div className="text-gray-700">8 Days</div>
            </div>
            <div className="text-gray-950 font-bold text-2xl">₹0</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
