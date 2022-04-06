import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {SIZE, THEME} from '../../../constants';
import RootModalInput from '../RootModalInput/RootModalInput';
import MainTopContentAvatarAndNikName from '../MainTopContentAvatarAndNikName/MainTopContentAvatarAndNikName';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../CustomBotton/CustomButton';
import {followUnfollowThunk} from '../../../Redux/slices';

const MainTopContent = (
    {
        item,
        inputs,
        changeInput,
        isEditMode,
        onBlurInput,
        setIsModal
    }) => {
    const dispatch = useDispatch();

    const {user} = useSelector(state => state['user']);

    const {authorId} = item;
    const {id, subscriptions} = user;

    const [isFollow, setIsFollow] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const followUnfollowHandler = async () => {
        setIsLoading(true);
        const followUser = {
            followUserId: item.authorId,
            followUserAvatarUrl: item.authorAvatar,
            followUserAvatarBackground: item.authorBackground,
            followUserNikName: item.authorNikName
        };
        await dispatch(followUnfollowThunk({user, followUser, isFollow}));

        setIsLoading(false);
        setIsFollow(prev => !prev);
    };

    useEffect(() => {
        if (!isLoading) {
            const isFollow = subscriptions.some(item => item.id === authorId);
            isFollow ? setIsFollow(true) : setIsFollow(false);
        }
    }, [subscriptions]);

    return (
        <View style={[styles.topContentContainer, {marginBottom: isEditMode ? SIZE.height.h6 : SIZE.height.h16}]}>
            <View>
                <RootModalInput
                    initialValue={inputs.nftName}
                    value={inputs.nftName}
                    inputName={'nftName'}
                    onChange={changeInput}
                    editable={isEditMode}
                    onBlurInput={onBlurInput}
                    isEditMode={isEditMode}
                    maxLength={20}
                    style={!isEditMode ? {...styles.nftName} : {...styles.nftNameEdit}}
                />
                <MainTopContentAvatarAndNikName
                    item={item}
                    setIsModal={setIsModal}
                />
            </View>
            {id !== authorId && <CustomButton
                isLoading={isLoading}
                name={isFollow ? 'Unfollow' : 'Follow'}
                onPress={followUnfollowHandler}
                wrapperStyle={styles.followBtn}
                textWrapperStyle={{backgroundColor: isFollow ? THEME.white5 : THEME.secondary}}
            />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    topContentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nftName: {
        fontSize: SIZE.fontSize.fs16,
        lineHeight: SIZE.lineHeight.lh19,
        marginBottom: SIZE.height.h6,
        borderWidth: 0,
    },
    nftNameEdit: {
        paddingHorizontal: SIZE.width.w10,
        borderRadius: SIZE.height.h10,
        marginBottom: SIZE.height.h6,
    },
    followBtn: {
        width: SIZE.width.w92,
        height: SIZE.height.h35,
    },
});

export default MainTopContent;


