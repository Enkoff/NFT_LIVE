import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {SIZE} from '../../../constants';
import NftLiveTopButton from '../NftLiveTop/NftLiveTopButton/NftLiveTopButton';
import {ProfileModalTopButton} from '../../Profile';

const NftImgAndButtons = ({item, isProfile, isEditMode, setIsEditMode, inputs, setIsModal}) => {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.img} source={{uri: item['nftImgUrl']}}/>
            {!isProfile && <NftLiveTopButton item={item}/>}
            {isProfile && (
                <ProfileModalTopButton
                    item={item}
                    isEditMode={isEditMode}
                    setIsEditMode={setIsEditMode}
                    inputs={inputs}
                    setIsModal={setIsModal}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '50%',
        borderRadius: SIZE.borderRadius.br12,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: SIZE.height.h16
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
});

export default NftImgAndButtons;


