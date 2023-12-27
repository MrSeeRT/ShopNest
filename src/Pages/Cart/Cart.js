import React from "react";
import { Link,  useNavigate} from "react-router-dom";
import SingleCart from './SingleCart';
import { useSelector } from 'react-redux';


const Cart = () => {
  let GRANT_TOTAL = 0;
  const products = useSelector((state)=>state.cart);
  const cash = useSelector((state)=>state.sum);
  const navigate = useNavigate();

if(products.length===0){
  return (
    <div className="container mt-4">
    <div>
      <Link>
        <button className="seertbackbtn " onClick={() => navigate(-1)}>
          Back
        </button>
      </Link>
    </div>
    <div className="container d-flex align-items-center justify-content-center mt-5" style={{height:"30vh", backgroundColor: "rgba(232, 232, 232, .4)",
          borderRadius: "15px"}}>
      <h3>Cart Is Empty!</h3>
    </div>
    </div>
  )
}else{
  return (
    <div className="container mt-4">
      <div>
        <Link>
          <button className="seertbackbtn " onClick={() => navigate(-1)}>
            Back
          </button>
        </Link>
      </div>
      {
  products.length===0 ? <div><h1>Cart Is Empty!</h1></div> : 
        products.map((product)=>{
          const SingleProduct={
            "id":product.id,
            "title": product.title,
            "price": product.price, 
            "thumbnail" :product.thumbnail,
            "quantity":1
          };
          return (
     <SingleCart products={SingleProduct}/>
          )
          
    })
      }
      <hr />
      {
        cash.map((price)=>{
            GRANT_TOTAL = GRANT_TOTAL+price ;
        })
      }
      <div className="d-flex  align-items-center justify-content-between ">
        <h5 className=" ms-sm-5">Total Bill </h5>
        <h5 className="me-sm-5 ">₹ {GRANT_TOTAL} /-</h5>
      </div>
      <div className="d-flex justify-content-end">
        <button className="seertbackbtn me-sm-3 mt-2 mb-1">Checkout Now</button>
      </div>
    </div>
  );
};
}
export default Cart;
