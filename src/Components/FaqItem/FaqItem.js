import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {SIZE, THEME} from '../../constants';
import CustomText from '../CustomText/CustomText';
import {ArrowDown, ArrowUp} from '../../assets';

const RenderFaqItem = ({item: {title, body}}) => {
    const [isDown, setIsDown] = useState(false);

    return (
        <View style={styles.wrapper}>
            <View style={styles.contentWrapper}>
                <CustomText>{title}</CustomText>
                <TouchableOpacity activeOpacity={.9} onPress={() => setIsDown(prev => !prev)}>
                    {isDown && <ArrowUp width={SIZE.height.h20} height={SIZE.height.h20}/>}
                    {!isDown && <ArrowDown width={SIZE.height.h20} height={SIZE.height.h20}/>}
                </TouchableOpacity>
            </View>
            {isDown && <CustomText textStyle={styles.body}>{body}</CustomText>}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: THEME.white5,
        borderRadius: SIZE.borderRadius.br12,
        marginBottom: SIZE.height.h10,
        paddingVertical: SIZE.height.h18,
        paddingHorizontal: SIZE.height.h19
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        marginTop: SIZE.height.h16,
        color: THEME.white60,
    }
});

export default RenderFaqItem;


