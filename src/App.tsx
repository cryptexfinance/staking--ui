import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Delegation from "./components/Delegation";
import Delegator from "./components/Delegator";
import NewDelegator from "./components/NewDelegator";

function App() {
  const match = useRouteMatch();

  return (
    <Container fluid className="wrapper">
      <Switch>
        <Route path={`${match.url}/`}>
          <Delegation />
        </Route>
        <Route path={`${match.url}delegator/:address`}>
          <Delegator />
        </Route>
        <Route path={`${match.url}new`}>
          <NewDelegator />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
