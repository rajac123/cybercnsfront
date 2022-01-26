import SideMenu, { menuItems } from "../components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import TopBar from "../components/topbar/Topbar";
import User from "./user/User";
import EditUser from "./user/EditUser";
import BuildInfo from "./buildinfo/BuildInfo";
import '../App.css'
import Logs from "./logs/Logs";
function Main() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`sidebarcontainer ${inactive ? "inactive" : ""}`}>
          {/* <TopBar /> */}
          {/* {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <User />
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))} */}

          <Switch className="components">
            <Route exact path="/dashboard" component={User} />
            <Route  path="/edit-user" component={EditUser} /> 
            <Route   path="/buildinfo" component={BuildInfo} />
            <Route   path="/logs" component={Logs} />
          </Switch>
          
        </div>
      </Router>
    </div>
  );
}

export default Main;
