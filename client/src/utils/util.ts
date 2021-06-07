import storage from "./storage";
import {SESSION_USER_KEY, TOKEN_KEY} from "../cosntant";

export function setUserInfo(data: any) {
    storage.set(SESSION_USER_KEY, data)
}

export function getUserInfo() {
    let user = storage.get(SESSION_USER_KEY);
    return user && JSON.parse(user);
}

export function setToken(token: string) {
    storage.set(TOKEN_KEY, token)
}

export function getToken() {
    return storage.get(TOKEN_KEY);
}