import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import CustomText from '../CustomText/CustomText';
import {SIZE, THEME} from '../../constants';

const HorizontalCarouselRenderItem = ({item, index, selectedTab, itemHandler, isCarouselError}) => {
    return (
        <TouchableOpacity activeOpacity={.5} onPress={() => itemHandler(item)}>
            <View style={[
                styles.pill,
                {
                    backgroundColor: selectedTab === item || selectedTab === item['collectionName']
                        ? THEME.blue
                        : THEME.white5
                },
                {marginLeft: index === 0 ? SIZE.width.w16 : 0},
                {borderColor: isCarouselError && index === 0 ? THEME.red : THEME.white},
                {borderWidth: isCarouselError && index === 0 ? 1 : 0}
            ]}>
                < CustomText>
                    {item['collectionName']}
                </CustomText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    pill: {
        paddingVertical: SIZE.height.h9,
        paddingHorizontal: SIZE.width.w21,
        borderRadius: SIZE.borderRadius.br37,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SIZE.width.w8,
    },
});

export default HorizontalCarouselRenderItem;


