import { useEffect } from "react";
import "./user.css"
function User({ name, diceUrl, diceValue }) {
    return (
        <div>
            <div className="userContainer">
                {
                   (name === "Player 1") ? (
                    <div className="userContainer">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="userProfile" />
                        {diceUrl && <img src={diceUrl} alt="" className="dice-user" />}
                    </div>
                   ) : (
                    <div className="userContainer">
                        {diceUrl && <img src={diceUrl} alt="" className="dice-user" />}
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="userProfile"/>
                    </div>
                   )                    
                }
            </div>
            <h3>{name}</h3>

        </div>
    );
}

export default User;