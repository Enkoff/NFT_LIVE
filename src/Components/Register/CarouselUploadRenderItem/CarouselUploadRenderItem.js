import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import {SIZE} from '../../../constants';
import UploadImageRenderItem from './UploadImageRenderItem';
import NotImageRenderItem from './NotImageRenderItem';

const CarouselUploadRenderItem = ({item: {imgURL}, isEditProfile}) => {
    const {uploadImage} = useSelector(state => state['avatar']);

    return (
        <View style={styles.item}>
            {uploadImage && <UploadImageRenderItem uploadImage={uploadImage} isEditProfile={isEditProfile}/>}
            {!uploadImage && <NotImageRenderItem imgURL={imgURL}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZE.height.h12,
        width: SIZE.height.h150,
        height: SIZE.height.h150,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: SIZE.borderRadius.br26,
    }
});

export default CarouselUploadRenderItem;


