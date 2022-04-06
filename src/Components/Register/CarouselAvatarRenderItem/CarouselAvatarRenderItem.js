import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

import {SvgIconButton} from '../../index';
import {EditAvatarColorSvg, UpdateSvg} from '../../SVG';
import {SIZE} from '../../../constants';
import {
    setCurrentAvatarId,
    updateGalleryItemByFields,
    updateNftByAuthorIdAndFieldsKeyThunk,
    updateUserByUidAndFieldsKeysThunk
} from '../../../Redux/slices';

const CarouselAvatarRenderItem = ({item: {id, initialBg, imgURL}, setIsPopup, isEditProfile, isPopup}) => {
    const dispatch = useDispatch();
    const [isUpload, setIsUpload] = useState(false);
    const {uid} = useSelector(state => state['auth']);

    const editHandler = () => {
        setIsPopup(true);
        dispatch(setCurrentAvatarId({id}));
    };

    const uploadHandler = async () => {
        setIsUpload(true);

        const nftUpdateFields = {authorAvatar: imgURL, authorBackground: initialBg};
        const userUpdateFields = {avatarUrl: imgURL, avatarBackground: initialBg};

        //ТУТ ПОТРІБНО ПРОПИСАТИ ЯКИЙСБ КОМБАЙН ДЛЯ ЦИХ ДИСПАТЧІВ
        await dispatch(updateUserByUidAndFieldsKeysThunk({uid, updateFields: userUpdateFields}));
        await dispatch(updateGalleryItemByFields({updateFields: nftUpdateFields}));
        await dispatch(updateNftByAuthorIdAndFieldsKeyThunk({uid, updateFields: nftUpdateFields}));

        setIsUpload(false);
    };

    return (
        <View style={[styles.item, {backgroundColor: initialBg}]}>
            <FastImage
                style={styles.fastImg}
                source={{uri: imgURL, priority: FastImage.priority.high}}
                resizeMode={FastImage.resizeMode.contain}
            />
            {
                !isPopup && <SvgIconButton onPress={editHandler} wrapperStyle={styles.svgBtnWrapper}>
                    <EditAvatarColorSvg width={SIZE.height.h16} height={SIZE.height.h16}/>
                </SvgIconButton>
            }
            {
                isEditProfile && !isPopup &&
                <SvgIconButton isLoading={isUpload} onPress={uploadHandler} wrapperStyle={styles.uploadSvgBtn}>
                    <UpdateSvg width={SIZE.height.h20} height={SIZE.height.h20}/>
                </SvgIconButton>
            }
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
        borderRadius: SIZE.borderRadius.br26
    },
    fastImg: {
        width: '80%',
        height: '80%'
    },
    svgBtnWrapper: {
        position: 'absolute',
        top: SIZE.height.h8,
        right: SIZE.height.h8,
        width: SIZE.height.h32,
        height: SIZE.height.h32
    },
    uploadSvgBtn: {
        position: 'absolute',
        top: SIZE.height.h8,
        left: SIZE.height.h8,
        width: SIZE.height.h32,
        height: SIZE.height.h32
    }
});

export default CarouselAvatarRenderItem;


