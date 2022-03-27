import React from 'react';
import {StyleSheet, View} from 'react-native';

import HorizontalCarousel from '../../HorizontalCarousel/HorizontalCarousel';
import {SIZE, THEME} from '../../../constants';
import FilterGalleryList from '../../FilterGalleryList/FilterGalleryList';

const BottomContent = ({user: {collectionsNames}, filterGalleryList, filterGalleryHandler, pressItemHandler}) => {
    return (
        <View style={styles.wrapper}>
            <HorizontalCarousel
                carouselData={collectionsNames}
                filterGalleryHandler={filterGalleryHandler}
                initialTab={'All NFT'}
            />
            <FilterGalleryList filterGalleryList={filterGalleryList} pressItemHandler={pressItemHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        minHeight: SIZE.deviceHeight / 1.6,
        paddingTop: SIZE.height.h24,
        backgroundColor: THEME.backgroundColor,
        borderTopRightRadius: SIZE.width.w16,
        borderTopLeftRadius: SIZE.width.w16,
    },
});

export default BottomContent;


