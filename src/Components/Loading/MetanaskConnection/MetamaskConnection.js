import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {ConnectMaskPng} from '../../../assets';
import {SIZE, THEME} from '../../../constants';
import {CustomText} from '../../index';

const MetamaskConnection = () => {
    return (
        <>
            <Image source={ConnectMaskPng} style={styles.connectMask}/>
            <CustomText textStyle={styles.title}>Connecting..</CustomText>
            <CustomText textStyle={styles.subTitle}>Please, wait a minute</CustomText>
        </>
    );
};

const styles = StyleSheet.create({
    connectMask: {
        position: 'absolute',
        width: SIZE.height.h270,
        height: SIZE.height.h270,
        bottom: '20%'
    },
    title: {
        position: 'absolute',
        fontSize: SIZE.fontSize.fs32,
        lineHeight: SIZE.lineHeight.lh36,
        fontWeight: 'bold',
        bottom: '15%'
    },
    subTitle: {
        position: 'absolute',
        bottom: '9%',
        color: THEME.white60
    }
});

export default MetamaskConnection;


