import {NAVIGATION} from "./consts";

export function cutText(text) {
    if (text.length>250)
        return text.substr(0, 255-3)+"...";
    else return text;
}

export function translateURI(value) {
    const isString = typeof value === "string";
    for (let item of NAVIGATION)
        if ((isString ? item.uri : item.id)===value)
            return isString ? item.id : item.uri;

    return 0;
}

export function getPageNameFromURL() {
    const url = window.location.href;
    const split = url.split("/");
    return split[3];
}