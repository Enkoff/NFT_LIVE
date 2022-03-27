import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SIZE, THEME} from '../../../constants';

const CircleTwo = ({children}) => {
    return (
        <View style={styles.wrapper}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        width: SIZE.deviceWidth * 1.1,
        height: SIZE.deviceHeight / 1.5,
        borderRadius: SIZE.deviceWidth,
        borderWidth: 0.4,
        borderColor: THEME.white5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15%',
    },
});

export default CircleTwo;


