import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SIZE} from '../../constants';
import {
    BackgroundLeftGradient,
    BackgroundRightGradient
} from '../../Components/CreateNft';
import {
    PhotoEditButtons,
    PhotoEditHeader,
    PhotoEditorBottomButton,
    PhotoEditUploadImg
} from '../../Components/PhotoEdit';
//ВИДАЛИТИ!!!!
import {RootModal, SubscribeModal} from '../../Components';
import {getPublishThunk} from '../../Redux/slices';


const PhotoEditorScreen = ({route: {params: {formData}}}) => {
    const {uploadImage} = formData;
    const dispatch = useDispatch();

    const {publish} = useSelector(state => state['publish']);
    const [imgPath, setImgPath] = useState();
    const [isSubscribeModal, setIsSubscribeModal] = useState(false);//ВИДАЛИТИ

    useEffect(() => {
        setImgPath(uploadImage);
    }, []);

    useEffect(() => {
        if (publish.length === 0) {
            dispatch(getPublishThunk());
        }
    }, [dispatch]);

    const changeUploadImgPath = (changeImgPath) => {
        setImgPath(changeImgPath);
        formData.uploadImage = changeImgPath;
    };

    return (
        <View style={styles.screen}>
            <BackgroundLeftGradient/>
            <BackgroundRightGradient/>
            <PhotoEditHeader formData={formData}/>
            {/*<PhotoEditUploadImg imgPath={imgPath}/>*/}
            {/*<PhotoEditButtons changeUploadImgPath={changeUploadImgPath} uploadImgPath={imgPath} setIsSubscribeModal={setIsSubscribeModal}/>*/}
            {/*<PhotoEditorBottomButton formData={formData}/>*/}
            {/*/!*ВИДАЛИТИ МОДАЛ*!/*/}
            {/*<RootModal visible={isSubscribeModal} animatedType={'slide'}>*/}
            {/*    <SubscribeModal setIsModal={setIsSubscribeModal}/>*/}
            {/*</RootModal>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: SIZE.statusBarMarginTop,
        alignItems: 'center',
        paddingHorizontal: SIZE.width.w15
    },
});

export default PhotoEditorScreen;
