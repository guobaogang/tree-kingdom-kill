function set(key: string, val: any) {
    if (isObject(val)) {
        val = JSON.stringify(val);
    }
    sessionStorage.setItem(key, val);
}

function get(key: string) {
    const val = sessionStorage.getItem(key);
    return val && JSON.parse(val);
}

function remove(key: string) {
    sessionStorage.removeItem(key);
}

function isObject(data: any) {
    return Object.prototype.toString.call(data) === "[object Object]"
}

export default {
    set,
    get,
    remove
}

