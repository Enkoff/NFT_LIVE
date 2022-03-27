import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import {EllipseGradientPng} from '../../../assets';
import {SIZE} from '../../../constants';

const OnboardingBottomLinerGradient = (props) => {
    return (
        <ImageBackground
            resizeMode="contain"
            style={styles.linearGradient}
            source={EllipseGradientPng}
        />
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: SIZE.deviceHeight < 718 ? SIZE.deviceHeight * 0.35 : SIZE.deviceHeight * 0.42
    },
});

export default OnboardingBottomLinerGradient;


