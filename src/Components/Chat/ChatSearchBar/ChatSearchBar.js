import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {SearchSvg} from '../../SVG';
import {ROOT_STYLE, SIZE, THEME} from '../../../constants';

const ChatSearchBar = ({callback}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (text) => {
        setSearchQuery(text);
        callback(text);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.search}>
                <SearchSvg width={SIZE.height.h16} height={SIZE.height.h16} color={THEME.white80}/>
                <TextInput
                    style={[ROOT_STYLE, styles.input]}
                    placeholder="@nikName"
                    placeholderTextColor={THEME.white80}
                    value={searchQuery}
                    onChangeText={onChangeSearch}
                    autoCapitalize={'none'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: SIZE.height.h16,
        marginBottom: SIZE.height.h10,
        paddingHorizontal: SIZE.width.w15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: SIZE.borderRadius.br12,
        borderWidth: 1,
        paddingLeft: SIZE.width.w15,
        paddingRight: SIZE.width.w35,
        paddingVertical: SIZE.height.h6,
        borderColor: THEME.white5,
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


export default ChatSearchBar;