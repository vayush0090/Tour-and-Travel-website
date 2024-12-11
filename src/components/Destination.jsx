import React from 'react'
import DestinationCard from './DestinationCard'
import image from './../images/goa.jpg'
import image1 from './../images/india gate.jpg'
import image2 from './../images/red fort.jpg'
import image3 from './../images/tajmahal.jpg'
import image4 from './../images/africa.jpg'
import image5 from './../images/usa.jpg'

const Destination = () => {
  return (
    <>
        <div className='grid grid-cols-3 mt-16 w-[70vw] mx-auto gap-3 items-center justify-center'>
        <DestinationCard image={image} name="Goa" />
        <DestinationCard image={image1} name="India Gate" />
        <DestinationCard image={image2} name="Red Fort" />
        <DestinationCard image={image3} name="Taj Mahal" />
        <DestinationCard image={image4} name="Africa" />
        <DestinationCard image={image5} name="USA" />
        </div>
    </>
  )
}

export default Destination