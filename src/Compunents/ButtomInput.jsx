import React from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { IconButton } from "@mui/material";
import { TiAttachmentOutline } from "react-icons/ti";
import "../Style/ButtomInput.css";

const ButtomInput = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <div className="input-tab  flex">
         <div className="chats__input__icons ">
          <IconButton>
            <EmojiEmotionsOutlinedIcon />
          </IconButton>
          <IconButton>
            <TiAttachmentOutline />
          </IconButton>
        </div> 
        <form className="chats__Form" onSubmit={onSubmit}>
          <input className="chats__input" type="text" name="message" placeholder="Type a message" value={message} onChange={onChange} />
        </form>

        <div className="ml-5"> 
          <IconButton onClick={() => alert("tru")}>
            <MicOutlinedIcon />
          </IconButton>
        </div>

      </div>
     
    <div>
      
       
      </div> 
    </>
  );
};

export default ButtomInput;
