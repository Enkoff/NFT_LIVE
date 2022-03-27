import React from 'react';
import {View} from 'react-native';

import {HomeSvg} from '../../SVG';
import {TAB_ICON} from '../../../constants';

const HomeIcon = ({focused}) => {
    return (
        <View style={TAB_ICON.iconContainer}>
            <HomeSvg
                width={focused ? TAB_ICON.size.focus : TAB_ICON.size.onFocus}
                height={focused ? TAB_ICON.size.focus : TAB_ICON.size.onFocus}
                color={focused ? TAB_ICON.color.focusColor : TAB_ICON.color.onFocusColor}
            />
            {focused && <View style={TAB_ICON.greenCircle}/>}
        </View>
    );
};

export default HomeIcon;


