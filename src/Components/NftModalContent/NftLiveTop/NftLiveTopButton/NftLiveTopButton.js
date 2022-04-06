import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SIZE, THEME} from '../../../../constants';
import SvgIconButton from '../../../IconButton/SvgIconButton';
import {HeartSvg, ShareSvg} from '../../../SVG';
import {
    addAndDeleteLikeThunkByNftId,
    addNftRetweetByNftIdThunk,
    addAndDeleteLikeByGalleryItemId,
    addGalleryItemRetweetByItemId
} from '../../../../Redux/slices';

const NftLiveTopButton = ({item: {id, likes, authorId}}) => {
    const dispatch = useDispatch();
    const {uid} = useSelector(state => state['auth']);
    const [isLike, setIsLike] = useState(false);
    const [isMyNft, setIsMyNft] = useState(null);

    useEffect(() => {
        const isUserLike = likes.some(itemId => itemId === uid);
        const isMyNft = uid === authorId;
        setIsLike(isUserLike);
        setIsMyNft(isMyNft);
    }, [likes]);

    const likeHandler = () => {
        if (isLike) {
            dispatch(addAndDeleteLikeThunkByNftId({isAdd: false, itemId: id, uid}));
            isMyNft && dispatch(addAndDeleteLikeByGalleryItemId({isAdd: false, itemId: id, uid}));
        } else {
            dispatch(addAndDeleteLikeThunkByNftId({isAdd: true, itemId: id, uid}));
            isMyNft && dispatch(addAndDeleteLikeByGalleryItemId({isAdd: true, itemId: id, uid}));
        }
    };

    const retweetsHandler = () => {
        dispatch(addNftRetweetByNftIdThunk({nftId: id}));
        isMyNft && dispatch(addGalleryItemRetweetByItemId({itemId: id}));
    };

    return (
        <>
            <SvgIconButton onPress={likeHandler}
                           wrapperStyle={[styles.saveBtn, {backgroundColor: isLike ? THEME.red : THEME.black50}]}>
                <HeartSvg width={SIZE.height.h19} height={SIZE.height.h19}/>
            </SvgIconButton>
            <SvgIconButton onPress={retweetsHandler} wrapperStyle={[styles.saveBtn, styles.shareSvg]}>
                <ShareSvg width={SIZE.height.h19} height={SIZE.height.h19}/>
            </SvgIconButton>
        </>
    );
};

const styles = StyleSheet.create({
    saveBtn: {
        position: 'absolute',
        width: SIZE.height.h35,
        height: SIZE.height.h35,
        top: SIZE.height.h8,
        right: SIZE.height.h8,
        backgroundColor: THEME.black50
    },
    shareSvg: {
        right: SIZE.height.h53
    }
});

export default NftLiveTopButton;


