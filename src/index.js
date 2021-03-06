import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import reducers from "./reducers"

import LandingPage from "./components/landing-page"
import LoadedPage from "./components/loaded-page"

import "./index.css"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/:parkCode" component={LoadedPage} />
        </Switch>
      </div>
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);
