import React from 'react';
import {StyleSheet, View} from 'react-native';

import Upload from '../Upload/Upload';
import NotUpload from '../NotUpload/NotUpload';
import {SIZE, THEME} from '../../../constants';

const UploadImage = ({uploadImage, setUploadImage, isUploadError, setIsUploadError}) => {

    return (
        <View style={[
            styles.uploadImg,
            {borderColor: isUploadError ? THEME.red : THEME.white10}
        ]}>
            {!uploadImage && <NotUpload setIsUploadError={setIsUploadError} setUploadImage={setUploadImage}/>}
            {uploadImage && <Upload uploadImage={uploadImage} setUploadImage={setUploadImage}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    uploadImg: {
        marginTop: SIZE.height.h20,
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE.width.w150,
        height: SIZE.width.w150,
        borderRadius: SIZE.borderRadius.br26,
        backgroundColor: THEME.white5,
        borderWidth: 1,
        overflow: 'hidden'
    }
});

export default UploadImage;


