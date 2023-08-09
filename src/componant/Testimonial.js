import React from 'react'
import img1 from './images/user2.jpg'
import img2 from './images/user3.jpg'
import img3 from './images/user1.jpg'
function Testimonial() {
  return (
    <div id='test'>
      <div className='Feature-head' id='test1'>
        <p>TESTMONIAL</p>
        <h1>What Client Say</h1>
      </div>

      <div className='testmonial-row'>
        <div className='testmonial-col'>
            <div className='user'>
                <img src={img1} alt="" />
                <div className='userinfo'>
                    <h4>Sagar Gole</h4>
                    <small>@sagar</small>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam consequuntur illo quasi fugiat voluptate aliquid non voluptatum rerum hic aut amet velit accusantium, eum assumenda autem maxime. Doloremque, perspiciatis.</p>
        </div>

        <div className='testmonial-col'>
            <div className='user'>
                <img src={img2} alt="" />
                <div className='userinfo'>
                    <h4>Lily</h4>
                    <small>@lily</small>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam consequuntur illo quasi fugiat voluptate aliquid non voluptatum rerum hic aut amet velit accusantium, eum assumenda autem maxime. Doloremque, perspiciatis.</p>
        </div>

        <div className='testmonial-col'>
            <div className='user'>
                <img src={img3} alt="" />
                <div className='userinfo'>
                    <h4>Sagar Gole</h4>
                    <small>@sagar</small>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam consequuntur illo quasi fugiat voluptate aliquid non voluptatum rerum hic aut amet velit accusantium, eum assumenda autem maxime. Doloremque, perspiciatis.</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
