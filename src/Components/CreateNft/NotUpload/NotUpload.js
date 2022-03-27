import React from 'react';
import {StyleSheet} from 'react-native';

import {UploadSvg} from '../../SVG';
import {CustomButton} from '../../index';
import {SIZE, THEME} from '../../../constants';
import ImagePicker from 'react-native-image-crop-picker';

const NotUpload = ({setUploadImage, setIsUploadError}) => {

    const uploadImgHandler = () => {
        ImagePicker.openPicker({
            width: 1200,
            height: 1200,
            cropping: true,
            compressImageQuality: 1
        }).then(image => {
            return image.path;
        }).then(path => {
            setUploadImage(path);
            setIsUploadError(false);
        });
    };

    return (
        <>
            <UploadSvg/>
            <CustomButton
                name={'Upload photo'}
                onPress={uploadImgHandler}
                wrapperStyle={styles.wrapperStyle}
                textWrapperStyle={styles.textWrapperStyle}
            />
        </>
    );
};

const styles = StyleSheet.create({
    wrapperStyle: {
        marginTop: SIZE.height.h16,
        width: SIZE.width.w121,
        height: SIZE.height.h35
    },
    textWrapperStyle: {
        backgroundColor: THEME.white5
    }
});

export default NotUpload;


