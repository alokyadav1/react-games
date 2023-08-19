import { NavLink } from "react-router-dom";
function GameCard({ game }) {
  return (
    <NavLink
      to={game.path}
      className="p-2 m-5 rounded-lg shadow-lg w-full text-center bg-slate-200 md:w-fit"
    >
      <div className="w-full text-center md:w-fit">
        <img src={game.image} alt="" className="mx-auto" />
        <h1>{game.name}</h1>
      </div>
    </NavLink>
  );
}

export default GameCard;
