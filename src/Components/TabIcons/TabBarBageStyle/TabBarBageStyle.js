import {SIZE, THEME} from '../../../constants';

export const tabBarBadgeStyle = (tabName) => {
    return {
        position: 'absolute',
        top: SIZE.height.h10,
        left: tabName === 'notification' ? -1 : 2,
        backgroundColor: THEME.secondary,
        color: 'white',
        fontSize: SIZE.fontSize.fs8,
        fontWeight: 'bold'
    };
};