import {DefaultTheme} from '@react-navigation/native';
import {THEME} from '../../constants';

export const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: THEME.backgroundColor,
    },
};