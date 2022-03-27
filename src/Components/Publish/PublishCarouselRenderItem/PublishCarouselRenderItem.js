import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {SIZE, THEME} from '../../../constants';
import {CustomText} from '../../index';
import AvatarLoader from '../../AvatarLoader/AvatarLoader';

const PublishCarouselRenderItem = ({item: {imgUrl, name}, isLoad = false}) => {
    return (
        <View style={styles.itemWrapper}>
            <View style={styles.imgWrapper}>
                {!isLoad && <Image source={{uri: imgUrl}} style={styles.img}/>}
                {isLoad && <AvatarLoader/>}
            </View>
            {!isLoad && <CustomText textStyle={styles.itemName}>{name}</CustomText>}
        </View>
    );
};

const styles = StyleSheet.create({
    itemWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZE.height.h150,
        height: SIZE.height.h150,
        backgroundColor: THEME.backgroundColor,
        borderRadius: SIZE.borderRadius.br26
    },
    imgWrapper: {
        width: '40%',
        height: '40%',
        borderRadius: 50,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    itemName: {
        marginTop: SIZE.height.h8,
        color: THEME.white60
    }
});

export default PublishCarouselRenderItem;


