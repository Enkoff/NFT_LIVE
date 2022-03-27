import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomText} from '../../index';
import {SIZE} from '../../../constants';

const PublishTitle = (props) => {
    return (
        <View style={styles.wrapper}>
            <CustomText textStyle={styles.title}>Publish your NFT</CustomText>
            <CustomText textStyle={styles.subTitle}>Select marketplace</CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: SIZE.height.h24,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36,
        fontWeight: 'bold',
        marginBottom: SIZE.height.h6
    },
    subTitle: {
        marginBottom: SIZE.height.h20
    }
});

//     title: {
//         marginTop: 15,
//         marginBottom: 7,
//         fontSize: CONSTANTS.DEVICE_HEIGHT * 0.036,
//         lineHeight: CONSTANTS.DEVICE_HEIGHT * 0.036 + 10,
//         fontWeight: 'bold'
//     },
//     subTitle: {
//         color: 'rgba(255, 255, 255, 0.6)',
//         opacity: .8,
//         marginBottom: CONSTANTS.DEVICE_HEIGHT * 0.0278
//     },

export default PublishTitle;


