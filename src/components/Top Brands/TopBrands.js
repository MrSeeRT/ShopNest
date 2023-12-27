import React from 'react'
import SingleProduct from '../SingleProduct/SingleProduct';
import SingleProduct_Mobile from '../SingleProduct/SingleProduct_Mobile';

const productTopBrands=[
  {
    "id": 6,
    "title": "Girls Onesies ",
    "description": "Hopscotch Girls Polycotton Text Print Onesies with in Green Color",
    "price": 734,
    "rating": 3.89,
    "brand": "Hopscotch",
    "category": "Clothes",
    "thumbnail": "https://m.media-amazon.com/images/I/61D4QOZ+ajL._UX522_.jpg"
    },
    {
    "id": 7,
    "title": "Silk Lehenga Choli Set",
    "description": "Zeel Clothing Women Silk Semi-Stitched Lehenga Choli Set",
    "price": 2443,
    "rating": 4.89,
    "brand": "Zeel Clothing",
    "category": "Clothes",
    "thumbnail": "https://m.media-amazon.com/images/I/81dgR8xAcOL._UY550_.jpg"
    },
    {
    "id": 8,
    "title": "Casual Shirt for Men",
    "description": "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (Patta)",
    "price": 279,
    "rating": 4.29,
    "brand": "Lymio",
    "category": "Clothes",
    "thumbnail": "https://m.media-amazon.com/images/I/71ZGe3YWTVL._UY550_.jpg"
    },
    {
    "id": 9,
    title: "Puma Unisex-Adult Cap",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    rating: 4.1,
    brand: "PUMA",
  category: "Clothes",
  thumbnail: "https://m.media-amazon.com/images/I/81E80ehHyiL._UX679_.jpg"
    }
]

const TopBrands = () => {


  const viewPort_Width = window.innerWidth;
  return (
    <>
      <div className='container' >
      <h2 className=' mt-4 mb-5' style={{ fontFamily: 'Lato'}}>Our Top Brands</h2>

      <div className="row  "  >
{ productTopBrands.map((product)=>{
  return (
         <div className=" col col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"  >
         {viewPort_Width<=992 ?  <SingleProduct_Mobile id={product.id} title={product.title} description={product.description} price={product.price} rating={product.rating} brand={product.brand} category={product.category} thumbnail={product.thumbnail} /> : <SingleProduct id={product.id} title={product.title} description={product.description} price={product.price} rating={product.rating} brand={product.brand} category={product.category} thumbnail={product.thumbnail}  />   }
         </div> )
         })
}
      
</div>
    </div>
    
    
    </>
   
  )
}

export default TopBrands