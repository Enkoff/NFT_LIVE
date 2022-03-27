import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomButton} from '../../index';
import {SIZE} from '../../../constants';

const ContinueBtn = ({onPress, wrapperStyle}) => {
    return (
        <View style={[styles.wrapper, wrapperStyle]}>
            <CustomButton onPress={onPress} name={'Continue'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: SIZE.height.h21,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ContinueBtn;


