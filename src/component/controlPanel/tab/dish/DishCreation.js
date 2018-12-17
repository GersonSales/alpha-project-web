import React from 'react'
import DishForm from "./DishForm";
import ImagesUploader from "../../../../util/ImagesUploader";

export default class DishCreation extends React.Component {
  render() {
    return (
      <div>
        <ImagesUploader/>
        <DishForm method={"post"}/>
      </div>);
  }

}



