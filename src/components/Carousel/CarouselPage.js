
import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

const data = [
  {
   image: require('../../Images/bannerImgOne.cc70f00d1512cb1f97f6.png'), 
  },
  {
    image:require('../../Images/5594188-5.jpg'), 
    // caption:"Caption",
    // description:"Description Here"
   },
   {
    image:require('../../Images/bannerImgTwo.d93152138c5c9da3de58.png'), 
   } 
]
const CarouselPage = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Link  to="/shop">
      <Carousel activeIndex={index} onSelect={handleSelect}>
         {data.map((slide, i) => {
          return (
            <Carousel.Item>        
          <img
            className="d-block w-100 img-fluid d-block"
            src={slide.image}
            alt="slider image"
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>
      </Link>
    );
  }
export default CarouselPage