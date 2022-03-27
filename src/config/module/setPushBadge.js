export const setPushBadge = (array) => {
    return array.reduce((prev, current) => {
        if (!current['isShow']) {
            return prev + 1;
        }
        return prev;
    }, 0);
};