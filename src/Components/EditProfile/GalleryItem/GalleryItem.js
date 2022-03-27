import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

import SvgIconBtn from '../../IconButton/SvgIconButton';
import {DeleteSvg} from '../../SVG';
import {SIZE, THEME} from '../../../constants';
import {addAndDeleteGalleryItemThunk, addAndDeleteNftTopItemThunk} from '../../../Redux/slices';

const GalleryItem = ({item}) => {
    const dispatch = useDispatch();
    const [isDelete, setIsDelete] = useState(false);
    const {user: {id}} = useSelector(state => state['user']);

    const deleteHandler = async () => {
        setIsDelete(true);
        await dispatch(addAndDeleteGalleryItemThunk({uid: id, galleryItem: item, isAdd: false}));

        const isPublishInNftLiveTop = item.publish.some(item => item.name === 'NFT Live');

        if (isPublishInNftLiveTop) {
            await dispatch(addAndDeleteNftTopItemThunk({galleryItem: item, isAdd: false}));
        }
        setIsDelete(false);
    };

    return (
        <View style={styles.imgContainer}>
            <FastImage
                style={{width: '100%', height: '100%'}}
                source={{uri: item.nftImgUrl, priority: FastImage.priority.high}}
                resizeMode={FastImage.resizeMode.cover}
            />
            <SvgIconBtn isLoading={isDelete} onPress={deleteHandler} wrapperStyle={styles.deleteBtn}>
                <DeleteSvg width={SIZE.height.h35} height={SIZE.height.h35}/>
            </SvgIconBtn>
        </View>
    );
};

const styles = StyleSheet.create({
    imgContainer: {
        width: SIZE.width.w171,
        height: SIZE.width.w171,
        borderRadius: SIZE.borderRadius.br12,
        marginVertical: SIZE.height.h8,
        overflow: 'hidden'
    },
    deleteBtn: {
        backgroundColor: THEME.red,
        position: 'absolute',
        top: SIZE.height.h8,
        right: SIZE.height.h8
    }
});

export default GalleryItem;


