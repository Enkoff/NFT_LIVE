import React from 'react';
import {StyleSheet, View} from 'react-native';

import {WatchSvg} from '../../SVG';
import CustomText from '../../CustomText/CustomText';
import {SIZE, THEME} from '../../../constants';

const Time = ({item: {selEnded}, isEditMode}) => {
    return (
        <View style={styles.wrapper}>
            <WatchSvg width={SIZE.width.w10} height={SIZE.height.h16}/>
            <CustomText textStyle={styles.timeText}>{selEnded}</CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SIZE.height.h8,
        backgroundColor: THEME.white5,
        borderRadius: SIZE.borderRadius.br8,
        marginVertical: SIZE.height.h16
    },
    timeText: {
        fontSize: SIZE.fontSize.fs12,
        lineHeight: SIZE.lineHeight.lh15,
        marginLeft: SIZE.width.w10,
    }
});

export default Time;


