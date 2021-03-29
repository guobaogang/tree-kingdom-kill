import React from "react";

function Equipment(props: any) {
    const {equipments} = props;

    return (
        <div>
            {equipments.map((item: any) => {
                return <div>{item.name}</div>
            })}
        </div>
    )
}

export default Equipment;