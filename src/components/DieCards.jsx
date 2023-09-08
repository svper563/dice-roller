import React, { useState } from "react";
import DieCard from "./DieCard";

export default function DieCards() {

    const [dice, setDice] = useState([]);

    return (
        <div>
            <div className="die-cards">
                <DieCard sides={4} iconSrc="./icons/dice-d4.png" setDice={setDice}/>
                <DieCard sides={6} iconSrc="./icons/dice-d6.png" setDice={setDice}/>
                <DieCard sides={8} iconSrc="./icons/dice-d8.png" setDice={setDice}/>
                <DieCard sides={12} iconSrc="./icons/dice-d12.png" setDice={setDice}/>
                <DieCard sides={20} iconSrc="./icons/dice-d20.png" setDice={setDice}/>
            </div>
            {dice?.map((die, index) => {
                    return (
                        <ul key={index} className="die">
                            <li>{die.roll}</li>
                        </ul>
                    )
                })}
        </div>
    )
}