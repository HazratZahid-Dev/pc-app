// import React, { useEffect, useState } from "react";
// import { Avatar } from "@material-ui/core";
// import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
// import '../src/Sidebar.css'

// const SidebarChats = ({archive,name,message}) => {
//     const [icon,seticon]=useState('')

//     useEffect(()=>{
//         seticon(Math.floor(Math.random() *5000))
//     },[])

//   return (

//     //

//     !archive ?(

//     <div className="sidebar__chats">
//     <Avatar src={`https://avatars.dicebear.com/api/human/${icon}.svg`}></Avatar>
//      <div className="leading-5 ">
//        <p className="">{name}</p>
//        <p className="text-sm">{message} </p>
//      </div>

//    </div>

//     ):(
//         <div className="sidebar__chats">
//             <h2 className="gap-20 justify-between "><ArchiveOutlinedIcon className="text-green-700"/>   Archive</h2>
//         </div>
//     )

//   );
// };

// export default SidebarChats;

import React from "react";
import Message from "../src/Config/Data";

const SidebarChats = ({ user, UserData, setUserData }) => {
  return (
    <button type="button" className=' w-[100%]'  >
      {Message.map((user) => {
     return(
        <div className="flex gap-2">
          <div>
            <img src={user.image} className="chats__image" />
          </div>
          <div>
            <div>
              <p className="mt-2" onClick={(e) => setUserData([user, ...UserData])}  >
              {user.name}
              </p>
            </div>
            {/* onClick={() => setdata([message])}
              image={message.image}
              name={message.name}
              message={message.review} */}
            <div>
              <p className="text-sm">{user.review}</p>
            </div>
          </div>
        </div>
      
        )}
      )}
    </button>
  );
};

export default SidebarChats;
