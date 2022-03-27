import React from 'react';
import {StyleSheet, View, TouchableNativeFeedback, ActivityIndicator} from 'react-native';

import CustomText from '../CustomText/CustomText';
import {SIZE, THEME} from '../../constants';

const CustomButton = (
    {
        name,
        onPress,
        wrapperStyle,
        textWrapperStyle,
        textStyle,
        isLoading = false,
        disabled = false
    }
) => {
    return (
        <View style={[styles.wrapper, wrapperStyle]}>
            <TouchableNativeFeedback disabled={disabled} onPress={onPress}>
                <View style={[styles.textWrapper, textWrapperStyle, disabled && styles.disabled]}>
                    {isLoading && <ActivityIndicator color={'white'}/>}
                    {!isLoading && <CustomText textStyle={textStyle}>{name}</CustomText>}
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: SIZE.width.w118,
        height: SIZE.height.h45,
        overflow: 'hidden',
        borderRadius: SIZE.borderRadius.br90
    },
    textWrapper: {
        backgroundColor: THEME.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    disabled: {
        backgroundColor: THEME.white5
    }
});

export default CustomButton;


