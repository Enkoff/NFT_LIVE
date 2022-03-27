import React from 'react';
import {View, StyleSheet} from 'react-native';

import GalleryListRenderItem from './GalleryListRenderItem';
import {SIZE} from '../../constants';
import NoNftMessage from './NoNftMessage';

const FilterGalleryList = ({filterGalleryList, pressItemHandler}) => {

    if (filterGalleryList.length === 0) {
        return <NoNftMessage/>;
    }

    return (
        <View style={styles.galleryWrapper}>
            {
                filterGalleryList.map((item, index, array) => (
                    <GalleryListRenderItem
                        key={item.id}
                        index={index}
                        array={array}
                        galleryItem={item}
                        pressItemHandler={pressItemHandler}
                    />
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    galleryWrapper: {
        marginTop: SIZE.height.h12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: SIZE.width.w8,
        justifyContent: 'space-between',
    }
});

export default FilterGalleryList;


