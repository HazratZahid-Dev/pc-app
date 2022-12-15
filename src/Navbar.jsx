import React from "react";
import { Link } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { BsFillChatLeftTextFill } from "react-icons/bs";
import "../src/Sidebar.css";
import Sidebar from "./Sidebar";
// import { IconButton } from "@mui/material";
const Navbar = () => {
  return (
    <div className="sidebar__header flex ">
      <div className="Avatar">
        <Avatar className="avatar" />
      </div>

      {/* <div className="header__right"> */}
        <ul className="header__right">
        
            <li><Link to='/'><Sidebar/></Link> </li>
          <li>
          <Link to='/PcStatus'>
          <IconButton>
              <DonutLargeIcon />
            </IconButton>
          </Link>  
          </li>
          <li>
          <Link >
            <IconButton>
              <ChatIcon />
            </IconButton>
            </Link>
          </li>
          <li>
          <Link >
          <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Link>      
          </li>
      
        </ul>
      </div>
    // </div>
  );
};

export default Navbar;
