import React, {useState} from "react";
import './index.less';

function StockItem(props: any) {
    const {name, currPrice, date, time} = props.stockDetail;
    return (
        <div>
            <div>股票名称: {name}</div>
            <div>当前价格: {currPrice}</div>
            <div>日期: {date}</div>
            <div>时间: {time}</div>
        </div>
    )
}

export default StockItem;