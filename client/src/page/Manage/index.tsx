import React, {useState} from "react";
import './index.less';
import StockSearch from "../../components/StockSearch";
import StockList from "../../components/StockList";

function Manage() {
    return (
        <div>
            <StockSearch/>
            <StockList/>
        </div>
    );
}

export default Manage;
