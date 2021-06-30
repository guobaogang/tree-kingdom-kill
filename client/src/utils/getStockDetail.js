export default function getStockDetail(code, fn) {
    let list = code.join();

    const url = 'http://hq.sinajs.cn/list=' + list
    const s = document.createElement('script')
    s.src = url
    document.body.appendChild(s)
    s.remove()
    //纯数字,纯字母,纯中文,纯中文+字母才可通过
    s.onload = function (res) {
        console.log(res)
        //eval(callbackName)将字符串转成变量,即原本字符串callbackCode已变成名为callbackCode的变量
        eval(res);//把从新浪获得的变量值赋给arrRes以便后续操作
        let result = code.map(item => {
            const obj = window['hq_str_' + item].split(',');
            return {
                code: item,
                name: obj[0],
                currPrice: obj[3],
                date: obj[30],
                time: obj[31]
            }
        })
        fn(result)
    }
    s.onerror = function () {
        fn([])
    }
}