import React from "react";
import Hero from "../Hero";
import CardPanel from "../CardPanel";
import Equipment from "../Equipment";

function MyPanel(props: any) {
    const {role, hero, cards, status, equipments} = props;

    return (
        <div>
            <Hero role={role} hero={hero}/>
            <CardPanel cards={cards}/>
            <Equipment equipments={equipments}/>
        </div>
    )
}

export default MyPanel;