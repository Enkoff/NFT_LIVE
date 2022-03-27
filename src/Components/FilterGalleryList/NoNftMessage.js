import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {NotFoundPng} from '../../assets';
import CustomText from '../CustomText/CustomText';
import {SIZE} from '../../constants';

const NoNftMessage = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.imgContainer}>
                <Image source={NotFoundPng} style={styles.img}/>
            </View>
            <CustomText>NO NFT FOUND</CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: SIZE.deviceWidth,
        height: SIZE.deviceHeight * .45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        width: SIZE.deviceWidth * 0.7,
        height: SIZE.deviceHeight * .2
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
});

export default NoNftMessage;


