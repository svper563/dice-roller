import DieCard from "./components/DieCard";

function App() {
  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <DieCard label="d4" sides={4} iconSrc="./icons/dice-d4.png"/>
    </div>
  );
}

export default App;
