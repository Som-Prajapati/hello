export default function Result({ winner, rendering }) {
  return (
    <>
      <h1 className="center-text">The winner is {winner}</h1>
      <div className="center-text">
        <button className="restart-butt" onClick={rendering}>
          {" "}
          Restart{" "}
        </button>
      </div>
    </>
  );
}
