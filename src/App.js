import DieCard from "./components/DieCard";

function App() {
  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <div className="die-cards">
        <DieCard label="d4" sides={4} iconSrc="./icons/dice-d4.png"/>
        <DieCard label="d6" sides={6} iconSrc="./icons/dice-d6.png"/>
        <DieCard label="d8" sides={8} iconSrc="./icons/dice-d8.png"/>
        <DieCard label="d12" sides={12} iconSrc="./icons/dice-d12.png"/>
        <DieCard label="d20" sides={20} iconSrc="./icons/dice-d20.png"/>
      </div>
    </div>
  );
}

export default App;
