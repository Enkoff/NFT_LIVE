export const getTime = (date) => {
    const newDate = new Date(date);
    const minute = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    if (seconds < 10) seconds = `0${seconds}`;

    return `${minute}:${seconds}`;
};