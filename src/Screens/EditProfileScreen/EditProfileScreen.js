import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    AvatarCarousel,
    ColorModal,
    KeyboardASV
} from '../../Components/Register';
import {
    AddCollectionModal, EditGalleryAndCollectionName,
    EditProfileCollections,
    EditProfileForm,
    EditProfileTopButton
} from '../../Components/EditProfile';
import {CustomModal, RootModal} from '../../Components';
import {addUploadImage} from '../../Redux/slices';
import {SIZE} from '../../constants';

const EditProfileScreen = (props) => {
    const dispatch = useDispatch();
    const carouselRef = useRef(null);

    const [isPopup, setIsPopup] = useState(false);
    const [isNewCollectionModal, setIsNewCollectionModal] = useState(false);

    const {user: {avatarUrl}} = useSelector(state => state['user']);

    useEffect(() => {
        dispatch(addUploadImage({uploadImagePath: avatarUrl}));
    }, [avatarUrl]);

    return (
        <KeyboardASV extraScrollHeight={SIZE.height.h270}>
            <EditProfileTopButton/>
            <AvatarCarousel isPopup={isPopup} setIsPopup={setIsPopup} carouselRef={carouselRef} isEditProfile={true}/>
            <EditProfileForm/>
            <EditProfileCollections setIsNewCollectionModal={setIsNewCollectionModal}/>
            <EditGalleryAndCollectionName/>
            <CustomModal visible={isPopup}>
                <ColorModal setIsPopup={setIsPopup}/>
            </CustomModal>
            <RootModal animatedType={'slide'} visible={isNewCollectionModal}>
                <AddCollectionModal setIsNewCollectionModal={setIsNewCollectionModal}/>
            </RootModal>
        </KeyboardASV>
    );
};

export default EditProfileScreen;


