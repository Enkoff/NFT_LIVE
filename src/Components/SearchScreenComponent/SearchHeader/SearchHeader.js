import React from 'react';
import {StyleSheet, View} from 'react-native';

import Avatar from '../../Avatar/Avatar';
import {SIZE} from '../../../constants';
import {UniversalSearch} from '../../index';

const SearchHeader = ({callback, placeholder}) => {
    return (
        <View style={styles.wrapper}>
            <UniversalSearch callback={callback} placeholder={placeholder}/>
            <Avatar/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: SIZE.statusBarMarginTop,
        marginBottom: SIZE.height.h10,
        flexDirection: 'row',
        paddingHorizontal: SIZE.width.w15,
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
    },
});

export default SearchHeader;


