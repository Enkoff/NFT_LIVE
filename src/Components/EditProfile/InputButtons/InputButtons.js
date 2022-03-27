import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {DeleteSvg, EditSvg, SaveSvg} from '../../SVG';
import SvgIconBtn from '../../IconButton/SvgIconButton';
import {SIZE, THEME} from '../../../constants';
import {addAndDeleteCollectionNameThunk, updateCollectionNameThunk} from '../../../Redux/slices';

const InputButtons = ({item, newName, isEditMode, setIsEditMode, setIsFocus}) => {
    const dispatch = useDispatch();
    const [isDelete, setIsDelete] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const {uid} = useSelector(state => state['auth']);

    //ПОРІБНО ВИДАЛИТИ ВСІ НФТ
    const deleteHandler = async () => {
        setIsDelete(true);
        await dispatch(addAndDeleteCollectionNameThunk({uid, collectionNameRemoveObj: item, isAdd: false}));
        setIsDelete(false);
    };

    const saveHandler = async () => {
        setIsSave(true);
        await dispatch(updateCollectionNameThunk({uid, newName, item}));
        setIsSave(false);
        Keyboard.dismiss();
        setIsEditMode(false);
        setIsFocus(false);
    };

    return (
        <View style={styles.wrapper}>
            {
                isEditMode
                    ? <SvgIconBtn isLoading={isSave} onPress={saveHandler} wrapperStyle={[styles.icon, styles.saveBtn]}>
                        <SaveSvg width={SIZE.height.h24} height={SIZE.height.h24}/>
                    </SvgIconBtn>
                    : <EditSvg width={SIZE.height.h35} height={SIZE.height.h35}/>
            }
            <SvgIconBtn isLoading={isDelete} onPress={deleteHandler} wrapperStyle={styles.deleteBtn}>
                <DeleteSvg width={SIZE.height.h35} height={SIZE.height.h35}/>
            </SvgIconBtn>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteBtn: {
        width: SIZE.height.h35,
        height: SIZE.height.h35,
        backgroundColor: THEME.red,
        marginLeft: SIZE.width.w8
    },
    saveBtn: {
        width: SIZE.height.h35,
        height: SIZE.height.h35,
        backgroundColor: THEME.secondary,
        marginLeft: SIZE.width.w8
    }
});

export default InputButtons;


