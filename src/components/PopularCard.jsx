import React from 'react'
import Popular from './Popular'
import image from './../images/goa.jpg'
import image1 from './../images/india gate.jpg'
import image2 from './../images/red fort.jpg'
import image3 from './../images/tajmahal.jpg'
import image4 from './../images/africa.jpg'
import image5 from './../images/usa.jpg'

const PopularCard = () => {
  return (
    <>
        <div className='grid grid-cols-4 mt-14 w-[78vw] mx-auto gap-6'>
            <Popular image={image5} name="Venica, Rome and Milan-9 Days" price="960" />
            <Popular image={image4} name="Istanbul, Ankara" price="800" />
            <Popular image={image} name="Berlin" price="850" />
            <Popular image={image1} name="Sydney" price="2200" />
        </div>
    </>
  )
}

export default PopularCard