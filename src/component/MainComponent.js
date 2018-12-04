import React, {Component} from "react";
import Routes from "../rout/router";
import {HashRouter, Route, Switch} from "react-router-dom";
import pageNotFound from "./util/PageNotFound"


export default class MainComponent extends Component {
  render() {
    return (
      <main className={"MainComponent"}>
        <HashRouter>
          <Switch>
            {Routes.map((route, idx) => {
                return route.component ? (
                    <Route key={idx}
                           path={route.path}
                           exact={route.exact}
                           name={route.name}
                           render={props => (
                             <route.component {...props} />
                           )
                           }
                    />
                  )
                  : (<Route path={"/"} name={"None"} component={pageNotFound}/>);
              },
            )}
            <Route path={"/"} name={"PageNotFound"} component={pageNotFound}/>
          </Switch>
        </HashRouter>

      </main>

    );
  }
}