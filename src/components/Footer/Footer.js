import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
  return (

    <>
<div className='footer footer-bottom' style={{ backgroundColor: "rgba(232, 232, 232, .4)", width:"100vw", marginTop:"40px", position:"absolute", bottom:"0",left:0, right:0}}  >
<div className="container"  >
  <footer className="py-5">
    <div className="row">
      <div className="col-12 col-sm-7 row">
      <div className="col-4 ">
        <h5>Our World</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0 text-muted">Collections</Link></li>
          <li className="nav-item mb-2"><Link to="/profile" className="nav-link p-0 text-muted">Profile</Link></li>
          <li className="nav-item mb-2 nav-link p-0 text-muted">FAQs</li>
        </ul>
      </div>

      <div className="col-5 col-sm-4">
        <h5>Our Brands</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0 text-muted">Zara</Link></li>
          <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0 text-muted">Nike</Link></li>
          <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0 text-muted">Levi's</Link></li>
          <li className="nav-item mb-2"><Link tp="/shop" className="nav-link p-0 text-muted">Adidas</Link></li>
        </ul>
      </div>

      <div className="col-3 col-sm-4 ">
        <h5>Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/cart" className="nav-link p-0 text-muted">Orders</Link></li>
          <li className="nav-item mb-2"><Link tp="/shop" className="nav-link p-0 text-muted">Products</Link></li>
          <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
          <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-muted">Contact Us</Link></li>
        </ul>
      </div>
      </div>

      <div className="col-12 col-sm-5 mt-xs-5 ">
        <form>
          <h5>Subscribe to our page</h5>
          <div className="d-flex w-100 gap-2 mt-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn seertbackbtn" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; 2023 ShopNest, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a><i className="fa-brands fa-square-instagram fa-2xl"></i></a></li>
        <li className="ms-3"><a><i className="fa-brands fa-square-x-twitter fa-2xl"></i></a></li>
        <li className="ms-3"> <a><i className="fa-brands fa-square-facebook fa-2xl"></i></a> </li>
      </ul>
    </div>
  </footer>
</div>
</div>
</>
  )
}

export default footer