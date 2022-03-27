import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';

import {CustomButton} from '../../index';
import {SIZE, THEME} from '../../../constants';
import {addUploadImage} from '../../../Redux/slices';

const NotImageRenderItem = ({imgURL}) => {
    const dispatch = useDispatch();

    const uploadHandler = () => {
        ImagePicker.openPicker({
            width: 1200,
            height: 1200,
            cropping: true,
            compressImageQuality: 1
        }).then(image => image.path).then(uploadImagePath => {
            dispatch(addUploadImage({uploadImagePath}));
        });
    };

    return (
        <View style={styles.uploadContainer}>
            <FastImage
                style={styles.uploadIcon}
                source={{uri: imgURL, priority: FastImage.priority.high}}
                resizeMode={FastImage.resizeMode.contain}
            />
            <CustomButton
                onPress={uploadHandler}
                name={'Upload photo'}
                wrapperStyle={styles.btnWrapperStyle}
                textWrapperStyle={styles.btnTextWrapper}
                textStyle={styles.btnTextStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    uploadContainer: {
        width: '100%',
        height: '100%',
        borderRadius: SIZE.borderRadius.br26,
        borderWidth: 1,
        borderColor: THEME.white10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.white5
    },
    uploadIcon: {
        width: SIZE.width.w24,
        height: SIZE.height.h26,
        marginBottom: SIZE.height.h16
    },
    btnWrapperStyle: {
        width: SIZE.width.w121,
        height: SIZE.height.h35,
    },
    btnTextWrapper: {
        backgroundColor: THEME.white5
    },
    btnTextStyle: {
        color: THEME.white60
    }
});

export default NotImageRenderItem;


