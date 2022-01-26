import React, { useEffect, useState } from "react";
import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg";

import MenuItem from "./MenuItem";


// added more menuItems for testing
export const menuItems = [
  { name: "Dashboard", exact: true, to: "/dashboard", iconClassName: "bi bi-house-door", },
  { name: "Users", to: "/users", iconClassName: "bi bi-people-fill", },
  // {
  //   name: "Content",
  //   exact: true,
  //   to: `/content`,
  //   iconClassName: "bi bi-speedometer2",
  //   subMenus: [
  //     { name: "Courses", to: "/content/courses" },
  //     { name: "Videos", to: "/content/videos" },
  //   ],
  // },
  { name: "Build Info", to: `/buildinfo`, iconClassName: "bi bi-info-circle-fill" },
  { name: "Download CyberCns Log", to: `/logs`, iconClassName: "bi bi-cloud-arrow-down" },
  { name: "Change DNS Entry Info", to: `/buildinfo`, iconClassName: "bi bi-pencil-fill" },
  { name: "Update SSL Certificate", to: `/buildinfo`, iconClassName: "bi bi-box-arrow-up" },
  // {
  //   name: "Content 2",
  //   exact: true,
  //   to: `/content-2`,
  //   iconClassName: "bi bi-speedometer2",
  //   subMenus: [
  //     { name: "Courses", to: "/content-2/courses" },
  //     { name: "Videos", to: "/content-2/videos" },
  //   ],
  // },
  // { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
  // { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  // { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  const cybercnslogo = 'https://betadev.mycybercns.com/assets/images/cybercns_logo.png';
  const cybercnspic= 'https://betadev.mycybercns.com/assets/images/cybercns_only_logo.png';

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={inactive ? cybercnspic: cybercnslogo} alt="webscript" />
        </div>
        {/* <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div> */}
      </div>

      {/* <div className="search-controller">
        <button className="search-btn">
          <i className="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div> */}

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Arun Raja</h5>
          <p>rajac@cybercns.co</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
