import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SIZE, THEME} from '../../../constants';
import CircleOneObject from '../CircleOneObject/CircleOneObject';

const CircleOne = ({children}) => {
    return (
        <View style={styles.wrapper}>
            <CircleOneObject/>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderWidth: 1,
        borderColor: THEME.white10,
        width: SIZE.deviceWidth * 1.5,
        height: SIZE.deviceHeight / 1.1,
        borderRadius: SIZE.deviceWidth,
    },
});

export default CircleOne;


