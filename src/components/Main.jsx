import React from 'react'
import image from './../images/mainimage.jpg'
import Destination from './Destination'
import { PiBoatThin } from "react-icons/pi";
import { PiAirplaneTakeoffThin } from "react-icons/pi";
import { LiaBusSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa6";
import PopularCard from './PopularCard';
import PhoneNumber from './PhoneNumber';
import Footer from './Footer';

const Main = () => {
  return (
    <>
        <div className='w-[80vw] m-auto relative mt-3 '>
            <img className='w-full h-[80vh] rounded-3xl' src={image} alt="" />
            <div className='bg-black absolute top-0 opacity-10 rounded-3xl w-full h-[80vh]'></div>
            <h1 className='text-6xl font-bold text-white top-40 left-32 absolute w-[39vw] leading-snug tracking-wide'>Live your dream destinations.</h1>
            <p className='absolute bottom-48 font-semibold tracking-wider text-xl  text-white left-32'>Your Experience Begins With Ours</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-4 mt-28'>
            <div>
                <h1 className='font-bold text-4xl'>Popular Destinations</h1>
            </div>
            <div>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis!</p>
            </div>
            <div>
                <p className='font-semibold'>All Destination</p>
            </div>
        </div>
        <Destination/>

        <div className='flex py-12 m-auto justify-evenly items-center bg-red-50 mt-14  '>
          <div className='flex flex-col justify-center items-center gap-7'>
            <div>
              <PiBoatThin size={60}  className='text-green-600  p-3 rounded-full bg-blue-100'/>
            </div>
            <h1 className='text-xl text-gray-950'>Handpicked Destination</h1>
            <p className=' w-96 text-gray-700 text-center'>Our strict screening process means you’re only seeing the best quality treks.</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-8'>
            <div>
            <PiAirplaneTakeoffThin size={60}  className='text-green-600  p-3 rounded-full bg-blue-100' />
            </div>
            <h1 className='text-xl text-gray-950'>Best Price Guaranteed</h1>
            <p className='w-96 text-gray-700 text-center'>Our Best Price Guarantee means that you can be sure of booking at the best rate.</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-8'>
          <div>
            <LiaBusSolid size={60}  className='text-green-600  p-3 rounded-full bg-blue-100' />
            </div>
            <h1 className='text-xl text-gray-950'>24/7 Customer Service</h1>
            <p className='w-96 text-gray-700 text-center'>Our customer are standing by 24/7 to make your experience incredible.</p>
          </div>
        </div>

        <div className='text-center pt-14'>
            <h1 className='font-bold text-4xl'>Popular Tours</h1>
        </div>



        <div>
            {/* <div className='shadow-md flex flex-col justify-center rounded-t-3xl rounded-b-3xl mb-10  w-[18vw]'>
                <div className='overflow-hidden rounded-t-3xl'>
                    <img className='w-[18vw] h-[25vh] object-cover rounded-t-3xl hover:scale-110 transition-all ease-in duration-500 cursor-grab' src={image} alt="" />
                </div>
                <div className='flex flex-col justify-center px-4 pt-4 gap-4'>
                    <h1 className='text-xl text-gray-950'>Venice, Rome and Milan-9 Days</h1>
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-yellow-600'/>
                        <p>4.9</p>
                    </div>
                    <div className='flex items-center pb-5 '>
                        <p>From $960</p>
                    </div>
                </div>
            </div> */}
            <PopularCard/>
        </div>
        <PhoneNumber/>
        <Footer/>
    </>
  )
}

export default Main