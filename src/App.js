import { BrowserRouter, Link, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Switch } from "react-router-dom";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/Page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />

        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
