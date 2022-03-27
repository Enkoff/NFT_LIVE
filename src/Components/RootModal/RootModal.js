import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {THEME} from '../../constants';

const RootModal = ({visible, animatedType = 'none', children, isBackground = true}) => {
    return (
        <Modal animated={true} animationType={animatedType} transparent visible={visible}>
            <View style={[styles.modalBackground,isBackground && {backgroundColor: THEME.black90}]}>
                {children}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
    }
});

export default RootModal;


