import React from 'react';
import Verified from "./assets/check.png"

function Header() {
    return (
        <>
        <div className="container">
            <div className="logo">
                <p>SO<span className="logo1">CIO.</span></p>
            </div>
            <div className="image">
              <p><img src={Verified} alt="" /> verified </p> 
              <select>
                    <option>kigewew826</option>
                </select>
            </div>
        </div>
        </>
    )
}

export default Header;