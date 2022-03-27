import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomText from '../CustomText/CustomText';
import {SIZE, THEME} from '../../constants';

const ErrorModal = ({text}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.errorContainer}>
                <CustomText textStyle={styles.errorText}>{text}</CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZE.deviceWidth * 0.9,
        borderRadius: SIZE.deviceWidth * 0.02,
        backgroundColor: 'white',
        bottom: SIZE.deviceHeight * 0.13
    },
    errorText: {
        color: THEME.black90,
        fontWeight: 'bold'
    }
});

export default ErrorModal;


