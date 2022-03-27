import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomText from '../../CustomText/CustomText';
import {SIZE, THEME} from '../../../constants';
import {convertPrice} from '../../../config/module/convertPrice';

const RootModalPrice = ({ethPrice, children}) => {
    return (
        <>
            <View style={styles.wrapper}>
                {children}
                <CustomText textStyle={styles.ethPrice}>ETH</CustomText>
            </View>
            <CustomText textStyle={styles.dollarPrice}>$ {convertPrice(ethPrice)}</CustomText>
        </>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ethPrice: {
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs20,
        lineHeight: SIZE.lineHeight.lh22,
    },
    dollarPrice: {
        color: THEME.white80
    },

});

export default RootModalPrice;


