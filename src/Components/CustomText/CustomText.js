import React from 'react';
import {Text} from 'react-native';

import {ROOT_STYLE} from '../../constants';

const CustomText = ({children, textStyle, numberOfLines = 100000}) => {
    return <Text numberOfLines={numberOfLines} style={[ROOT_STYLE, textStyle]}>{children}</Text>;
};

export default CustomText;


