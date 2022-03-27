import React from 'react';
import {StyleSheet, View} from 'react-native';

import {HeartSvg, ShareSvg} from '../../SVG';
import CustomText from '../../CustomText/CustomText';
import {SIZE} from '../../../constants';
import {changeNumber} from '../../../config';

const LikeAndRetweets = ({item: {likes, retweets}}) => {
    return (
        <View style={styles.wrapper}>
            <View style={[styles.likeRepostContainer, {marginRight: SIZE.width.w21}]}>
                <HeartSvg width={SIZE.height.h19} height={SIZE.height.h19}/>
                <CustomText textStyle={styles.text}>{changeNumber(likes.length)}</CustomText>
            </View>
            <View style={styles.likeRepostContainer}>
                <ShareSvg width={SIZE.height.h19} height={SIZE.height.h19}/>
                <CustomText textStyle={styles.text}>{changeNumber(retweets)}</CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginTop: SIZE.height.h6
    },
    likeRepostContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: SIZE.width.w5,
    }
});

export default LikeAndRetweets;


