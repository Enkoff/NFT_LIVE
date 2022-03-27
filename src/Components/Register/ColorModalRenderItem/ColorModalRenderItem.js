import React from 'react';
import {StyleSheet, View, TouchableNativeFeedback} from 'react-native';
import {useDispatch} from 'react-redux';

import {SIZE} from '../../../constants';
import {changeAvatarColor} from '../../../Redux/slices';

const ColorModalRenderItem = ({id, color}) => {
    const dispatch = useDispatch();

    const colorHandler = () => {
        dispatch(changeAvatarColor({color}));
    };

    return (
        <TouchableNativeFeedback onPress={colorHandler}>
            <View style={[styles.item, {backgroundColor: color}]}/>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    item: {
        width: SIZE.height.h32,
        height: SIZE.height.h32,
        borderRadius: SIZE.borderRadius.br8,
        margin: SIZE.width.w6
    },
});

export default ColorModalRenderItem;


