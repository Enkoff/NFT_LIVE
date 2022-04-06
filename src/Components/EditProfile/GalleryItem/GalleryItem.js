import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';

import {SIZE, THEME} from '../../../constants';
import {deleteGalleryItemByItemId, deleteNft} from '../../../Redux/slices';
import SvgIconBtn from '../../IconButton/SvgIconButton';
import {DeleteSvg} from '../../SVG';

//ПОФИКСИТИ УТЕЧКУ ПАМЯТІ
const GalleryItem = ({item}) => {
    const dispatch = useDispatch();

    const {id: itemId, nftImgUrl, nftFirebasePath} = item;
    const [isDelete, setIsDelete] = useState(false);

    const deleteHandler = async () => {
        setIsDelete(true);

        await dispatch(deleteNft({itemId, nftFirebasePath}));
        await dispatch(deleteGalleryItemByItemId({itemId}));

        setIsDelete(false);
    };

    return (
        <View style={styles.imgContainer}>
            <FastImage
                style={styles.fastImg}
                source={{uri: nftImgUrl, priority: FastImage.priority.high}}
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
    },
    fastImg: {
        width: '100%',
        height: '100%'
    }
});

export default GalleryItem;


