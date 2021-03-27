import storage from "./storage";
import {SESSION_USER_KEY} from "../cosnt";

export function setUserInfo(data: any) {
    storage.set(SESSION_USER_KEY, data)
}

export function getUserInfo() {
    return storage.get(SESSION_USER_KEY)
}