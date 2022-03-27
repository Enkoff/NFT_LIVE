import React from 'react';
import {StyleSheet, View, TouchableNativeFeedback, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

import {SIZE, THEME} from '../../../constants';
import CustomText from '../../CustomText/CustomText';
import {useSelector} from 'react-redux';

const NftLiveTopCarouselRenderItem = ({item, setCurrentModalItem, setIsModal}) => {
    const {
        nftImgUrl,
        nftName,
        authorAvatar,
        authorNikName,
        ethPrice,
        authorBackground
    } = item;

    const itemHandler = () => {
        setCurrentModalItem(item);
        setIsModal(true);
    };

    return (
        <View style={styles.itemContainer}>
            <TouchableNativeFeedback onPress={itemHandler}>
                <View>
                    <View style={styles.imgContainer}>
                        <FastImage
                            style={styles.fastImg}
                            source={{
                                uri: nftImgUrl,
                                cache: FastImage.cacheControl.immutable,
                                priority: FastImage.priority.high,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <View style={styles.bottomContainer}>
                        <View>
                            <CustomText textStyle={styles.nftName}>{nftName}</CustomText>
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    style={[styles.authorAvatar, authorBackground && {backgroundColor: authorBackground}]}
                                    source={{uri: authorAvatar}}/>
                                <CustomText textStyle={styles.authorNikName}>{authorNikName}</CustomText>
                            </View>
                        </View>
                        <CustomText textStyle={styles.price}>{`${ethPrice} ETH`}</CustomText>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: THEME.light,
        width: SIZE.width.w315,
        borderRadius: SIZE.borderRadius.br20,
        marginHorizontal: SIZE.width.w15,
        overflow: 'hidden'
    },
    imgContainer: {
        height: SIZE.height.h315,
        borderRadius: SIZE.borderRadius.br20,
        overflow: 'hidden',
    },
    fastImg: {
        width: '100%',
        height: '100%'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZE.height.h20,
        paddingVertical: SIZE.width.w17,
    },
    nftName: {
        fontSize: SIZE.fontSize.fs16,
        lineHeight: SIZE.lineHeight.lh19,
        marginBottom: 6
    },
    authorAvatar: {
        width: SIZE.height.h20,
        height: SIZE.height.h20,
        borderRadius: SIZE.borderRadius.br8,
        marginRight: 6
    },
    authorNikName: {
        color: THEME.blue
    },
    price: {
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs20,
        lineHeight: SIZE.lineHeight.lh22
    }
});

export default NftLiveTopCarouselRenderItem;


