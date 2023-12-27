import React from 'react'
import { Link } from 'react-router-dom'
import "./collections.css"


const photo = require("../../Images/pexels-karolina-grabowska-4464815.jpg")

const Collections = () => {
  return (
    <div>
         <div className="d-flex flex-column flex-sm-row mt-2 mt-sm-5 " style={{ maxHeight: "350"}}>

 
         <div className=" col-sm-4  d-flex  justify-content-center "  >
            <div className=' w-75 ' style={{height:"85%", background: "#f4f4f4"}} >
            <div className=' w-100 seerthoverimage ' style={{height:"100%"}}>
  <img className="img-fluid  rounded mt-1 " src="https://m.media-amazon.com/images/I/71Q+RKQ6scL._UY741_.jpg" alt="Collection Image" style={{objectFit:"cover", height:"100%",width:"100%"}}/>
  </div>
  <div className=" w-100 d-flex  justify-content-center mt-4 mb-3">
   <Link to="/shop"> <button className="card-text seertcollectionbtn">Mens Collections</button></Link>
  </div>
  </div>
</div>

<div className=" col-sm-4  d-flex  justify-content-center "  >
            <div className=' w-75 ' style={{height:"85%", background: "#f4f4f4"}} >
            <div className=' w-100 seerthoverimage-2 ' style={{height:"100%"}}>
  <img className="img-fluid  rounded mt-1 " src="https://m.media-amazon.com/images/I/611sZibrXHL._UY500_.jpg" alt="Collection Image" style={{objectFit:"cover", height:"100%",width:"100%"}}/>
  </div>
  <div className=" w-100 d-flex  justify-content-center mt-4 mb-3">
   <Link to="/shop"> <button className="card-text seertcollectionbtn">See Our Store</button></Link>
  </div>
  </div>
</div>

<div className=" col-sm-4  d-flex  justify-content-center "  >
            <div className=' w-75 ' style={{height:"85%", background: "#f4f4f4"}} >
            <div className=' w-100 seerthoverimage-3 ' style={{height:"100%"}}>
  <img className="img-fluid  rounded mt-1 " src="https://m.media-amazon.com/images/I/81dgR8xAcOL._UY550_.jpg" alt="Collection Image" style={{objectFit:"cover", height:"100%",width:"100%"}}/>
  </div>
  <div className=" w-100 d-flex  justify-content-center mt-4 mb-3">
   <Link to="/shop"> <button className="card-text seertcollectionbtn">Womens Collection</button></Link>
  </div>
  </div>
</div>

</div>
    </div>
  )
}

export default Collections