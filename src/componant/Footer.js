import React from 'react'
import img from './images/solar-cell.png'

function Footer() {
  return (
    <div className='' id='footer'>
      <img src={img} alt="" className='footer-img'/>
      <div className='Feature-head'>
            <p>CONTACT</p>
            <h1>Visit Shop Today</h1>
      </div>
      <div className='footer-row'>
            <div className='footer-left'>
                <h1>Opening Hours</h1>
                <p>
                  {' '}
                    <i class='far fa-clock'></i>Monday to Friday - 10am to 10pm
                </p>
                <p>
                    {' '}
                    <i class='far fa-clock'></i>Saturday to Sunday - 10am to 5pm
                </p>
            </div>

            <div className='footer-right'>
                <h1>Get In Touch</h1>
                <p>
                    Infront of Ramraje Shopping Center,Shiv agency Phaltan <i class='fas fa-map-marker-alt'></i>
                </p>

                <p>
                    hemantdeshmukh143@gmail.com <i class='far fa-paper-plane'></i>
                </p>

                <p>
                    9552528922 <i class='fas fa-phone'></i>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer
