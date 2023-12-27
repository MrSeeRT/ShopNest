import React, { useState } from 'react'

import "./SingleProduct.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from "../../Redux/Slices/CartSlices"
import { addPrice } from '../../Redux/Slices/grandTotalSlice'



const SingleProduct = ({id, title, description, price, rating, brand, category, thumbnail}) => {
  const dispatch = useDispatch();
  const products={
    "id":id,
    "title": title,
    "price": price, 
    "thumbnail" :thumbnail
  };
  const handleAdd=(product)=>{
    dispatch(add(product));
    dispatch(addPrice(price))
  }

// console.log(product.id)
  const [active, setActive] = useState(false);
function hoverEnter(){
 setActive(true);
}
function hoverOut(){
    setActive(false);
   }


  

 

  return (
    <>
    <div className="card seertcardtop mb-3"  style={{width:288, border:"none" }}>
      <div   style={{position:"relative"}}>
  <img src={thumbnail} class={` mt-1 card-img-top ${active ? "seertimagehover" : ""} `}      style={{ Width: 240, maxHeight: 240,minHeight:240,objectFit: "cover", position:"relative"}}  alt="..." />
 
  <div class="    w-100 h-100 seertproducthover" id='seertproducthoverID'  onMouseEnter={hoverEnter} onMouseLeave={hoverOut}  style={{  position:"absolute",top:0 }}> 
  <div className=' w-100' style={{  position:"absolute",bottom:5 }}>
  <div className='d-flex justify-content-around  w-100 '  >
  <Link to="/details"><button className={`seertsingleproductbtn ${ !active ? "seertbtn-hidden" : ""}`} >Details</button></Link>

<button className={`seertsingleproductbtn ${ !active ? "seertbtn-hidden" : ""}`} onClick={()=>handleAdd(products)}><i class="fa-solid fa-cart-shopping me-1" ></i>Add</button> 
  </div>
  </div>
  </div>
  </div>
  <div className="card-body">
    <h5 className="card-title text-center fw-bold">{title}</h5>
    <p className="card-title text-center">{brand}</p>
    <div className='d-flex justify-content-between'>
    <p className="card-text">{rating}<i class="fa-solid fa-ranking-star ms-1"></i></p>
    <p className="card-text"><i class="fa fa-inr me-1" aria-hidden="true"></i>{price}/-</p>

    </div>

    
  </div>
</div>

    </>
  )
}



export default SingleProduct
