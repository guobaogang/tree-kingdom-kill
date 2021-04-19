import React from "react";
import Hero from "../Hero";
import CardPanel from "../CardPanel";
import './index.less';

function MyPanel(props: any) {
    const {role, hero, cards, status, equipments} = props;

    return (
        <div className={'panel-container'}>
            <CardPanel cards={cards}/>
            <Hero role={role} hero={hero}/>
        </div>
    )
}

export default MyPanel;