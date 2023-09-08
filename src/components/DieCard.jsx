import React, { useState } from "react";

export default function DieCard(props) {

    const {iconSrc, sides} = props;

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
            <img src={iconSrc} className="inverted"></img>
        </div>
    );
}