import moment from 'moment';

export const getTime = (date) => {
    return moment(date).format('HH:MM');
};
