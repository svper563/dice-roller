import React from "react";
import DieCard from "./DieCard";

export default function DieCards() {
    return (
        <div className="die-cards">
            <DieCard sides={4} iconSrc="./icons/dice-d4.png"/>
            <DieCard sides={6} iconSrc="./icons/dice-d6.png"/>
            <DieCard sides={8} iconSrc="./icons/dice-d8.png"/>
            <DieCard sides={12} iconSrc="./icons/dice-d12.png"/>
            <DieCard sides={20} iconSrc="./icons/dice-d20.png"/>
        </div>
    )
}