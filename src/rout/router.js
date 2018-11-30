import React from "react";
import Loadable from "react-loadable";
import Loading from "./../component/Loading"

const LoadingComponent = () => {
  return Loading;
};

const HelloComponent = Loadable({
  loader: () => import("./../component/HelloComponent"),
  loading: LoadingComponent,
});


export default class TestClass extends React.Component {
  render() {
    return (
      <HelloComponent/>
    );
  }
}