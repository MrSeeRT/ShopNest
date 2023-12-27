import React, { useState } from "react";
import "../Navbar/NavbarBottom.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const NavbarBottom = () => {
  const item = useSelector((state)=>state.cart);

  const [search, setSearch] = useState("");
  return (
    <>
      <div
        className="py-4 row-lg row row-cols-1 "
        style={{ backgroundColor: "rgba(232, 232, 232, .4)", width:"100vw" }}
      >
        <div className="col-lg col  "></div>
        <div className="row col-lg-9 col ">
          <div className="col-md-5 mx-auto hellllocss">
            <div className="input-group  ">
              <input
                className="form-control border-end-0 border rounded-pill ms-3 "
                type="search"
                value={search}
                placeholder="Search your products here"
                id="example-search-input"
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="input-group-append">
                <button
                  className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5 "
                  type="button"
                >
                  <i className="bi bi-search text-secondary"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg d-flex  ms-3  ">
          <div className=" ">
            <div class="dropdown ">
              <button
                className="btn  dropdown-toggle seertbtnfoucs"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-user" aria-hidden="true"></i>              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/signin">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=""   >
            <div className="  seertmargincart ">
                
                
              <Link to="/cart" style={{textDecoration:"none" }}> <button
                className="btn   seertbtnfoucs "
              >
                <span>{item.length} </span>
                <i className="fa-solid fa-cart-shopping"></i>       </button>    </Link>
                </div>
                </div>
          </div>
      </div>
    </>
  );
};

export default NavbarBottom;
