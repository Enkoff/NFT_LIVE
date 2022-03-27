import React from 'react';
import {StyleSheet, View} from 'react-native';

import PaginatorRenderItem from '../PaginatorRenderItem/PaginatorRenderItem';
import {SIZE} from '../../../constants';

const Paginator = ({data, currentIndex}) => {
    return (
        <View style={styles.screen}>
            {
                data.map((item, i) => <PaginatorRenderItem key={i} currentIndex={currentIndex} index={i}/>)
            }
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: SIZE.height.h273,
        left: 26,
    },
});

export default Paginator;


