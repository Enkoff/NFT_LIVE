import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = ({currentCollectionName}) => {
    const {user: {gallery}} = useSelector(state => state['user']);

    return (
        <View style={styles.wrapper}>
            {
                gallery.map(item => {
                    if (currentCollectionName === item.collectionName) {
                        return <GalleryItem key={item.id} item={item}/>;
                    }
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default Gallery;


