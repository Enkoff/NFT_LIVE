import {SIZE} from '../size/size';

export const THEME = {
    backgroundColor: '#131329',
    white: '#FFFFFF',
    light: '#191B36',
    black50: 'rgba(19, 19, 41, 0.5)',
    black90: 'rgba(19, 19, 41, 0.9)',
    black60: 'rgba(0, 0, 0, 0.6)',
    black1c35: '#1C1D35',
    white5: 'rgba(255, 255, 255, 0.05)',
    white10: 'rgba(255, 255, 255, 0.1)',
    white40: 'rgba(255, 255, 255, 0.4)',
    white50: 'rgba(255, 255, 255, 0.5)',
    white60: 'rgba(255, 255, 255, 0.6)',
    white80: 'rgba(255, 255, 255, 0.8)',
    primary: '#4744FF',
    purple: '#EBC1FF',
    yellow: '#E1DB40',
    invisible: '#263A4E',
    violet: '#EBC1FF',
    blue: '#6096FF',
    orange: '#F5693C',
    secondary: '#25C5AB',
    turquoise: 'rgba(89, 176, 203, 0.2)',
    darkBlue: '#2463DE',
    menu: '#1F1F34',
    marine: '#59B0CB',
    red: '#E24D4D',
    aqua: 'rgba(96, 150, 255, 0.5)',
};

export const ROOT_STYLE = {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: SIZE.fontSize.fs14,
    lineHeight: SIZE.lineHeight.lh18,
    color: 'white'
};

export const TAB_ICON = {
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    greenCircle: {
        position: 'absolute',
        bottom: -8,
        width: SIZE.height.h6,
        height: SIZE.height.h6,
        borderRadius: SIZE.height.h6 / 2,
        backgroundColor: THEME.secondary,
    },
    size: {
        focus: SIZE.height.h24,
        onFocus: SIZE.height.h19,
    },
    color: {
        focusColor: THEME.white,
        onFocusColor: THEME.white40
    }
};

export const FAQ_GRADIENT = {
    lightBlue: '#5DA8FF',
    blue: '#2663FF',
    lightGreen: '#20DE9A'

}