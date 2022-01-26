import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import '../App.css'

function Layout() {

  return (
    <div className="App">
      <Router>
          <Switch className="components">
                <Route exact={true} path={"/"}>
                    <Login />
                </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default Layout;
