import React, { useState } from "react";
import RollCard from "./RollCard";

export default function RollCards(props) {

    const {dice, setDice} = props;

    const [total, setTotal] = useState(0);

    function getTotal() {
        let sum = 0;
        dice.forEach(die => {
            sum += die.roll;
        });
        setTotal(sum);
    }

    function handleReset() {
        setTotal(0);
        setDice([]);
    }

    return (
        <div>
            <button onClick={handleReset}>Reset Dice</button>
            <h3>Total: {total}</h3>
            <div className="roll-cards">  
                {dice?.map((die) => {
                    return (
                        <RollCard iconSrc={die.iconSrc} roll={die.roll} getTotal={getTotal}/>
                    )
                })}
            </div>
        </div>
    )
}