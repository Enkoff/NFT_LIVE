import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import {SIZE} from '../../../constants';

const CarouselFooterLoader = ({size = 'large', wrapperStyle}) => {
    return (
        <View style={[styles.wrapper, wrapperStyle]}>
            <ActivityIndicator  size={size}/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: SIZE.height.h165,
        justifyContent: 'center'
    },
});

export default CarouselFooterLoader;


