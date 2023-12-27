import React from 'react'
import SingleProduct from '../SingleProduct/SingleProduct';
import SingleProduct_Mobile from '../SingleProduct/SingleProduct_Mobile';


const productBestseller=[
  {
    id: "1",
    "title": "Handy Chopper",
    "description": "Premium Handy Chopper with 3 Blades for Effortlessly Chopping Vegetables and Fruits for Your Kitchen (Green, 400 ml, 12420)",
    "price": 269,
    "rating": 4.11,
    "brand": "Pigeon",
    "category": "Accessories",
    "thumbnail": "https://m.media-amazon.com/images/I/51RXzjrUmkL._SL1000_.jpg"
},
    {
    id: "2",
    title: "Night Suits for Infants",
    description: "EIO® 100% Cotton Rompers Sleepsuits Jumpsuit Night Suits for Infants Newborn Baby Boys & Girls Pack of 3",
    price: 428,
    rating: 4.69,
    brand: "BABYWEAR",
    category: "Clothes",
    thumbnail: "https://m.media-amazon.com/images/I/61k-7wDEdtL._UX679_.jpg"
    },
    {
    id: "3",
    title: "Summer Shirts for Men",
    description: "DHRUVI TRENDZ Men Summer Shirts for Men",
    price: 249,
    rating: 4.4,
    brand: "DHRUVI TRENDZ",
    category: "Clothes",
    thumbnail: "https://m.media-amazon.com/images/I/71U6rN80RIL._UY550_.jpg"
    },
    {
    id: "4",
    "title": "Printed Salwar Suit",
    "description": "SIRIL Women's Poly Cotton Printed Unstitched Salwar Suit Material With Poly Cotton Dupatta",
    "price": 319,
    "rating": 3.9,
    "brand": "SIRIL",
    "category": "Clothes",
    "thumbnail": "https://m.media-amazon.com/images/I/611sZibrXHL._UY500_.jpg"
    }
  ]
const TopBrands = () => {
// console.log(productBestseller)
  const viewPort_Width = window.innerWidth;
  return (
    <>
      <div className='container'>
      <h2 className='  mt-5 mb-5 ' style={{ fontFamily: 'Lato'}}>Our Best Sellers</h2>

      <div className="row "  >
{ productBestseller.map((product)=>{
    // console.log(product.title)
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