import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SIZE, THEME} from '../../../constants';

const CircleOneObject = (props) => {
    return <View style={styles.wrapper}/>
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: SIZE.height.h35,
        right: SIZE.deviceHeight < 718 ? SIZE.deviceWidth * 0.325 :SIZE.deviceWidth * 0.31,
        width: SIZE.height.h24,
        height: SIZE.height.h24,
        borderRadius: SIZE.height.h24 / 2,
        borderWidth: 1,
        borderColor: THEME.purple,
    },
});

export default CircleOneObject;


