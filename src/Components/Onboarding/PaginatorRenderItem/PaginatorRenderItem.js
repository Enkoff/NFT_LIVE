import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SIZE, THEME} from '../../../constants';

const PaginatorRenderItem = ({currentIndex, index}) => {
    return (
        <View style={[styles.dot, {
            backgroundColor: index === currentIndex ? THEME.secondary : THEME.white10,
            width: index === currentIndex ? SIZE.height.h10 : SIZE.height.h6,
            height: index === currentIndex ? SIZE.height.h10 : SIZE.height.h6,
        }]} key={index.toString()}/>
    );
};

const styles = StyleSheet.create({
    dot: {
        borderRadius: 10,
        marginHorizontal: SIZE.width.w6,
    },
});

export default PaginatorRenderItem;


