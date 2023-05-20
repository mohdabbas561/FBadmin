import React, { useContext } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, ArrowDropDown } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from "react-router-dom";

export default function Topbar() {

  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <Link to="/">
        <span className="logo">FacePageAdmin</span>
            </Link>
        </div>
        <div className="topRight">

          <div className="logoutButtonIcon" style={{marginRight:"30px"}}>
            <Link to="/HomePage" className="li">
              <button className="logoutButton" onClick={() => dispatch(logout())}>
                <PowerSettingsNewIcon />
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
