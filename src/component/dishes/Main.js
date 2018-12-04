import React from "react";
import Routes from "./router";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import pageNotFound from "./../util/PageNotFound"
import {Container} from 'semantic-ui-react';


export default class Main extends React.Component {
  render() {
    return (
      <Container fluid>
        <main className={"Main"}>
          <Router>
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
          </Router>

        </main>
      </Container>
  )
    ;
  }
}
