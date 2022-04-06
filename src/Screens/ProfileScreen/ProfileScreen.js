import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    RootScreenTemplate,
    TopContent,
    BottomContent,
    RootModal,
    NftModalContent,
} from '../../Components';
import {Bio, ProfileHeader} from '../../Components/Profile';
import {getUserByUidThunk} from '../../Redux/slices';

const ProfileScreen = () => {
    const dispatch = useDispatch();

    const {user} = useSelector(state => state['user']);
    const {gallery, id} = user;

    const [isModal, setIsModal] = useState(false);
    const [filterGalleryList, setFilterGalleryList] = useState([]);
    const [modalGalleryItem, setModalGalleryItem] = useState({});
    const [currentCollectionName, setCurrentCollectionName] = useState('All NFT');
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        if (currentCollectionName === 'All NFT') {
            setFilterGalleryList([...gallery]);
            return;
        }
        setFilterGalleryList(gallery.filter(item => item['collectionName'] === currentCollectionName));
    }, [gallery]);

    const filterGalleryHandler = (collectionName) => {
        setCurrentCollectionName(collectionName);
        if (collectionName === 'All NFT') {
            setFilterGalleryList(gallery);
            return;
        }
        setFilterGalleryList(gallery.filter(item => item.collectionName === collectionName));
    };

    const pressItemHandler = (galleryItem) => {
        setModalGalleryItem(galleryItem);
        setIsModal(true);
    };


    const onRefresh = async () => {
        setRefreshing(true);
        await dispatch(getUserByUidThunk({uid: id}));
        setRefreshing(false);
    };

    return (
        <RootScreenTemplate
            refreshing={refreshing}
            onRefresh={onRefresh}
        >
            <ProfileHeader/>
            <TopContent user={user}/>
            <Bio user={user}/>
            <BottomContent
                filterGalleryList={filterGalleryList}
                user={user}
                filterGalleryHandler={filterGalleryHandler}
                pressItemHandler={pressItemHandler}
            />
            <RootModal visible={isModal} animatedType={'slide'}>
                <NftModalContent
                    item={modalGalleryItem}
                    setIsModal={setIsModal}
                    isProfile={true}
                />
            </RootModal>
        </RootScreenTemplate>
    );
};

export default ProfileScreen;


