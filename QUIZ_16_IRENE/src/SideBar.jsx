import React from "react";
import Homesmile from "./assets/home smile.jpg";
import Notification from "./assets/notification.svg";
import Message from "./assets/message.png";
import Profile from "./assets/user.png";

function SideBar() {
    return (
        <>
        <div className="container1">
            <div className="image1">
                <p className="text"><img src={Homesmile} alt="" /> Home </p> 
                <p><img src={Notification} alt="" /> Notification </p> 
                <p><img src={Message} alt="" /> Messages </p> 
                <p><img src={Profile} alt="" /> Profile </p> 
            </div>

        </div>
        </>
    )
}

export default SideBar;