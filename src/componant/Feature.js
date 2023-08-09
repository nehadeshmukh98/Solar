import React from 'react'
import HomePage from './HomePage'
import './HomePage.css'
import working from './images/pexels-los-muertos-crew-8853501.jpg'


export default function Feature() {
  return (
    <div className='Feature' id="feature">
      <div className='Feature-head'>
        <p>FEATURES</p>
        <h1>Why Choose Us</h1>
      </div>
      
      <div className='Feature-box'>
        
        <div className='text'>
          <div className='text1'>
            <h1>Experinced Staff</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, asperiores quo quos tempora voluptate, consequuntur temporibus !</p>
          </div>

          <div className='text1'>
            <h1>Pre Booking Online</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita similique ducimus deleniti culpa quia, voluptatibus a laborum </p>
          </div>

          <div className='text1'>
            <h1>Affordable Cost</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quia. Nobis aut esse omnis necessitatibus provident </p>
          </div>
        </div>
      
        <div>
          <img src={working} alt="" id='img1' />
        </div>
      </div>
    </div>
  )
}
