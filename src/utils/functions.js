export function cutText(text) {
    if (text.length>250)
        return text.substr(0, 255-3)+"...";
    else return text;
}