import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {EllipseCenterGradientPng} from '../../assets';
import {SIZE} from '../../constants';

const CenterLinerGradient = ({height = 1.5}) => {
    return (
        <ImageBackground
            resizeMode="stretch"
            style={[styles.linerGradient, {height:SIZE.deviceHeight * height}]}
            source={EllipseCenterGradientPng}
        />
    );
};

const styles = StyleSheet.create({
    linerGradient: {
        width: SIZE.deviceWidth,
        position: 'absolute',
    }
});

export default CenterLinerGradient;


