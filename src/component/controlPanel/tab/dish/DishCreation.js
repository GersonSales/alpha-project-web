import React from 'react'
import DishForm from "./DishForm";


export default class DishCreation extends React.Component {
  render() {
    return (<DishForm method={"post"}/>);
  }

}



