import React, {useEffect, useState} from 'react';

import {BottomContent, NftModalContent, RootModal, RootScreenTemplate} from '../../Components';
import {TopUserDetailContent, WatchUserDetailHeader} from '../../Components/WatchUserDetail';
import {snapshotService} from '../../services';
import {Bio} from '../../Components/Profile';
import {useSelector} from 'react-redux';

const WatchUserDetailScreen = ({route: {params: {user}}}) => {
    const {id} = user;
    const {user: {subscriptions}} = useSelector(state => state['user']);

    const [currentUser, setCurrentUser] = useState({});
    const [filterGalleryList, setFilterGalleryList] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [currentModalItem, setCurrentModalItem] = useState(null);
    const [isFollow, setIsFollow] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        return snapshotService.getUserById(id, setCurrentUser, setFilterGalleryList);
    }, []);

    useEffect(() => {
        currentModalItem && setCurrentModalItem(currentUser.gallery[currentUser.gallery.findIndex(item => item.id === currentModalItem.id)]);
    }, [currentUser]);

    useEffect(() => {
        const isFollow = subscriptions.some(item => item.id === user.id);

        if (isFollow) {
            setIsFollow(true);
        } else {
            setIsFollow(false);
        }
    }, [subscriptions]);

    const filterGalleryHandler = (collectionName) => {
        if (collectionName === 'All NFT') {
            setFilterGalleryList(currentUser.gallery);
            return;
        }
        setFilterGalleryList(currentUser.gallery.filter(item => item.collectionName === collectionName));
    };

    const pressItemHandler = (galleryItem) => {
        setCurrentModalItem(galleryItem);
        setIsModal(true);
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await snapshotService.getUserById(id, setCurrentUser, setFilterGalleryList);
        setRefreshing(false);
    };

    return (
        <RootScreenTemplate
            refreshing={refreshing}
            onRefresh={onRefresh}
        >
            <WatchUserDetailHeader/>
            <TopUserDetailContent currentUser={currentUser} isFollow={isFollow}/>
            <Bio user={currentUser}/>
            <BottomContent
                filterGalleryList={filterGalleryList}
                user={currentUser}
                filterGalleryHandler={filterGalleryHandler}
                pressItemHandler={pressItemHandler}
            />
            <RootModal visible={isModal} animatedType={'slide'}>
                <NftModalContent
                    item={currentModalItem}
                    setIsModal={setIsModal}
                />
            </RootModal>
        </RootScreenTemplate>
    );
};

export default WatchUserDetailScreen;


