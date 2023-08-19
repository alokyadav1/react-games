import "./dice.css";
function Dice({ diceUrl }) {
    return ( 
        <div className="mx-auto w-fit">
            <img src={diceUrl} alt="" />
        </div>
     );
}

export default Dice;