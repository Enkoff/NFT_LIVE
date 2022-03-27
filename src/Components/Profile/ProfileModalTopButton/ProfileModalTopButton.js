import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {DeleteSvg, EditSvg, SaveSvg} from '../../SVG';
import SvgIconBtn from '../../IconButton/SvgIconButton';
import {SIZE, THEME} from '../../../constants';
import {
    addAndDeleteGalleryItemThunk, addAndDeleteNftTopItemThunk,
    updateGalleryItemThunk
} from '../../../Redux/slices';

const ProfileModalTopButton = (
    {
        item,
        isEditMode,
        setIsEditMode,
        inputs,
        setIsModal
    }
) => {
    const {id: itemId, publish} = item;

    const dispatch = useDispatch();
    const [isSave, setIsSave] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const {uid} = useSelector(state => state['auth']);

    const deleteHandler = async () => {
        setIsDelete(true);

        await dispatch(addAndDeleteGalleryItemThunk({uid, galleryItem: item, isAdd: false}));

        const isPublishInNftLiveTop = item.publish.some(item => item.name === 'NFT Live');

        if (isPublishInNftLiveTop) {
            await dispatch(addAndDeleteNftTopItemThunk({galleryItem: item, isAdd: false}));
        }

        setIsDelete(false);
        setIsModal(false);
    };

    const saveHandler = async () => {
        setIsSave(true);

        await dispatch(updateGalleryItemThunk({uid, itemId, inputs}));

        setIsSave(false);
        setIsEditMode(false);
    };

    const editHandler = () => {
        setIsEditMode(true);
    };

    if (publish.length > 1) {
        return (
            <SvgIconBtn isLoading={isDelete} onPress={deleteHandler} wrapperStyle={[styles.icon, styles.deleteIcon]}>
                <DeleteSvg width={SIZE.height.h35} height={SIZE.height.h35}/>
            </SvgIconBtn>
        );
    }

    return (
        <>
            {!isEditMode
                ? <SvgIconBtn onPress={editHandler} wrapperStyle={[styles.icon, styles.editIcon]}>
                    <EditSvg width={SIZE.height.h35} height={SIZE.height.h35}/>
                </SvgIconBtn>
                : <SvgIconBtn isLoading={isSave} onPress={saveHandler} wrapperStyle={[styles.icon, styles.saveSvg]}>
                    <SaveSvg width={SIZE.height.h24} height={SIZE.height.h24}/>
                </SvgIconBtn>
            }
            <SvgIconBtn isLoading={isDelete} onPress={deleteHandler} wrapperStyle={[styles.icon, styles.deleteIcon]}>
                <DeleteSvg width={SIZE.height.h35} height={SIZE.height.h35}/>
            </SvgIconBtn>
        </>
    );
};

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        width: SIZE.height.h35,
        height: SIZE.height.h35
    },
    editIcon: {
        top: SIZE.height.h8,
        left: SIZE.width.w8,
        backgroundColor: THEME.marine
    },
    deleteIcon: {
        top: SIZE.height.h8,
        right: SIZE.width.w8,
        backgroundColor: THEME.red
    },
    saveSvg: {
        top: SIZE.height.h8,
        left: SIZE.width.w8,
        backgroundColor: THEME.secondary
    }
});

export default ProfileModalTopButton;


