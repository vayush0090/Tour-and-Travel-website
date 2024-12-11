import React from 'react'
import image1 from './../images/tajmahal.jpg'

const DestinationCard = ({image,name}) => {
  return (
    <>
        <div className='w-[23vw]  overflow-hidden  relative '>
            
                <img className='rounded-3xl w-[23vw]   h-[35vh] object-cover' src={image} alt="" />
            <p className='absolute bottom-6 left-28 font-semibold text-xl text-white'>{name}</p>
        </div>
    </>
  )
}

export default DestinationCard