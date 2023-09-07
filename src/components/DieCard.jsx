import React, { useState } from "react";

export default function DieCard(props) {

    const {label, iconSrc, sides} = props;

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    };

    function decrementCount() {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        };
    };

    return (
        <div className="die-card">
            <h2>{label}</h2>
            <img src={iconSrc} className="inverted"></img>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </div>
    );
}