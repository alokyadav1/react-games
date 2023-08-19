import React, { useEffect, useState } from "react";
import User from "./User/User";
import Dice from "./Dice/Dice";
import styles from "./dice-game.module.css";
import dice1 from "../../assets/images/one.png";
import dice2 from "../../assets/images/two.png";
import dice3 from "../../assets/images/three.png";
import dice4 from "../../assets/images/four.png";
import dice5 from "../../assets/images/five.png";
import dice6 from "../../assets/images/six.png";
import diceSound from "../../assets/audio/dice.mp3";
function DiceGame() {
  const diceUrl = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [dice, setDice] = useState(diceUrl[0]);
  const [turn, setTurn] = useState("Player 1");
  const [rollDisabled, setRollDisabled] = useState(false);
  const [user1Data, setUser1Data] = useState({});
  const [user2Data, setUser2Data] = useState({});
  const [winner, setWinner] = useState("");

  const audio = new Audio(diceSound);

  useEffect(() => {
    const player1 = document.querySelector(".player1");
    const player2 = document.querySelector(".player2");
    if (turn === "Player 1") {
      player1.classList.add(`${styles.turn}`);
      player2.classList.remove(`${styles.turn}`);
    } else if (turn === "Player 2") {
      player2.classList.add(`${styles.turn}`);
      player1.classList.remove(`${styles.turn}`);
    } else {
      player1.classList.remove(`${styles.turn}`);
      player2.classList.remove(`${styles.turn}`);
    }
    setTimeout(handleWinner, 600);
  }, [user2Data, turn]);

  const handleRollDice = async () => {
    await audio.play();
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDice(diceUrl[randomNum - 1]);
    if (turn === "Player 1") {
      setUser1Data({ diceValue: randomNum, diceUrl: diceUrl[randomNum - 1] });
      setTurn("Player 2");
    } else {
      setUser2Data({ diceValue: randomNum, diceUrl: diceUrl[randomNum - 1] });
      setRollDisabled(true);
      setTurn("");
    }
  };
  const handleWinner = () => {
    if (!user2Data.diceValue) return;
    const player1 = user1Data.diceValue;
    const player2 = user2Data.diceValue;
    // alert(`Player 1: ${player1} and Player 2: ${player2}`)
    if (player1 > player2) {
      setWinner("Player 1");
    } else if (player1 < player2) {
      setWinner("Player 2");
    } else {
      setWinner("Draw");
    }
  };

  const handleReset = () => {
    setDice(diceUrl[0]);
    setTurn("Player 1");
    setRollDisabled(false);
    setUser1Data({});
    setUser2Data({});
    setWinner("");
  };
  return (
    <div className={styles.App}>
      <h1 className="text-4xl mt-5 font-extrabold mb-10 md:mb-1">DICE GAME</h1>
      <div className={`${styles.appUser} flex flex-wrap`}>
        <div className={`${styles.player1} player1 w-4/5 md:w-fit mb-10 md:mb-0`}>
          <User
            name="Player 1"
            diceUrl={user1Data.diceUrl}
            diceValue={user1Data.diceValue}
          />
        </div>
        {winner ? (
          <div className={`${styles.reset} mb-10 md:mb-0`}>
            <h2>Winner: {winner}</h2>
            <button onClick={handleReset} className="bg-blue-700 text-white rounded-xl p-2">Reset</button>
          </div>
        ) : (
          <div className="w-full md:w-fit mb-10 md:mb-0">
            <h2 className={`${styles.vs} w-24 h-24 md:w-fit md:h-fit flex items-center justify-center mx-auto`}>VS</h2>
          </div>
        )}
        <div className={`${styles.player2} player2 w-4/5 md:w-fit mb-10 md:mb-0`}>
          <User
            name="Player 2"
            diceUrl={user2Data.diceUrl}
            diceValue={user2Data.diceValue}
          />
        </div>
      </div>
      <div className={styles.dice}>
        <Dice diceUrl={dice} />
      </div>
      <div className="mb-10 md:mb-0">
        <button
          className={styles.button}
          onClick={handleRollDice}
          disabled={rollDisabled}
        >
          Roll
        </button>
      </div>
    </div>
  );
}

export default DiceGame;
