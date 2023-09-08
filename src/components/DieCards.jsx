import React, { useState } from "react";
import DieCard from "./DieCard";
import RollCard from "./RollCard";
import RollCards from "./RollCards";

export default function DieCards() {

    const [dice, setDice] = useState([]);

    function handleReset() {
        setDice([]);
    }

    return (
        <div>
            <div className="die-cards">
                <DieCard sides={4} iconSrc="./icons/dice-d4.png" setDice={setDice}/>
                <DieCard sides={6} iconSrc="./icons/dice-d6.png" setDice={setDice}/>
                <DieCard sides={8} iconSrc="./icons/dice-d8.png" setDice={setDice}/>
                <DieCard sides={12} iconSrc="./icons/dice-d12.png" setDice={setDice}/>
                <DieCard sides={20} iconSrc="./icons/dice-d20.png" setDice={setDice}/>
            </div>

            <RollCards dice={dice} setDice={setDice}/>   

        </div>
    )
}