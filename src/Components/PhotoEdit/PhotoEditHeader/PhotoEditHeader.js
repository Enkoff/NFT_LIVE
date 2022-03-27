import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CustomButton, CustomText} from '../../index';
import {SIZE, THEME} from '../../../constants';

const PhotoEditHeader = ({formData}) => {
    const navigation = useNavigation();

    const skipHandler = () => {
        navigation.navigate('PublishScreen', {formData});
    };

    return (
        <View style={styles.header}>
            <CustomText textStyle={styles.skipTextStyle}>Edit your NFT</CustomText>
            <CustomButton
                onPress={skipHandler}
                name={'skip'}
                textStyle={styles.btnText}
                textWrapperStyle={styles.btnTextWrapper}
                wrapperStyle={styles.btnWrapper}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    skipTextStyle: {
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36
    },
    btnTextWrapper: {
        backgroundColor: THEME.white5
    },
    btnWrapper: {
        width: SIZE.width.w68,
        height: SIZE.height.h35,
        borderRadius: SIZE.borderRadius.br37
    },
    btnText: {
        color: THEME.white60
    }
});

export default PhotoEditHeader;


