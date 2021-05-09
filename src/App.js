import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
