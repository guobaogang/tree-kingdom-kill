import axios from "axios";
import {getUserInfo} from "../utils/util";

export default function Ajax(
    {
        url = "/",
        method = "POST",
        data = {},
        params = {},
        headers = {}
    }) {
    return new Promise((resolve, reject) => {
        let userInfo = getUserInfo();
        let newData = {
            busiParam: data,
            sysParam: {
                user: userInfo && userInfo.name,
                ts: new Date().getTime()
            }
        }
        // @ts-ignore
        axios({
            url,
            params,
            method,
            headers,
            data: newData
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}