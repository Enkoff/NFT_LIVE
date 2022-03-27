import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import {LeftEclipsePng} from '../../../assets';
import {SIZE} from '../../../constants';

const BackgroundLeftGradient = (props) => {
    return <ImageBackground resizeMode="stretch" style={styles.img} source={LeftEclipsePng}/>;
};

const styles = StyleSheet.create({
    img: {
        position: 'absolute',
        width: SIZE.deviceWidth / 1.6,
        height: SIZE.deviceHeight / 1.5,
        left: -SIZE.width.w10,
        top: SIZE.deviceHeight / 11,
    },
});

export default BackgroundLeftGradient;


