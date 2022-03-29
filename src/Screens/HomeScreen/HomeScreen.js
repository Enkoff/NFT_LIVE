import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getNftLiveTopThunk, getUserThunk} from '../../Redux/slices';
import {
    HomeHeader,
    NftLiveTopCarousel,
    NftModalContent,
    RootModal,
    RootScreenTemplate
} from '../../Components';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import {setFirsEntryThunk} from '../../Redux/slices/auth.slice';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const {uid, isFirstEntry} = useSelector(state => state['auth']);
    const {user} = useSelector(state => state['user']);
    const {nftLiveTop} = useSelector(state => state['nft']);

    const [filterData, setFilterData] = useState([]);
    const [currentModalItem, setCurrentModalItem] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [isNextDataLoading, setIsNextDataLoading] = useState(true);

    useEffect(() => {
        currentModalItem && setCurrentModalItem(filterData[filterData.findIndex(item => item.id === currentModalItem.id)]);
    }, [filterData, user]);

    useEffect(() => {
        !isFirstEntry && dispatch(setFirsEntryThunk());
    }, []);

    useEffect(() => {
        if (uid) dispatch(getUserThunk(uid));
    }, [uid]);

    useEffect(() => {
        dispatch(getNftLiveTopThunk()).then(({payload}) => setFilterData(payload));
    }, []);

    if (!uid || nftLiveTop.length === 0 || !user) {
        return <LoadingScreen/>;
    }

    const nextData = (lastPrice) => {
        // isNextDataLoading && dispatch(getNftLiveTopByStartAfterThunk({
        //     limit: limits.nftLiveTop,
        //     startAfter: lastPrice,
        //     callback: setIsNextDataLoading
        // }));
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await dispatch(getUserThunk(uid));
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


