import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import {ROOT_STYLE, SIZE, THEME} from '../../../constants';
import InputButtons from '../InputButtons/InputButtons';

const CollectionNameInput = ({item}) => {
    const [value, setValue] = useState(item.collectionName);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    const onChangText = (text) => {
        setValue(text);
        if (item.collectionName !== text && text) {
            setIsEditMode(true);
        } else {
            setIsEditMode(false);
        }
    };

    const onBlur = () => {
        setValue(item.collectionName);
        setIsEditMode(false);
        setIsFocus(false);
    };

    const onFocus = () => {
        setIsFocus(true);
    };

    return (

        <View style={[ROOT_STYLE, styles.inputAndBtnWrapper,
            isFocus && styles.inputEditMode
        ]}>
            <TextInput
                value={value}
                style={[ROOT_STYLE, styles.input]}
                onBlur={onBlur}
                onChangeText={onChangText}
                onFocus={onFocus}
                placeholder={'The field cannot be empty'}
                placeholderTextColor={THEME.red}
            />
            <InputButtons
                isEditMode={isEditMode}
                item={item}
                newName={value}
                setIsEditMode={setIsEditMode}
                setIsFocus={setIsFocus}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputAndBtnWrapper: {
        flexDirection: 'row',
        position: 'relative',
        borderRadius: SIZE.borderRadius.br12,
        backgroundColor: THEME.aqua,
        marginVertical: SIZE.height.h10,
        borderWidth: 1,
        justifyContent: 'space-between',
        paddingLeft: SIZE.width.w18,
        paddingRight: SIZE.width.w8
    },
    input: {
        width: '75%',
    },
    inputEditMode: {
        borderColor: THEME.blue,
    }
});

export default CollectionNameInput;


