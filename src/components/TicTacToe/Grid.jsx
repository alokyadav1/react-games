import React from "react";
import Cell from "./Cell";
function Grid({ handleClick, cells, winner }) {
  return (
    <div className="flex w-fit md:w-1/3 flex-wrap md:mx-auto text-black gap-y-1 mx-3">
      {cells.map((cell, index) => {
        return (
          <Cell
            key={index}
            id={index}
            value={cell}
            onClick={handleClick}
            isDisabled={winner || cell != null}
          />
        );
      })}
    </div>
  );
}

export default Grid;
