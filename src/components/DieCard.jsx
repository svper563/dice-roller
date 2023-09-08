import React, { useState } from "react";

export default function DieCard(props) {

    const {iconSrc, sides, setDice} = props;

    const [count, setCount] = useState(0);

    function handleClick() {
        console.log(`${sides} Button clicked.`);
        const roll = rollDie();
        const obj = {die: sides, roll: roll};
        setDice(prevDice => [...prevDice, obj]);
    }

    function rollDie() {
        return Math.floor(Math.random() * sides) + 1;
    }

    return (
        <div className="die-card">
            <button className="button-clear" onClick={handleClick}>
                <img src={iconSrc} className="inverted"></img>
            </button>
        </div>
    );
}