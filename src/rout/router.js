import React from "react";
import Loadable from "react-loadable";
import {isAuthenticated} from "../component/auth/Service";

const LoadingComponent = Loadable({
  loader: () => import("./../component/Loading"),
  loading() {
    return <div>Loading...</div>
  }
});

const HomeComponent = Loadable({
  loader: () => import("../component/home/HomeMain"),
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
    import("../component/user/SignInUpPage"),
  loading: LoadingComponent
});

const SignUpComponent = Loadable({
  loader: () => import("../component/user/SignInUpPage"),
  loading: LoadingComponent
});

const ProfileComponent = Loadable({
  loader: () => isAuthenticated() ?
    import("../component/user/Profile") :
    import("../component/user/SignInUpPage"),
  loading: LoadingComponent
});


const SignOut = Loadable({
  loader: () => import("../component/user/SignOut"),
  loading: LoadingComponent
});

const SignUp = Loadable({
  loader: () => isAuthenticated() ?
    import("../component/home/HomeMain") :
    import("../component/user/SignUp"),
  loading: LoadingComponent
});


const routes = [
  {path: "/portfolio", name: "Portfolio", component: PortfolioComponent},
  {path: "/control-panel", name: "ControlPanel", component: ControlPanelComponent},
  {path: "/dishes", name: "Dishes", component: DishesComponent},
  {path: "/", name: "Home", exact: true, component: HomeComponent},
  {path: "/login", name: "Login", exact: true, component: SignUpComponent},
  {path: "/profile", name: "Profile", component: ProfileComponent},
  {path: "/sign-out", name: "SignOut", component: SignOut},
  {path: "/sign-up", name: "SignUṕ", component: SignUp},
];

export default routes;