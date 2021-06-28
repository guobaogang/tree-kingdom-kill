export default function getSinaStk(code, region, fn) {
    //该变量接收的字符串将会被eval转换成变量
    const callbackName = 'callbackCode'
    const marketList = {"hs": "11,12,13,14,15", "hk": "31,32", "usa": "41,42", "all": ""}
    let marketNum
    if (region && (region.toLowerCase() in marketList)) {
        // @ts-ignore
        marketNum = marketList[region]
    } else {
        marketNum = marketList.hs
    }
    code = code.toLowerCase()
    const url = 'http://suggest3.sinajs.cn/suggest/type=' + marketNum + '&key=' + code + '&name=' + callbackName
    const s = document.createElement('script')
    s.src = url
    document.body.appendChild(s)
    s.remove()
    //纯数字,纯字母,纯中文,纯中文+字母才可通过
    const codeBoolean = /(^\d+$|^[a-zA-Z]+$|^[\u4e00-\u9fa5]+$|^[a-zA-Z\u4e00-\u9fa5]+$)/.test(code)
    if (codeBoolean) {
        s.onload = function () {
            //eval(callbackName)将字符串转成变量,即原本字符串callbackCode已变成名为callbackCode的变量
            const arrRes = eval(callbackName);//把从新浪获得的变量值赋给arrRes以便后续操作
            let result = []
            if (arrRes) {
                const arrStk = arrRes.split(';')
                arrStk.forEach(function (v) {
                    // @ts-ignore
                    v = v.split(',')
                    const obj = {}
                    // @ts-ignore
                    obj.code = v[2]
                    // @ts-ignore
                    obj.symbol = v[3]
                    // @ts-ignore
                    obj.name = v[6]
                    result.push(obj)
                })
                fn(result)
            } else {
                fn([])
            }
        }
        s.onerror = function () {
            fn([])
        }
    } else {
        fn([])
    }
}