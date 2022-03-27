import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import SvgIconButton from '../../../IconButton/SvgIconButton';
import {HeartSvg, ShareSvg} from '../../../SVG';
import {SIZE, THEME} from '../../../../constants';
import {
    addAndDeleteLikeThunk,
    addAndDeleteNftLiveTopItemLikeThunk,
    addRetweetsNftLiveTopItemThunk, addRetweetThunk,
} from '../../../../Redux/slices';

const NftLiveTopButton = ({item: {id, likes, authorId}}) => {
    const dispatch = useDispatch();
    const {uid} = useSelector(state => state['auth']);
    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        const isUserLike = likes.some(itemId => itemId === uid);
        setIsLike(isUserLike);
    }, [likes]);

    const likeHandler = () => {
        if (isLike) {
            dispatch(addAndDeleteNftLiveTopItemLikeThunk({itemId: id, userId: uid, isAdd: false}));
            dispatch(addAndDeleteLikeThunk({itemId: id, userId: uid, authorId, isAdd: false}));
        } else {
            dispatch(addAndDeleteNftLiveTopItemLikeThunk({itemId: id, userId: uid}));
            dispatch(addAndDeleteLikeThunk({itemId: id, userId: uid, authorId}));
        }
    };

    const shareHandler = () => {
        dispatch(addRetweetsNftLiveTopItemThunk({itemId: id}));
        dispatch(addRetweetThunk({authorId, itemId: id}));
    };

    return (
        <>
            <SvgIconButton onPress={likeHandler}
                           wrapperStyle={[styles.saveBtn, {backgroundColor: isLike ? THEME.red : THEME.black50}]}>
                <HeartSvg width={SIZE.height.h19} height={SIZE.height.h19}/>
            </SvgIconButton>
            <SvgIconButton onPress={shareHandler} wrapperStyle={[styles.saveBtn, styles.shareSvg]}>
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


