import React from 'react';
import {StyleSheet, View} from 'react-native';

import Avatar from '../../Avatar/Avatar';
import Search from '../../Search/Search';
import {SIZE} from '../../../constants';

const HomeHeader = ({setFilterData}) => {
    return (
        <View style={styles.wrapper}>
            <Search setFilterData={setFilterData}/>
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

export default HomeHeader;


