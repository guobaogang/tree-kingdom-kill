import React from "react";
import './index.less';

function Card(props: any) {
    const {card} = props;

    return (
        <div className={'card'}>
            {card.name}
        </div>
    )
}

export default Card;