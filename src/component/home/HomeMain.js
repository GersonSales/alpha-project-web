import React from "react"
import Carousel from "./Carousel"
import Introduction from "./introdutcion/Introduction"

export default class HomeMain extends React.Component {
  render() {
    return(
      <div>
        <Carousel />


        <Introduction/>
      </div>
    );
  }
}
