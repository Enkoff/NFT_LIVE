import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SIZE} from '../../../constants';
import CustomButton from '../../CustomBotton/CustomButton';

const Button = () => {
    const navigation = useNavigation();

    const connectWalletHandler = () => {
        navigation.navigate('RegisterScreen');
    }

    return (
        <CustomButton
            name={'Connect wallet'}
            wrapperStyle={styles.wrapperStyle}
            textStyle={styles.textStyle}
            onPress={connectWalletHandler}
        />
    );
};

const styles = StyleSheet.create({
    wrapperStyle: {
        position: 'absolute',
        bottom: '6%',
        left: '9%',
        width: SIZE.width.w154
    },
    textStyle: {
        lineHeight: SIZE.lineHeight.lh17
    }
});

export default Button;


