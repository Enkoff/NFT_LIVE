import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SIZE, THEME} from '../../../constants';

const CircleThree = ({children}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.circleOne}/>
            <View style={styles.circleTwo}/>
            <View style={styles.circleThree}/>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: SIZE.height.h360,
        height: SIZE.height.h360,
        borderWidth: 1,
        borderRadius: SIZE.deviceWidth,
        borderColor: THEME.white10,
    },
    circleOne: {
        position: 'absolute',
        width: SIZE.height.h6,
        height: SIZE.height.h6,
        backgroundColor: THEME.yellow,
        borderRadius: SIZE.height.h6 / 2,
        right: '1%',
        top: SIZE.height.h124,
    },
    circleTwo: {
        position: 'absolute',
        width:SIZE.height.h10,
        height: SIZE.height.h10,
        borderRadius: SIZE.height.h10 / 2,
        borderWidth: 1,
        borderColor: THEME.yellow,
        left: SIZE.height.h36,
        bottom: '16.3%',
    },
    circleThree: {
        position: 'absolute',
        width: SIZE.height.h12,
        height: SIZE.height.h12,
        borderRadius: SIZE.height.h12 / 2,
        backgroundColor: THEME.purple,
        left: SIZE.height.h68,
        top: 0,
    },
});

export default CircleThree;


