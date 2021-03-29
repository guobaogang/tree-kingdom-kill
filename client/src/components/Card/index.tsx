import React from "react";

function Card(props: any){
    const {card} = props;

    return(
        <div>
            {card.name}
        </div>
    )
}

export default Card;