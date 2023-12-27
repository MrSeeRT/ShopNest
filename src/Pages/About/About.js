import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import "../../Pages/About/About.css"

const About = () => {
  const navigate = useNavigate();
  return (
    <div className='container mt-4'>
      <div className=' mx-4 mx-sm-0 '>
        <Link >
        <button className='seertbackbtn ' onClick={()=> navigate(-1)}>Back</button></Link>
      </div>
      <div className=' mt-5 mx-4 mx-sm-0'>
      <h6><strong>ShopNest: Your Shopping Partner</strong></h6>
      <p>ShopNest, founded by SeeRT, is a large ecommerce shopping site where you can buy your goodies at your price.</p>
      <h6>Our Services:</h6>
      <ul>
      <li>Minimal prices</li>
        <li>Fastest delivery</li>
        <li>24/7 customer support</li>
        <li>100% money back on cancelling</li>
      </ul>
      
      </div>
    </div>
  )
}

export default About