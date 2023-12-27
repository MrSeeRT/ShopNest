import React from 'react'
import SingleProduct from '../SingleProduct/SingleProduct';
import SingleProduct_Mobile from '../SingleProduct/SingleProduct_Mobile';


const productNewArrivals=[
  {
    "id": 11,
    "title": "Car Wheel Cleaning Brush",
    "description": "AllExtreme Car Wheel Cleaning Brush",
    "price": 159,
    "rating": 3.11,
    "brand": "AllExtreme",
    "category": "Accessories",
    "thumbnail": "https://m.media-amazon.com/images/I/71WuxWlTLNL._SL1500_.jpg"
    },
    {
    "id": 12,
    "title": "Car Mobile Phone Holder",
    "description": "Portronics Clamp M2 Adjustable Car Mobile Phone Holder Stand for Dashboard & Windshield, 360° Rotational, Strong Suction Cup, Compatible with 4 to 6 inch Devices(Black)",
    "price": 259,
    "rating": 4.01,
    "brand": "Portronics",
    "category": "Accessories",
    "thumbnail": "https://m.media-amazon.com/images/I/41H7NUu+b4L._SL1200_.jpg"
    },
]
const TopBrands = () => {


  const viewPort_Width = window.innerWidth;
  return (
    <>
      <div className='container' >
      <h2 className='  mt-5 mb-5 ' style={{ fontFamily: 'Lato'}}>New Arrivals</h2>

      <div className="row "  >
{ productNewArrivals.map((product)=>{
  return (
         <div className=" col col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"  >
         {viewPort_Width<=992 ?  <SingleProduct_Mobile id={product.id} title={product.title} description={product.description} price={product.price} rating={product.rating} brand={product.brand} category={product.category} thumbnail={product.thumbnail}  /> : <SingleProduct id={product.id} title={product.title} description={product.description} price={product.price} rating={product.rating} brand={product.brand} category={product.category} thumbnail={product.thumbnail}  />   }
         </div> )
         })
}
      
</div>
    </div>
    
    
    </>
   
  )
}

export default TopBrands