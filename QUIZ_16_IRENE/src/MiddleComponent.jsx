import {useState} from "react";
import ProfilePic from "./assets/K.png";

function MiddleComponent() {
    const [text, setText] = useState('');
    const maxLength = 150
    const handleChange = (e) => {
        const newText = e.target.value;
        if (newText.length > maxLength) {
            alert('Max limit character are 150!')
        } else {
            setText(newText);
        }
    }
    return (
        <>
        <div className="container2">
            <div className="container3">
                <div className="profile-pic">
                    <img className="profiles" src={ProfilePic}/>
                    <textarea className="text" style={{height: '150px'}} placeholder="What happend today ?" value={text} onChange={handleChange}>
                    </textarea>
                    <p>{text.length}/{maxLength}</p>
                </div>
                <h1>What's Happening</h1>
                <div className="profile-com">
                    <img className="profile-pict" src={ProfilePic} alt="" /> <p className="profile-name">tereke7319</p> <p className="text1">40 days ago</p>
                    <h4>Makan apa nich</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default MiddleComponent;