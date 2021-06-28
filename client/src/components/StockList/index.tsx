import React, {useState} from "react";
import './index.less';
import {useSelector, useDispatch} from 'react-redux'

function StockList() {

    const count = useSelector(state => state.stock.number);
    const dispatch = useDispatch();

    // @ts-ignore
    return (
        <div>
            {count}
        </div>
    )
}

export default StockList;