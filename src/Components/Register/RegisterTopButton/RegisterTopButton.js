import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CustomButton, CustomText} from '../../index';
import {SIZE, THEME} from '../../../constants';

const RegisterTopButton = (props) => {
    const navigation = useNavigation();

    const skipHandler = () => {
        navigation.navigate('SetPinCodeScreen');
    }

    return (
        <View style={styles.wrapper}>
            <CustomText textStyle={styles.textStyle}>Create a profile</CustomText>
            <CustomButton
                name={'skip'}
                onPress={skipHandler}
                wrapperStyle={styles.btnWrapperStyle}
                textWrapperStyle={styles.btnTextWrapperStyle}
                textStyle={styles.btnTextStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZE.width.w15,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs20,
        lineHeight: SIZE.lineHeight.lh22
    },
    btnWrapperStyle: {
        width: SIZE.width.w68,
        height: SIZE.height.h35,
    },
    btnTextWrapperStyle: {
        backgroundColor: THEME.white5
    },
    btnTextStyle: {
        color: THEME.white60
    }
});

export default RegisterTopButton;


