import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

import {SvgIconButton} from '../../index';
import {CloseSvg} from '../../../assets';
import {SIZE, THEME} from '../../../constants';
import {
    deleteUploadImage,
    updateAllGalleryItemThunk,
    updateNftLiveTopItemByAuthorIdThunk,
    updateUserAvatarThunk
} from '../../../Redux/slices';
import {UpdateSvg} from '../../SVG';

const UploadImageRenderItem = ({uploadImage, isEditProfile}) => {
    const dispatch = useDispatch();
    const {user: {id, avatarBackground, oldAvatarFileName, avatarUrl}} = useSelector(state => state['user']);
    const [isUpload, setIsUpload] = useState(false);
    const [isUploadIcon, setIsUploadIcon] = useState(false);

    const deleteHandler = () => {
        dispatch(deleteUploadImage());
    };

    useEffect(() => {
        if (uploadImage !== avatarUrl) {
            setIsUploadIcon(true);
        }
    }, [uploadImage]);

    const uploadHandler = async () => {
        setIsUpload(true);

        const response = await dispatch(updateUserAvatarThunk({
            uid: id,
            imgURL: uploadImage,
            isCarouselAvatar: false,
            initialBg: THEME.white5,
            oldAvatarFileName
        }));
        await dispatch(updateAllGalleryItemThunk({uid: id, fields: {authorAvatar: response.payload}}));
        await dispatch(updateNftLiveTopItemByAuthorIdThunk({authorId: id, fields: {authorAvatar: response.payload}}));

        setIsUpload(false);
        setIsUploadIcon(false);
    };

    return (
        <View style={[styles.uploadContainer, {backgroundColor: avatarBackground}]}>
            <FastImage
                style={styles.uploadImage}
                source={{uri: uploadImage, priority: FastImage.priority.high}}
                resizeMode={FastImage.resizeMode.cover}
            />
            <SvgIconButton onPress={deleteHandler} wrapperStyle={styles.closeSvgWrapper}>
                <CloseSvg width={SIZE.height.h24} height={SIZE.height.h24}/>
            </SvgIconButton>
            {
                isEditProfile && isUploadIcon &&
                <SvgIconButton isLoading={isUpload} onPress={uploadHandler} wrapperStyle={styles.uploadSvgBtn}>
                    <UpdateSvg width={SIZE.height.h20} height={SIZE.height.h20}/>
                </SvgIconButton>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    uploadContainer: {
        width: '100%',
        height: '100%',
        borderRadius: SIZE.borderRadius.br26,
        borderWidth: 1,
        borderColor: THEME.white10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadImage: {
        width: '100%',
        height: '100%',
    },
    closeSvgWrapper: {
        position: 'absolute',
        backgroundColor: 'transparent',
        bottom: SIZE.height.h6
    },
    uploadSvgBtn: {
        position: 'absolute',
        top: SIZE.height.h8,
        right: SIZE.height.h8,
        width: SIZE.height.h32,
        height: SIZE.height.h32
    }
});

export default UploadImageRenderItem;


