import React from "react"
import Carousel from "./Carousel"
import Introduction from "./introdutcion/Introduction"

export default class HomeMain extends React.Component {
  render() {
    return(
      <div style={{width:"100%"}}>
        <Carousel />


        <Introduction/>
      </div>
    );
  }
}
