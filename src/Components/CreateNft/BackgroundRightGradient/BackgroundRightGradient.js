import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import {SIZE} from '../../../constants';
import {RightEclipsePng} from '../../../assets';

const BackgroundRightGradient = (props) => {
    return <ImageBackground resizeMode="stretch" style={styles.img} source={RightEclipsePng}/>
};

const styles = StyleSheet.create({
    img: {
        position: 'absolute',
        width: SIZE.deviceWidth / 1.6,
        height: SIZE.deviceHeight / 1.5,
        right: -SIZE.width.w10,
    }
});

export default BackgroundRightGradient;


