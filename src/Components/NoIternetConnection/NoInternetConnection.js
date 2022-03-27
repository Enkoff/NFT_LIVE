import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import RootModal from '../RootModal/RootModal';
import {NoInternetJpeg} from '../../assets';
import CustomButton from '../CustomBotton/CustomButton';
import {SIZE} from '../../constants';

const NoInternetConnection = ({visible, callback, isBtn = true, title = 'RETRY', isLoading}) => {
    return (
        <RootModal visible={visible} isBackground={false}>
            <View style={styles.wrapper}>
                <Image source={NoInternetJpeg} style={styles.img}/>
                {isBtn && <CustomButton
                    name={title}
                    wrapperStyle={styles.okBtn}
                    textStyle={styles.okBtnText}
                    onPress={callback}
                    isLoading={isLoading}
                />
                }
            </View>
        </RootModal>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '50%',
        borderRadius: SIZE.borderRadius.br26,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: '100%'
    },
    okBtn: {
        position: 'absolute',
        bottom: '1.5%',
        width: '20%',
        height: '8%',
        borderRadius: SIZE.borderRadius.br12
    },
    okBtnText: {
        fontSize: SIZE.fontSize.fs10,
        lineHeight: SIZE.lineHeight.lh15,
        fontWeight: 'bold'
    }
});

export default NoInternetConnection;


