import React from 'react'
import image1 from './images/service1.jpeg'
import image2 from './images/solar-services.jpg'
import image3 from './images/service4.jpeg'
import image4 from './images/residential.jpg'


function Services() {
  return (
    <div id='services'>
      <div className='Feature-head' id='serv'>
        <p>Services</p>
        <h1>We Provide</h1>
      </div>

      <div className='service-box'>
        <div className='serv-imgae'>
            <img src={image1} alt="" id='img' />
            <div className='overlay'></div>
            <div className='service-desc'>
              <h3>Solar items</h3>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam aperiam consectetur, eum, qui assumenda laboriosam a ipsam voluptatum iste distinctio nostrum earum provident quia placeat sit laborum, fugiat rerum.</p>
            </div>
        </div>
        
        <div className='serv-imgae'>
            <img src={image2} alt="" />
            <div className='overlay'></div>
            <div className='service-desc'>
              <h3>7 year warrenty</h3>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam aperiam consectetur, eum, qui assumenda laboriosam a ipsam voluptatum iste distinctio nostrum earum provident quia placeat sit laborum, fugiat rerum.</p>
            </div>
        </div>

        <div className='serv-imgae'>
            <img src={image3} alt="" />
            <div className='overlay'></div>
            <div className='service-desc'>
              <h3>Free service for 1 year</h3>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam aperiam consectetur, eum, qui assumenda laboriosam a ipsam voluptatum iste distinctio nostrum earum provident quia placeat sit laborum, fugiat rerum.</p>
            </div>
        </div>

        <div className='serv-imgae'>
            <img src={image4} alt="" />
            <div className='overlay'></div>
            <div className='service-desc'>
              <h3>Other tools</h3>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam aperiam consectetur, eum, qui assumenda laboriosam a ipsam voluptatum iste distinctio nostrum earum provident quia placeat sit laborum, fugiat rerum.</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Services
