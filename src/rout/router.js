import React from "react";
import Loadable from "react-loadable";

const LoadingComponent = Loadable({
  loader: () => import("./../component/Loading"),
  loading() {
    return <div>Loading...</div>
  }
});

const HelloComponent = Loadable({
  loader: () => import("./../component/HelloComponent"),
  loading: LoadingComponent
});

const DishesComponent = Loadable({
  loader: () => import("../component/dishes/Main"),
  loading: LoadingComponent
});

const PortfolioComponent = Loadable({
  loader: () => import("./../component/main/Portfolio"),
  loading: LoadingComponent
});


const routes = [
  {path: "/portfolio", name: "Portfolio", component: PortfolioComponent},
  {path: "/dishes", name: "Dishes", component: DishesComponent},
  {path: "/", name: "Home", exact: true, component: HelloComponent}
];

export default routes;