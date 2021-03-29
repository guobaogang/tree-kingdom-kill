import React from "react";
import Card from "../Card";

function CardPanel(props: any) {
    const {cards} = props;
    return (
        <div>
            {
                cards.map((card: any) => {
                    return <Card card={card}/>
                })
            }
        </div>
    )
}

export default CardPanel;