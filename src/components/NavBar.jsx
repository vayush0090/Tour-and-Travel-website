import React from 'react'
import image from './../images/Logo.jpg'


const NavBar = () => {
  return (
    <>
        <div>
            <nav className='flex justify-between items-center py-7 px-32'>
                <div>
                    <h1 className='text-3xl font-semibold'>Travel</h1>
                </div>
                <div>
                    <ul className='flex justify-between items-center gap-7'>
                        <li>Home</li>
                        <li>Destination</li>
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
}

export default NavBar