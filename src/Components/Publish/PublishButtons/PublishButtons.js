import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {SIZE, THEME} from '../../../constants';
import {addNftThunk, addGalleryItem} from '../../../Redux/slices';
import {PublishSaveModel} from '../../../model';
import {CustomButton} from '../../index';
import {createGalleryItem} from '../../../config/firebase';

const PublishButtons = ({formData, carouselRef}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {user} = useSelector(state => state['user']);
    const {publish} = useSelector(state => state['publish']);

    const [isSave, setIsSave] = useState(false);
    const [isPublish, setIsPublish] = useState(false);


    const saveHandler = async () => {
        setIsSave(true);
        const galleryItem = await createGalleryItem(user, formData, [PublishSaveModel]);

        await dispatch(addNftThunk({galleryItem, isNftLiveTop: false}));
        await dispatch(addGalleryItem({galleryItem}));

        setIsSave(false);
        navigation.navigate('ProfileStackNav');
    };

    const publishHandler = async () => {
        setIsPublish(true);
        const publishObj = publish[carouselRef.current._activeItem];

        if (publishObj.name !== 'Comming Soon') {
            const isNftLive = publishObj.name === 'NFT Live';

            const galleryItem = await createGalleryItem(user, formData, [PublishSaveModel, publishObj], isNftLive);
            await dispatch(addGalleryItem({galleryItem}));

            isNftLive
                ? await dispatch(addNftThunk({galleryItem, isNftLiveTop: true}))
                : await dispatch(addNftThunk({galleryItem, isNftLiveTop: false}));

            navigation.navigate('ProfileStackNav');
        }
        setIsPublish(false);
    };

    return (
        <View style={styles.btnWrapper}>
            <CustomButton
                isLoading={isSave}
                onPress={saveHandler}
                name={'Save to gallery'}
                wrapperStyle={styles.buttonsWrapper}
                textWrapperStyle={styles.saveTextWrapper}
                style={styles.saveBtn}
            />
            <CustomButton
                isLoading={isPublish}
                onPress={publishHandler}
                wrapperStyle={styles.buttonsWrapper}
                name={'Publish'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    btnWrapper: {
        paddingHorizontal: SIZE.width.w15,
        width: '100%',
        position: 'absolute',
        bottom: SIZE.height.h24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonsWrapper: {
        width: SIZE.width.w164
    },
    saveTextWrapper: {
        backgroundColor: THEME.invisible,
    },
});

export default PublishButtons;


