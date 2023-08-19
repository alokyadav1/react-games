/* eslint-disable no-unused-vars */
import DiceImg from "../assets/images/six.png";
import TicTacToeImg from "../assets/images/TicTacToe/tic.png";
import GameCard from "./GameCard";
function GameList() {
  const games = [
    {
      id: 1,
      name: "Dice Game",
      image: DiceImg,
      path: "/dice",
    },
    {
      id: 2,
      name: "Tic Tac Toe",
      image: TicTacToeImg,
      path: "/tic-tac-toe",
    },
  ];
  return (
    <div className=" min-h-screen h-screen bg-slate-900">
      <h1 className="text-4xl font-extrabold text-center text-gray-500">Game List</h1>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {games.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </div>
    </div>
  );
}

export default GameList;
