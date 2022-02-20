function isEmpty(obj) {
    //return Object.keys(obj).length == 0;
    for (let key in obj) {
        return false;
    }
    return true;
}
