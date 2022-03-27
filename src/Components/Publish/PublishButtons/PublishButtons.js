import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {CustomButton} from '../../index';
import {createGalleryItem} from '../../../config/firebase';
import {SIZE, THEME} from '../../../constants';
import {
    addAndDeleteGalleryItemThunk,
    addAndDeleteNftTopItemThunk
} from '../../../Redux/slices';
import {PublishSaveModel} from '../../../model';
import {firestore} from '../../../config/firebase/firebase.config';

const PublishButtons = ({formData, carouselRef}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {uid} = useSelector(state => state['auth']);
    const {user} = useSelector(state => state['user']);
    const {publish} = useSelector(state => state['publish']);

    const [isButtonsLoading, setIsButtonsLoading] = useState({isSave: false, isPublish: false});

    const saveHandler = async () => {
        setIsButtonsLoading(prevState => {
            return {...prevState, isSave: true};
        });

        const galleryItem = await createGalleryItem(user, formData, [PublishSaveModel]);
        await dispatch(addAndDeleteGalleryItemThunk({uid, galleryItem}));

        setIsButtonsLoading(prevState => {
            return {...prevState, isSave: false};
        });

        navigation.navigate('ProfileStackNav');
    };

    const publishHandler = async () => {
        //ЗАПИС ПО НОВОМУ В БАЗУ!!!
        const publishObj = publish[carouselRef.current._activeItem];
        const isNftLive = publishObj.name === 'NFT Live';

        const galleryItem = await createGalleryItem(user, formData, [PublishSaveModel, publishObj], isNftLive);

        await firestore()
            .collection('nft')
            .add(galleryItem);

        // const publishObj = publish[carouselRef.current._activeItem];
        //
        // setIsButtonsLoading(prevState => {
        //     return {...prevState, isPublish: true};
        // });
        //
        // const galleryItem = await createGalleryItem(user, formData, [PublishSaveModel, publishObj]);
        //
        // await dispatch(addAndDeleteGalleryItemThunk({uid, galleryItem}));
        //
        // if (publishObj.name === 'NFT Live') {
        //     await dispatch(addAndDeleteNftTopItemThunk({galleryItem}));
        // }
        //
        // setIsButtonsLoading(prevState => {
        //     return {...prevState, isPublish: false};
        // });
        //
        // navigation.navigate('ProfileStackNav');
    };

    return (
        <View style={styles.btnWrapper}>
            <CustomButton
                isLoading={isButtonsLoading.isSave}
                onPress={saveHandler}
                name={'Save to gallery'}
                wrapperStyle={styles.buttonsWrapper}
                textWrapperStyle={styles.saveTextWrapper}
                style={styles.saveBtn}
            />
            <CustomButton
                isLoading={isButtonsLoading.isPublish}
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


