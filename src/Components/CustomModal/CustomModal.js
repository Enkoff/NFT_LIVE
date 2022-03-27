import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SIZE, THEME} from '../../constants';

const CustomModal = ({visible, children}) => {
    return (
        <View style={visible ? styles.modalBackground : styles.notVisible}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        position: 'absolute',
        width: SIZE.deviceWidth,
        height: SIZE.deviceHeight,
        backgroundColor: THEME.black90,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    notVisible: {
        display: 'none'
    }
});

export default CustomModal;


