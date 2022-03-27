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

    const followUnfollowHandler = async () => {
        dispatch(followUnfollowThunk({userId: id, followUserId: authorId, item, user}));
    };

    useEffect(() => {
        const isFollow = subscriptions.some(item => item.id === authorId);

        if (isFollow) {
            setIsFollow(true);
        } else {
            setIsFollow(false);
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
            {id !== authorId &&
            <CustomButton
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


