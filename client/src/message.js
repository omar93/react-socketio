import React from "react";
import './Style.css'

function Message(props) {
   return (
       <div className="msgContainer">
           <p className={props.style}>{props.message}</p>
       </div>
   ) 
}

export default Message