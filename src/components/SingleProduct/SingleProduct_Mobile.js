import React from 'react'
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



  

 

  return (
    <>
    <div className="card seertcardtop mb-5"  style={{width:288, border:"none" }}>
    <Link to="/products">

      <div   style={{position:"relative"}}>
  <img src={thumbnail} class="card-img-top mt-1 " id='seertimagehoverID'      style={{ Width: 240, maxHeight: 240,objectFit: "cover", position:"relative"}}  alt="Product_Image" />
  </div>
  </Link>
  <div className="card-body">
    <h5 className="card-title text-center fw-bold">{title}</h5>
    <p className="card-title text-center">{brand}</p>
    <div className='d-flex justify-content-between'>
    <p className="card-text"><i class="fa fa-inr me-1" aria-hidden="true"></i>{price}/-</p>
   <div><button className='seertsingleproductbtn '  onClick={()=>handleAdd(products)}><i class="fa-solid fa-cart-shopping me-1"></i>Add</button></div>


    </div>

    
  </div>
</div>

    </>
  )
}



export default SingleProduct

