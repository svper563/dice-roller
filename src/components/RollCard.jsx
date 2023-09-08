import React from "react";

export default function RollCard(props) {

    const {iconSrc, roll, getTotal} = props;
    getTotal();
    return (
        <div className="roll-card inverted">
            <img src={iconSrc}></img>
            <p className="overlay-text">{roll}</p>
        </div>
    )
}