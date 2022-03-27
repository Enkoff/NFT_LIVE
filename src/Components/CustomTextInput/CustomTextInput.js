import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import {ROOT_STYLE, SIZE, THEME} from '../../constants';
import CustomText from '../CustomText/CustomText';

const CustomTextInput = (
    {
        value,
        onChangeText,
        onBlur,
        inputStyle,
        placeholder,
        headerText,
        multiline,
        touched,
        errors,
        inputName,
        keyboardType = 'default',
        editable = true
    }) => {
    return (
        <>
            <CustomText textStyle={styles.headerText}>{headerText}</CustomText>
            <TextInput
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                style={[ROOT_STYLE, styles.textInput, inputStyle]}
                placeholderTextColor={THEME.white40}
                placeholder={placeholder}
                multiline={multiline}
                maxLength={151}
                editable={editable}
            />
            <View style={styles.errorWrapper}>
                {(touched[inputName] && errors[inputName]) &&  <CustomText textStyle={styles.error}>{errors[inputName]}</CustomText>}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    textInput: {
        position: 'relative',
        borderColor: THEME.white10,
        borderWidth: 1,
        borderRadius: SIZE.borderRadius.br12,
        paddingHorizontal: SIZE.width.w18,
        paddingVertical: SIZE.height.h16,
        backgroundColor: THEME.white5,
        height: SIZE.height.h50,
        textAlignVertical: 'top'
    },
    headerText: {
        marginBottom: SIZE.height.h10
    },
    errorWrapper: {
        paddingRight: SIZE.width.w8,
        height: SIZE.height.h16
    },
    error: {
        fontSize: SIZE.fontSize.fs10,
        textAlign: 'right',
        color: THEME.red
    }
});

export default CustomTextInput;


