import React from 'react'
import NavbarBottom from '../Navbar/NavbarBottom';
import Carousel from '../Carousel/CarouselPage';
import CarouselDown from '../Carousel/CarouselDown';
import Collections from '../collections/Collections';
import TopBrands from '../Top Brands/TopBrands';
import OurBestSellers from '../OurBestSellers/OurBestSellers';
import NewArrivals from '../NewArrivals/NewArrivals';

const home = () => {
  return (
    <div>
      <NavbarBottom />
      <Carousel />
      <div >
      <CarouselDown />
      <Collections />
      <hr style={{width: "100%",
        height: "20px",
        marginLeft:"auto",
        marginRight:" auto",
        backgroundColor:" #b7d0e2",
        marginTop:"50px",
        marginBottom: "50px"
        }} />
      <TopBrands />
      <hr style={{width: "100%",
        height: "15px",
        marginLeft:"auto",
        marginRight:" auto",
        backgroundColor:" #b7d0e2",
        marginTop:"50px",
        marginBottom: "50px"
        }} />
      <OurBestSellers />
      <hr style={{width: "100%",
        height: "15px",
        marginLeft:"auto",
        marginRight:" auto",
        backgroundColor:" #b7d0e2",
        marginTop:"50px",
        marginBottom: "50px"
        }} />
      <NewArrivals />
      </div>


    </div>
  )
}

export default home