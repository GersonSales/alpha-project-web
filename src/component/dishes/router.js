import React from "react";
import Loadable from "react-loadable";

const CardGroup = Loadable({
  loader: () => import("./CardGroup"),
  loading() {
    return <div>Loading Dishes</div>
  }
});

const Details = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <div>Loading Dishes</div>
  }
});

const routes = [
  {path: "/dishes/id", name: "Details", exact:true, component: Details},
  {path: "/dishes", name: "CardGroup", exact:true, component: CardGroup}
];

export default routes;


