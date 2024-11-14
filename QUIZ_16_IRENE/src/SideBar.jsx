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
                <p><img src={Homesmile} alt="" /> Home </p> 
            </div>
            <div className="image2">
                <p><img src={Notification} alt="" /> Notification </p> 
            </div>
            <div className="image3">
                <p><img src={Message} alt="" /> Messages </p> 
            </div>
            <div className="image4">
                <p><img src={Profile} alt="" /> Profile </p> 
            </div>
        </div>
        </>
    )
}

export default SideBar;