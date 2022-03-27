import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {SIZE} from '../../../constants';

const PhotoEditUploadImg = ({imgPath}) => {
    return (
        <View style={styles.uploadWrapper}>
            <Image source={{uri: imgPath}} style={styles.uploadImg}/>
        </View>
    );
};

const styles = StyleSheet.create({
    uploadWrapper: {
        marginTop: SIZE.height.h21,
        width: '100%',
        height: SIZE.deviceWidth - (SIZE.width.w15 * 2),
        overflow: 'hidden',
        borderRadius: SIZE.borderRadius.br12
    },
    uploadImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default PhotoEditUploadImg;


