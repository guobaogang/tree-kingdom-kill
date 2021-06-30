import React, {useEffect, useState} from "react";
import './index.less';
import {useSelector, useDispatch} from 'react-redux';
import {getStocks} from '../../redux/action/stocks_action';
import StockItem from '../StockItem';

function StockList() {
    // @ts-ignore
    const stock = useSelector(state => state.stock);
    // @ts-ignore
    const stockList = useSelector(state => state.stocks);
    console.log(stockList)

    const dispatch = useDispatch();

    setInterval(() => {
        dispatch(getStocks())
    }, 60 * 60 * 60)

    useEffect(() => dispatch(getStocks()), [stock])

    // @ts-ignore
    return (
        <div>
            {stockList.map((item: any) => {
                // @ts-ignore
                return <StockItem key={item.code} stockDetail={item}/>
            })}
        </div>
    )
}

export default StockList;