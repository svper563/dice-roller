import React, { useState } from "react";

export default function DieCard(props) {

    const {label, iconSrc, sides} = props;

    const [count, setCount] = useState(0);

    return (
        <div className="die-card">
            <h2>{label}</h2>
            <img src={iconSrc}></img>
            <button>+</button>
            <button>-</button>
        </div>
    );
}