import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TopBar from "./components/topbar/Topbar";
import User from "./pages/user/User";
import EditUser from "./pages/user/EditUser";
import BuildInfo from "./pages/buildinfo/BuildInfo";
import './App.css'
import Logs from "./pages/logs/Logs";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [inactive, setInactive] = useState(false);
  const [isFullPageLayout, setisFullPageLayout] = useState(null);
  let sidebarComponent = !isFullPageLayout ? <SideMenu onCollapse={(inactive) => { setInactive(inactive); }} /> : '';
  let topbarComponent = !isFullPageLayout ? <TopBar /> : '';
  // const location = useLocation();

  useEffect(() => {
    if (window.location.pathname  === '/') {
      setisFullPageLayout(true)
      setInactive(true)
    }else{
      setisFullPageLayout(false)
      setInactive(false)
    }
  },[])
  return (
    <div className="App">
      <Router>
        { sidebarComponent }
        <div className={`sidebarcontainer ${inactive ? "inactive" : ""}`}>
        { topbarComponent }
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
            <Route exact path="/" component={Login} />
            <Route  path="/users" component={User} />
            <Route  path="/edit-user" component={EditUser} /> 
            <Route  path="/buildinfo" component={BuildInfo} />
            <Route  path="/logs" component={Logs} />
            <Route  path="/dashboard" component={Dashboard} />
          </Switch>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
