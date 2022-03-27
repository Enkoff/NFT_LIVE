import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {ROOT_STYLE, THEME} from '../../../constants';

const RootModalInput = ({
                            value,
                            onChange,
                            inputName,
                            initialValue,
                            onBlurInput,
                            isEditMode,
                            style,
                            isMultiline = false,
                            maxLength = 140,
                            keyboardType = 'default'
                        }) => {
    const [initialText, setInitialValue] = useState('');

    useEffect(() => {
        setInitialValue(initialValue);
    }, []);

    const onBlurHandler = () => {
        if (value === '') {
            onBlurInput(initialText, inputName);
        }
    };

    return (
        <TextInput
            style={[ROOT_STYLE, styles.input, style]}
            value={value}
            onChangeText={(value) => onChange(value, inputName)}
            onBlur={onBlurHandler}
            editable={isEditMode}
            multiline={isMultiline}
            maxLength={maxLength}
            keyboardType={keyboardType}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 0,
        borderColor: THEME.white5,
        borderWidth: 1,
    },
});

export default RootModalInput;


