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

import {
    getAvatarsAndBgColorsThunk,
    getNftLiveTopByLimitThunk, getNftLiveTopByStartAfterThunk,
    getUserThunk
} from '../../Redux/slices';
import AsyncStorage from '@react-native-async-storage/async-storage';

//ПЕРЕНЕСТИ ФУНКЦІЮ
const setEntry = async () => {
    const isEntry = await AsyncStorage.getItem('firstEnter');
    if (!isEntry) {
        await AsyncStorage.setItem('firstEnter', 'true');
    }
};

const HomeScreen = () => {
    const dispatch = useDispatch();

    const {uid} = useSelector(state => state['auth']);
    const {user} = useSelector(state => state['user']);
    const {avatars} = useSelector(state => state['avatar']);
    const {nftLiveTop} = useSelector(state => state['nftLiveTop']);

    const [filterData, setFilterData] = useState([]);
    const [currentModalItem, setCurrentModalItem] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [isNextDataLoading, setIsNextDataLoading] = useState(true);

    useEffect(() => {
        currentModalItem && setCurrentModalItem(filterData[filterData.findIndex(item => item.id === currentModalItem.id)]);
    }, [filterData, user]);

    useEffect(() => {
        setEntry();
    }, []);

    useEffect(() => {
        uid && dispatch(getUserThunk(uid));
    }, [uid]);

    useEffect(() => {
        dispatch(getNftLiveTopByLimitThunk({limit: 2}));
    }, []);

    useEffect(() => {
        if (nftLiveTop.length === 0) {
            dispatch(getAvatarsAndBgColorsThunk());
            return;
        }
        setFilterData(nftLiveTop);
    }, [nftLiveTop]);

    if (!uid || nftLiveTop.length === 0 || !user || avatars.length === 0) {
        return <LoadingScreen/>;
    }

    const onRefresh = async () => {
        setRefreshing(true);
        await dispatch(getUserThunk(uid));
        await dispatch(getNftLiveTopByLimitThunk({limit: 2}));
        currentModalItem && setCurrentModalItem(filterData[filterData.findIndex(item => item.id === currentModalItem.id)]);
        setRefreshing(false);
    };

    const nextData = (lastPrice) => {
        isNextDataLoading && dispatch(getNftLiveTopByStartAfterThunk({
            limit: 2,
            startAfter: lastPrice,
            callback: setIsNextDataLoading
        }));
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


