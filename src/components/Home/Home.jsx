import React from 'react'
import "./Home.css"
import Carousel from "react-material-ui-carousel";
const images = ['/img/1.png','/img/4.png']
export default function Home (){
    return (
        <div className="banner">
             <Carousel>
            {
              images.map((img, i) => (
                <img
                draggable="false" 
                  className="CarouselImage"
                  key={i}
                  src={img}
                  alt={`${i} slide`}
                  
                />
              ))}
          </Carousel>
        </div>
    )
}


