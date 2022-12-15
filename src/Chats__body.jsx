import React, { useState } from "react";
import "../src/Chats__body.css";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
// import { IconButton } from "@mui/material";
import { TiAttachmentOutline } from "react-icons/ti";
import { IconButton } from "@mui/material";
import "../src/Style/ButtomInput.css";

// import ButtomInput from "../src/Compunents/ButtomInput";

const Chats__body = () => {
  const [message,setMessage]=useState("");
  const [list,setList]=useState([]); 
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={message};
    if(message){

      setList((ls)=>[...ls,data])
      setMessage('');
    }

  }
  return (
    <>
      <div>
        <div className="chats__body">

        {
          list.map((a)=>
            <p className="message__area ">{a.message}</p>
          
          
          )
        }
        </div>
     
      </div>

      <div className="input-tab   flex ">
        <div className="chats__input__icons ">
          <IconButton>
            <EmojiEmotionsOutlinedIcon />
          </IconButton>
          <IconButton>
            <TiAttachmentOutline />
          </IconButton>
        </div>
        <form className="chats__Form" onSubmit={handleSubmit}>
          <input
            className="chats__input"
            type="text"
            name="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Type a message"
           
          />
        </form>

        <div className="ml-5">
          <IconButton >
            <MicOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div></div>

      {/* <ButtomInput /> */}
    </>
  );
};

export default Chats__body;
