import React, {useState} from "react";
import './index.less';
import {Select} from 'antd';
import getSinaStk from "../../utils/getSinaStock";
import {useDispatch} from "react-redux";
import {addStock, reduce} from '../../redux/action/stock_action';

const {Option} = Select;

function ShareSearch(props: any) {

    const [data, setData] = useState([]);
    const [value, setValue] = useState();
    const dispatch = useDispatch();

    let timeout: any;
    let currentValue: any;

    const handleSearch = (value: String) => {
        if (value && value.length > 1) {
            fetch(value, (res: any) => {
                setData(res)
            })
        } else {
            setData([])
        }
    }

    const handleChange = (value: any) => {
        setValue(value)
        dispatch(addStock(value))
    }

    function fetch(value: any, callback: Function) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        currentValue = value;

        function search() {
            getSinaStk(value, 'hs', (result: any[]) => {
                const res: {
                    // @ts-ignore
                    value: any;
                    // @ts-ignore
                    text: any;
                }[] = [];
                // @ts-ignore
                result.forEach((r) => {
                    res.push({
                        // @ts-ignore
                        value: r.symbol,
                        // @ts-ignore
                        text: r.name
                    });
                });
                callback(res);
            })
        }

        timeout = setTimeout(search, 500);
    }

    // @ts-ignore
    return (
        <Select
            showSearch
            className={'share-search'}
            value={value}
            placeholder={''}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
        >
            // @ts-ignore
            {data.map((d: any) => <Option key={d.value} value={d.value}>{d.text}</Option>)}
        </Select>
    )
}

export default ShareSearch;