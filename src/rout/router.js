import React from "react";
import Loadable from "react-loadable";
import {isAuthenticated} from "../component/auth/Service";

const LoadingComponent = Loadable({
  loader: () => import("./../component/Loading"),
  loading() {
    return <div>Loading...</div>
  }
});

const HelloComponent = Loadable({
  loader: () => import("../component/HelloComponent"),
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

const ControlPanelComponent = Loadable({
  loader: () => isAuthenticated() ?
    import("../component/controlPanel/Main") :
    import("../component/HelloComponent"),
  loading: LoadingComponent
});

const SignUpComponent = Loadable({
  loader: () => import("../component/user/SignInUpPage"),
  loading: LoadingComponent
});

const ProfileComponent = Loadable({
  loader: () => isAuthenticated() ?
    import("../component/user/Profile") :
    import("../component/HelloComponent"),
  loading: LoadingComponent
});


const routes = [
  {path: "/portfolio", name: "Portfolio", component: PortfolioComponent},
  {path: "/control-panel", name: "Portfolio", component: ControlPanelComponent},
  {path: "/dishes", name: "Dishes", component: DishesComponent},
  {path: "/", name: "Home", exact: true, component: HelloComponent},
  {path: "/login", name: "Login", exact: true, component: SignUpComponent},
  {path: "/profile", name: "Profile", component: ProfileComponent}
];

export default routes;