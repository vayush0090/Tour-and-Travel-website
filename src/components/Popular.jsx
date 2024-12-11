import React from 'react'
import { FaStar } from "react-icons/fa6";

const Popular = ({image,name,price}) => {
  return (
    <>
        <div className=' shadow-md hover:shadow-2xl flex flex-col justify-center rounded-t-3xl rounded-b-3xl  overflow-hidden  w-[18vw] '>
                <div className='overflow-hidden rounded-t-3xl h-full '>
                    <img className='w-[18vw] h-[24vh] object-cover rounded-t-3xl hover:scale-110 transition-all ease-in duration-500 cursor-grab' src={image} alt="" />
                </div>
                <div className='flex flex-col justify-center px-4 pt-4 gap-4'>
                    <h1 className='text-xl text-gray-950'>{name}</h1>
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-yellow-600'/>
                        <p>4.9</p>
                    </div>
                    <div className='flex items-center pb-5 '>
                        <p>From ${price}</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Popular