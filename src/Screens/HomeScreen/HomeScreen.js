import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    HomeHeader,
    NftLiveTopCarousel,
    NftModalContent,
    RootModal,
    RootScreenTemplate
} from '../../Components';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import {setFirsEntryThunk} from '../../Redux/slices/auth.slice';
import {getAvatarsAndBgColorsThunk, getNftLiveTopThunk, getUserByUidThunk} from '../../Redux/slices';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const {uid, isFirstEntry} = useSelector(state => state['auth']);
    const {user} = useSelector(state => state['user']);
    const {nftLiveTop} = useSelector(state => state['nft']);
    const {avatars} = useSelector(state => state['avatar']);

    const [filterData, setFilterData] = useState([]);
    const [currentModalItem, setCurrentModalItem] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [isNextDataLoading, setIsNextDataLoading] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(false);

    useEffect(() => {
        currentModalItem && setCurrentModalItem(filterData[filterData.findIndex(item => item.id === currentModalItem.id)]);
    }, [filterData, user]);

    const initialFetch = async () => {
        if (!isFirstEntry) await dispatch(setFirsEntryThunk());
        if (uid) await dispatch(getUserByUidThunk(uid));
        if (avatars.length === 0) dispatch(getAvatarsAndBgColorsThunk());
        await dispatch(getNftLiveTopThunk()).then(({payload}) => setFilterData(payload));
        return true;
    };

    useEffect(() => {
        initialFetch().then(res => setIsInitialLoad(res));
    }, [uid, nftLiveTop]);

    if (!isInitialLoad) return <LoadingScreen/>;

    const nextData = (lastPrice) => {
        // isNextDataLoading && dispatch(getNftLiveTopByStartAfterThunk({
        //     limit: limits.nftLiveTop,
        //     startAfter: lastPrice,
        //     callback: setIsNextDataLoading
        // }));
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await dispatch(getUserByUidThunk(uid));
        await dispatch(getNftLiveTopThunk()).then(({payload}) => setFilterData(payload));
        currentModalItem && setCurrentModalItem(filterData[filterData.findIndex(item => item.id === currentModalItem.id)]);
        setRefreshing(false);
    };

    return (
        <RootScreenTemplate
            refreshing={refreshing}
            onRefresh={onRefresh}
            headerComponent={<HomeHeader setFilterData={setFilterData}/>}
        >
            <NftLiveTopCarousel
                data={filterData}
                setCurrentModalItem={setCurrentModalItem}
                setIsModal={setIsModal}
                onEndReached={nextData}
                isNextDataLoading={isNextDataLoading}
            />
            <RootModal visible={isModal} animatedType={'slide'}>
                <NftModalContent item={currentModalItem} setIsModal={setIsModal}/>
            </RootModal>
        </RootScreenTemplate>
    );
};

export default HomeScreen;


