import moment from 'moment';

export const nftSellEnded = () => {
    const createDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    const addMonth = moment(createDate, 'MMMM Do YYYY, h:mm:ss a').add(1, 'month');
    const selEnded = moment(addMonth).format('[Sale ends] MMMM Do YYYY, [at] h:mm:ss a');
    return {selEnded, createDate};
};