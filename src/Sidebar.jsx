import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "../src/Sidebar.css";
import SidebarChats from "./SidebarChats";
import Messages from "./Messages";
import Chats__body from "./Chats__body";

const Sidebar = () => {
  const [UserData, setUserData] = useState([]);
  console.log(UserData)
  

  
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header flex ">
          <div className="Avatar">
            <Avatar className="avatar" />
          </div>
          <div className="header__right">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__search ">
          <div className="search__container">
            <SearchIcon className="header__search-icon" />
            <input
              type="search"
              placeholder="Search or start a new chat"
              className="header__search"
            />
          </div>
        </div>
        <hr />
        <div className="scroll">
          <SidebarChats
            //  user={user}
            setUserData={setUserData}
            UserData={UserData}
          />
        </div>
      </div>
      <div>
        <Messages UserData={UserData} />
        <div>
          <Chats__body />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
