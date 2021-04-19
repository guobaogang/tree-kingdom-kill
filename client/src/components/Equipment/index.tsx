import React from "react";

function Equipment(props: any) {
    const {equipments} = props;

    return (
        <div>
            {equipments.map((item: any) => {
                return <div key={item.name}>{item.name}</div>
            })}
        </div>
    )
}

export default Equipment;