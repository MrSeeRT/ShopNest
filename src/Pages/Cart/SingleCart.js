import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../../Redux/Slices/CartSlices';
import { addPrice } from '../../Redux/Slices/grandTotalSlice';





const SingleCart = ({products}) => {

    const dispatch = useDispatch();

    const handleDelete=(id,price)=>{
        dispatch(remove(id))
        dispatch(addPrice(-price))
    }

    const [quantity, setQuantity] = useState(1);
    const quantityDecrease=()=> {
      if(quantity<=1){
        setQuantity(1)
      }else{
       setQuantity(quantity - 1);
       dispatch(addPrice(-products.price))
      }
    }
    const quantityIncrease=()=> {
        setQuantity(quantity + 1);
       dispatch(addPrice(products.price))
    }

  return (
    <>
         <div
        className="container-fluid mt-4 mb-4 pt-3 pb-3 ps-4 pe-4"
        style={{
          backgroundColor: "rgba(232, 232, 232, .4)",
          borderRadius: "15px",
        }} key={products.id}
      >
        <div className="d-flex justify-content-end " style={{position:"relative"}}><button className="" style={{border:"none", position:"absolute", top:"13px", borderRadius:"5"}} onClick={()=>handleDelete(products.id,products.price)}><i class="fa-solid fa-trash fa-lg"></i></button></div>
        <div className="row  pt-1 pb-1 d-flex flex-column flex-sm-row">
          <div className="col row">
            <div className=" col-3  d-flex justify-content-center">
              <img
                src={products.thumbnail}
                alt=""
                style={{
                  width: "45px",
                  height: "45px",
                  objectFit: "cover",
                  borderRadius: "10%",
                }}
              />
            </div>
            <div className="col  d-flex justify-content-center align-items-center">
              {" "}
              <h4 className=" ">{products.title}</h4>
            </div>
          </div>
          <div className="col row mt-2 mt-sm-0">
            <div className="col  d-flex justify-content-center align-items-center">
              <strong>
                {" "}
                <button style={{ border: "none",background:"black", color:"white", borderRadius:"6px" }} onClick={quantityDecrease}>
                  <i class="fa-solid fa-minus "></i>
                </button>
                <span className="ms-4 me-4 ">{quantity}</span>{" "}
                <button style={{ border: "none", background:"black", color:"white", borderRadius:"6px" }} onClick={quantityIncrease}>
                  <i class="fa-solid fa-plus"></i>
                </button>
              </strong>
            </div>
            <div className="col-3  d-flex justify-content-center align-items-center fw-bold pe-sm-5 ">
              ₹ {quantity*products.price}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleCart