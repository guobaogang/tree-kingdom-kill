import React from "react";
import Card from "../Card";
import './index.less';

function CardPanel(props: any) {
    const {cards} = props;
    return (
        <div className={'card-panel'}>
            {
                cards.map((card: any) => {
                    return <Card key={card.key} card={card}/>
                })
            }
        </div>
    )
}

export default CardPanel;