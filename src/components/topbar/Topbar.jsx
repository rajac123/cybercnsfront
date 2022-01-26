import React from "react";
import "./topbar.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { blue } from '@material-ui/core/colors';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img src={'https://qav2.mycybercns.com/assets/images/cybercns_only_logo.png'}  style={{height:'40px',marginBottom:'15px'}} atr="logo"/>
          </span>
          <div style={{display:'inline-flex', marginLeft: '15px'}}>
            <h1>CyberCNS Customer Portal</h1>
          </div>
        </div>
        <div className="topRight">
        <div className="topbarIconContainer">
            {/* <AccountCircleIcon style={{ color: blue[500], fontSize: 30 }} /> */}
          </div>
          <div className="topbarUserContainer">
            <p style={{marginBottom:"-8px"}}>Welcome, Arun</p>
            <p>rajac@cybercns.com</p>
          </div>
          <div className="topbarIconContainer" >
            <ExitToAppIcon style={{ color: blue[500] }}  onClick={() => { window.location.href='/'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
