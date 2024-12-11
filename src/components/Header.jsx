import React from 'react'
import image from './../images/IMGheader.jpg'
import { CiLocationOn } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { PiHeadphonesThin } from "react-icons/pi";

const Header = () => {
  return (
    <>
        <div className='relative'>
          <img src={image} className='w-full h-96 object-cover object-center top-0 '  alt="" />
          <div className='absolute opacity-30 top-0 w-full h-96 bg-black'></div>
          <h1 className='text-2xl  text-white top-24 left-[620px] absolute'>We Mean It When We Say</h1>
          <h2 className='font-extrabold text-white top-36 left-[460px]  absolute text-4xl'>Your Experience Begins With Ours</h2>
          
        </div>



        <div className='flex py-12 m-auto justify-evenly items-center bg-red-50  '>
          <div className='flex flex-col justify-center items-center gap-7'>
            <div>
              <CiLocationOn size={60}  className='text-green-600  p-3 rounded-full bg-blue-100'/>
            </div>
            <h1 className='text-xl text-gray-950'>Handpicked Destination</h1>
            <p className=' w-96 text-gray-700 text-center'>Our strict screening process means you’re only seeing the best quality treks.</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-8'>
            <div>
            <CiWallet size={60}  className='text-green-600  p-3 rounded-full bg-blue-100' />
            </div>
            <h1 className='text-xl text-gray-950'>Best Price Guaranteed</h1>
            <p className='w-96 text-gray-700 text-center'>Our Best Price Guarantee means that you can be sure of booking at the best rate.</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-8'>
          <div>
            <PiHeadphonesThin size={60}  className='text-green-600  p-3 rounded-full bg-blue-100' />
            </div>
            <h1 className='text-xl text-gray-950'>24/7 Customer Service</h1>
            <p className='w-96 text-gray-700 text-center'>Our customer are standing by 24/7 to make your experience incredible.</p>
          </div>
        </div>
    </>
  )
}

export default Header