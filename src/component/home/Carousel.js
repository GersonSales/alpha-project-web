import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Image1 from "./../test1.jpg";
import Image2 from "./../test2.jpg";
import Image3 from "./../test3.jpg";

export default class Carrousel extends React.Component {
  render() {
    return (
      <Carousel showThumbs={false} infiniteLoop autoPlay showStatus={false} stopOnHover transitionTime={1000}>
        <div>
          <img src={Image1}/>
        </div>

        <div>
          <img src={Image2}/>
        </div>

        <div>
          <img src={Image3}/>
        </div>


      </Carousel>);
  }
}