import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import CustomText from '../CustomText/CustomText';
import {SIZE} from '../../constants';
import PublishIcons from './PublishIcons';
import {SoldSvg} from '../SVG';

const GalleryListRenderItem = ({galleryItem, pressItemHandler, index, array}) => {

    const itemPressHandler = () => {
        pressItemHandler(galleryItem);
    };

    return (
        <TouchableOpacity onPress={itemPressHandler} activeOpacity={.6}>
            <View style={[
                styles.itemContainer,
                {marginBottom: index === array.length - 1 ? SIZE.height.h20 : SIZE.height.h8}
            ]}>
                <Image source={{uri: galleryItem['nftImgUrl']}} style={styles.img}/>
                <PublishIcons publishArray={galleryItem.publish}/>
                {
                    galleryItem['sold'] &&
                <View style={styles.soldItem}>
                    <SoldSvg />
                    <CustomText textStyle={{marginTop: 6}}>Sold out</CustomText>
                </View>
                }
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: SIZE.width.w171,
        height: SIZE.width.w171,
        overflow: 'hidden',
        borderRadius: 13,
        margin: SIZE.height.h8,
        position: 'relative',
        zIndex: 5,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 5
    },
    soldItem: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GalleryListRenderItem;


