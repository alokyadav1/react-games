import styles from "./tic.module.css";
function Cell({ id, value, onClick, isDisabled }) {
  return (
    <div className=" bg-transparent w-20 h-20 basis-1/3 flex-grow flex justify-center items-center ">
      <button
        onClick={() => onClick(id)}
        className={`${styles.button} cursor-pointer w-full h-full disabled:bg-slate-400 disabled:cursor-not-allowed shadow-2xl`}
        disabled={isDisabled}
      >
        {value}
      </button>
    </div>
  );
}

export default Cell;
