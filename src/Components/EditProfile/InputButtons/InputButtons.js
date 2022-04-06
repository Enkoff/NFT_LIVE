import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SIZE, THEME} from '../../../constants';
import {
    addAndDeleteCollectionNameByUidThunk,
    updateCollectionNameByUidAndItemIdThunk,
    updateNftByCollectionNameThunk
} from '../../../Redux/slices';
import {DeleteSvg, EditSvg, SaveSvg} from '../../SVG';
import SvgIconBtn from '../../IconButton/SvgIconButton';

const InputButtons = ({item, newName, isEditMode, setIsEditMode, setIsFocus}) => {
    const dispatch = useDispatch();
    const {uid} = useSelector(state => state['auth']);

    const [isDelete, setIsDelete] = useState(false);
    const [isSave, setIsSave] = useState(false);

    // ПОТРІБНО ВИДАЛИТИ ВСІ НФТ ЩО Є В КОЛЕКЦІЇ ТА СТВОРИТИ МОДАЛЬНЕ ВІКНО З ЗАПРОСОМ ВИДАЛЕННЯ!!!!
    const deleteHandler = async () => {
        setIsDelete(true);
        await dispatch(addAndDeleteCollectionNameByUidThunk({uid, collectionObj: item, isAdd: false}));
        setIsDelete(false);
    };

    const saveHandler = async () => {
        setIsSave(true);

        await dispatch(updateCollectionNameByUidAndItemIdThunk({
            uid,
            newName,
            collectionId: item.id,
            oldCollectionName: item.collectionName
        }));
        await dispatch(updateNftByCollectionNameThunk({
            uid,
            newName,
            oldCollectionName: item.collectionName
        }));

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


