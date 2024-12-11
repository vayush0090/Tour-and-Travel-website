import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
        <div className='flex justify-between items-center px-20 pb-10'>
            <div className='flex flex-col gap-8' >
                <div>
                    <h1 className='text-xl font-semibold text-gray-950'>Travel Agency</h1>
                </div>
                <div className='w-[20vw]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est perspiciatis itaque assumenda vel odit tempore facere voluptatem sed cum!</p>
                </div>
            </div>
            <div className='flex gap-48 justify-between items-center'>
                <div className='flex flex-col items-center gap-10'>
                    <div>
                        <h1 className='text-xl font-semibold text-gray-950'>Destinations</h1>
                    </div>
                    <div >
                        <p>Eygpt</p>
                        <p>Turkey</p>
                        <p>USA</p>
                        <p>France</p>
                        <p>Greece</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-10'>
                    <div>
                        <h1 className='text-xl font-semibold text-gray-950'>Useful Links</h1>
                    </div>
                    <div>
                        <p>About Us</p>
                        <p>Travel Blog</p>
                        <p>Be Our Partner</p>
                        <p>F.A.Q</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-11'>
                    <div>
                        <h1 className='text-xl font-semibold text-gray-950'>Contact</h1>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <div className='flex items-center gap-3'>
                            <IoMdCall/>
                        <p>(858) 577-3477</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <IoMail/>
                        <p>info@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <CiLocationOn/>
                        <p>43 W . Paris</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer