import React from 'react';
import {StyleSheet, View, TouchableNativeFeedback} from 'react-native';

import CustomText from '../CustomText/CustomText';
import {SIZE, THEME} from '../../constants';

const ButtonTextIcon = ({name, wrapperStyle, onPress, contentWrapperStyle, children, btnTextStyle}) => {
    return (
        <View style={[styles.wrapper, wrapperStyle]}>
            <TouchableNativeFeedback onPress={onPress}>
                <View style={[styles.contentWrapper, contentWrapperStyle]}>
                    {children}
                    <CustomText textStyle={[{marginLeft: SIZE.width.w15}, btnTextStyle]}>{name}</CustomText>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: SIZE.width.w164,
        height: SIZE.height.h42,
        overflow: 'hidden',
        borderRadius: SIZE.borderRadius.br12,
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: THEME.primary,
    }
});

export default ButtonTextIcon;






