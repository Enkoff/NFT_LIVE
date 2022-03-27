const transformNumber = (number, segmentation, slice) => {
    let str = `${(number / segmentation)}`.slice(0, slice);
    return `${str}${number < 1000000 ? 'K' : 'M'}`;
}

export const changeNumber = (number) => {
    if (number < 1000) {
        return number;
    } else if (number >= 1000 && number < 10000) {
        return transformNumber(number, 1000, 3);
    } else if (number >= 10000 && number < 100000) {
        return transformNumber(number, 1000, 4);
    } else if (number >= 100000 && number < 1000000) {
        return transformNumber(number, 1000, 5);
    } else if (number >= 1000000 && number < 10000000) {
        return transformNumber(number, 1000000, 3);
    } else if (number >= 10000000 && number < 100000000) {
        return transformNumber(number, 1000000, 4);
    } else if (number >= 100000000) {
        return transformNumber(number, 1000000, 5);
    }
}