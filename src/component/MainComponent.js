import React, {Component} from "react";
import Routes from "../rout/router";
import {Route, Switch} from "react-router-dom";
import pageNotFound from "./util/PageNotFound"
import {Container} from 'semantic-ui-react';


export default class MainComponent extends Component {
  render() {
    return (
      <Container>
        <main className={"MainComponent"}>
          <Switch>
            {Routes.map((route, idx) => {
                return route.component ? (
                    <Route key={idx}
                           path={route.path}
                           exact={route.exact}
                           name={route.name}
                           render={routeProps => (
                             <route.component {...this.props}{...routeProps} />
                           )
                           }
                    />

                  )
                  : (<Route path={"/"} name={"None"} component={pageNotFound}/>);
              },
            )}
            <Route path={"/"} name={"PageNotFound"} component={pageNotFound}/>
          </Switch>
        </main>
      </Container>

    );
  }
}