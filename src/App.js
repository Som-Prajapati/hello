import "./App.css";
import TicTakBoard from "./components/TicTakBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="center-text">Welcome to TicTakBoard</h2>
        <hr className="line"></hr>
        <TicTakBoard />
      </header>
    </div>
  );
}

export default App;
