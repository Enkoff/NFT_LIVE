import React from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {SearchSvg} from '../SVG';
import {ROOT_STYLE, SIZE, THEME} from '../../constants';

const UniversalSearch = ({callback, placeholder = 'Search'}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (text) => {
        setSearchQuery(text);
        callback(text);
    };

    return (
        <View style={[styles.search]}>
            <SearchSvg width={SIZE.height.h16} height={SIZE.height.h16} color={THEME.white80}/>
            <TextInput
                style={[ROOT_STYLE.fontFamily, styles.input]}
                placeholder={placeholder}
                placeholderTextColor={THEME.white80}
                value={searchQuery}
                onChangeText={onChangeSearch}
                autoCapitalize={'none'}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        borderRadius: SIZE.borderRadius.br12,
        borderWidth: 1,
        paddingLeft: SIZE.width.w15,
        paddingRight: SIZE.width.w35,
        borderColor: THEME.white5,
        height: '100%'
    },
    input: {
        padding: 0,
        width: '100%',
        alignItems: 'center',
        marginLeft: SIZE.width.w12,
        color: THEME.white,
        fontSize: SIZE.fontSize.fs12,
    }
});

export default UniversalSearch;