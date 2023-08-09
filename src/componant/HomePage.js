import React from 'react'
import './HomePage.css'
import logo from '../componant/images/solar-cell.png'


function HomePage() {
  return (
    <div className='header'>
      <nav>
        <div>
            <img className='logo' src={logo} alt="" />
        </div>
        <div className='navbar'>
         <ul >
            <li><a href="#">Home</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#test">Testimonial</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        <div className='subhead'>
            <h1 id='head1'>RoyalSun Solar</h1>
            <p>Save Life Save Energy</p>
        </div>

        <div className='btn1'>    
          <a className='btn'>Find Out</a>
          <a className='btn'>Read</a>
        </div>
      </nav>
    </div>
  )
}

export default HomePage
