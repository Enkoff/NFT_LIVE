import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
// import {PESDK} from 'react-native-photoeditorsdk';

import {SIZE, THEME} from '../../../constants';
import {ButtonTextIcon} from '../../index';
import {SunSvg, LightningSvg} from '../../SVG';

const PhotoEditButtons = ({changeUploadImgPath, uploadImgPath, setIsSubscribeModal}) => {
    const [isActiveBtn, setIsActiveBtn] = useState({light: true, pro: false});

    const openEditor = () => {
        // PESDK.openEditor(uploadImgPath).then(res => {
        //     if (res !== null) {
        //         changeUploadImgPath(res.image);
        //     }
        // });
    };

    const lightEditHandler = () => {
        setIsActiveBtn({light: true, pro: false});
        openEditor();
    };

    //ПОФІКСИТИ РЕДАКТОР
    const proEditHandler = () => {
        // setIsActiveBtn({light: false, pro: true});
        // openEditor();
        setIsSubscribeModal(true);
    };

    return (
        <View style={styles.btnWrapper}>
            <ButtonTextIcon
                onPress={lightEditHandler}
                name={'Light editor'}
                contentWrapperStyle={{backgroundColor: isActiveBtn.light ? THEME.blue : 'transparent'}}
                btnTextStyle={{color: isActiveBtn.light ? THEME.white : THEME.white60}}
            >
                <SunSvg width={SIZE.height.h20} height={SIZE.height.h20}/>
            </ButtonTextIcon>
            <ButtonTextIcon
                onPress={proEditHandler}
                name={'Pro editor'}
                contentWrapperStyle={{backgroundColor: isActiveBtn.pro ? THEME.blue : 'transparent'}}
                btnTextStyle={{color: isActiveBtn.pro ? THEME.white : THEME.white60}}
            >
                <LightningSvg width={SIZE.height.h20} height={SIZE.height.h20}/>
            </ButtonTextIcon>
        </View>
    );
};

const styles = StyleSheet.create({
    btnWrapper: {
        marginTop: SIZE.height.h16,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: THEME.white5,
        borderRadius: SIZE.borderRadius.br12,
        padding: SIZE.width.w5,
    },
});

export default PhotoEditButtons;


