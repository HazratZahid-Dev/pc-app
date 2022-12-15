// import { Avatar,IconButton } from "@material-ui/core";
// import ChatIcon from "@mui/icons-material/Chat";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// import SearchIcon from "@mui/icons-material/Search";
// import React from "react";
// import "../src/Messages.css";

// const Messages = () => {
//   return (
//     <div>
//       <div className="chats bg-slate-300">
//         <div className="chat-header">
//           <Avatar />
//           <div className="chat-header-info">
//             <h4>Zahid</h4>
//             <p className="text-sm">Last seen 10.30 pm</p>
//           </div>
//           <div className="header-right">
//           <IconButton>
//             <SearchIcon />
//           </IconButton>
          
//           <IconButton>
//             <MoreVertIcon />
//           </IconButton>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;


import React from 'react'
// import Message from './Config/Data'
// UserData 
const Messages = ({UserData,name,time}) => {

  const today = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
    


    
    {/* <img src={i className='w-40 h-40' alt='error'></img>
    <p>{seen}</p>  */}

 {/* {UserData.map((user) => {

  
     return(
        <div className="flex gap-2">
          <div>
            <img src={user.image} className="chats__image" />
          </div>
          <div>
            <div>
              <p className="mt-2">{user.name}</p>
            </div>
             <div>
              <p className="text-sm"> Last seen today {today}</p>
            </div> 
          </div>
        </div>
      
        )}
      )} */}


    </>
  )
}

export default Messages