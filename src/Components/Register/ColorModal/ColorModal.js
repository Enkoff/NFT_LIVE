import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SIZE, THEME} from '../../../constants';
import ColorModalRenderItem from '../ColorModalRenderItem/ColorModalRenderItem';
import {CustomButton} from '../../index';

const ColorModal = ({setIsPopup}) => {
    const {bgColors} = useSelector(state => state['avatar']);

    const confirmHandler = () => {
        setIsPopup(false);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.colorAndButtonWrapper}>
                <View style={styles.colorWrapper}>
                    {bgColors.map(color => <ColorModalRenderItem key={color.id} id={color.id} color={color.color}/>)}
                </View>
                <View style={styles.btnContainer}>
                    <CustomButton
                        onPress={confirmHandler}
                        name={'Confirm'}
                        wrapperStyle={styles.btnWrapperStyle}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: SIZE.height.h35,
        width: '90%',
        height: SIZE.height.h130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.black1c35,
        borderRadius: SIZE.borderRadius.br12,
        paddingVertical: SIZE.height.h24,
        paddingHorizontal: SIZE.height.h16
    },
    colorAndButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    colorWrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '60%',
        height: '100%',
    },
    btnContainer: {
        width: '40%',
        alignItems: 'center'
    },
    btnWrapperStyle: {
        width: SIZE.width.w110,
    }
});

export default ColorModal;


