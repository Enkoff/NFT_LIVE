export const addisShow = (array) => {
    let copArray = JSON.stringify(array);
    copArray = JSON.parse(copArray);
    return copArray.map(item => {
        if (!item.isShow){
            item.isShow = true
        }
        return item;
    })
}