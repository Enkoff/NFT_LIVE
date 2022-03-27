export const deletePushBadge = (array) => {
    return  array.map(item => {
        if (!item.isShow) {
            item.isShow = true;
        }
        return item;
    })
}