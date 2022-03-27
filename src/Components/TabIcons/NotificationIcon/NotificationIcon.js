import React from 'react';
import {View} from 'react-native';

import {NotificationSvg} from '../../SVG';
import {SIZE, TAB_ICON} from '../../../constants';

const MessageIcon = ({focused}) => {
    return (
        <View style={TAB_ICON.iconContainer}>
            <NotificationSvg
                width={focused ? TAB_ICON.size.focus : TAB_ICON.size.onFocus}
                height={focused ? TAB_ICON.size.focus : TAB_ICON.size.onFocus}
                color={focused ? TAB_ICON.color.focusColor : TAB_ICON.color.onFocusColor}
            />
            {focused && <View style={[TAB_ICON.greenCircle, {left: SIZE.deviceHeight < 718 ? SIZE.width.w5 : SIZE.width.w7}]}/>}
        </View>
    );
};

export default MessageIcon;


