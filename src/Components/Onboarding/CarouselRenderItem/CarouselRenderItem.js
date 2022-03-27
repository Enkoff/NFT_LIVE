import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import CustomText from '../../CustomText/CustomText';
import {SIZE, THEME} from '../../../constants';

const CarouselRenderItem = ({item: {title, subTitle, img}}) => {
    return (
        <View style={styles.wrapper}>
            <FastImage
                style={styles.fastImg}
                source={{uri: img}}
                resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.textContainer}>
                <CustomText textStyle={styles.title}>{title}</CustomText>
                <CustomText textStyle={styles.subTitle}>{subTitle}</CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: SIZE.deviceHeight / 1.4,
        paddingTop: SIZE.deviceHeight < 718 ? '6%' : '21%',
    },
    fastImg: {
        width: SIZE.deviceWidth,
        height: SIZE.deviceWidth / 1.27
    },
    textContainer: {
        position: 'absolute',
        paddingLeft: 30,
        bottom: 0
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs32,
        lineHeight: SIZE.lineHeight.lh36,
        marginBottom: 2,
    },
    subTitle: {
        color:  THEME.white60,
    },
});

export default CarouselRenderItem;


