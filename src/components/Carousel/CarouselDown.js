import React from "react";

const CarouselDown = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-sm-row mt-2 mt-sm-5">
        <div className="col-sm-4 d-flex justify-content-center " >
          <div className="card r w-100 height- d-flex justify-content-center"  style={{ border: "none" , outline: "none"}}>
            <div>
              <div className="w-100  mt-4 d-flex justify-content-center">
              <i class="fa-solid fa-box-open fa-fade fa-2xl"></i>
              </div>
              <div className="card-body  d-flex justify-content-center">
                <div>
                <h5 className="card-text">
                 Brands Collection
                </h5>
                <p className=" ">Brands for your space</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        

        <div className="col-sm-4 d-flex justify-content-center " >
          <div className="card r w-100 height- d-flex justify-content-center"  style={{ border: "none" , outline: "none"}}>
            <div>
              <div className="w-100  mt-4 d-flex justify-content-center">
              <i class="fa-solid fa-truck fa-beat-fade fa-2xl"></i>
              </div>
              <div className="card-body  d-flex justify-content-center">
                <div>
                <h5 className="card-text">
                Free Shipping
                </h5>
                < p className="">On price over ₹499/-</p>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className="col-sm-4 d-flex justify-content-center " >
          <div className="card r w-100 height- d-flex justify-content-center"  style={{ border: "none" , outline: "none"}}>
            <div>
              <div className="w-100  mt-4 d-flex justify-content-center">
              <i class="fa-solid fa-hand-holding-dollar fa-fade fa-2xl"></i>
              </div>
              <div className="card-body  d-flex justify-content-center">
                <div>
                <h5 className="card-text">
                100% Money Back
                </h5>
                < p className="  ">If product don't suit you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselDown;
