/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameList from "./components/GameList";
import DiceGame from "./components/DiceGame/DiceGame";
import TicTacToe from "./components/TicTacToe/TicTacToe";
function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/dice" element={<DiceGame />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
   );
}

export default App;