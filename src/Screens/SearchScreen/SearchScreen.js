import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {RootScreenTemplate} from '../../Components';
import {snapshotService} from '../../services';
import {SearchHeader, Users} from '../../Components/SearchScreenComponent';

const SearchScreen = () => {
    const {user: {id}} = useSelector(state => state['user']);

    const [userFilterData, setUserFilterData] = useState([]);
    const [copyUsers, setCopyUsers] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        return snapshotService.getUsers(id, setUserFilterData, setCopyUsers);
    }, []);

    const filterUsers = (text) => {
        const copyData = [...copyUsers];

        if (!text) {
            setUserFilterData(copyData);
            return;
        }

        const userFilter = copyData.filter(item => item.nikName.toLowerCase().includes(text.toLowerCase()));
        setUserFilterData(userFilter);
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await snapshotService.getUsers(id, setUserFilterData, setCopyUsers)
        setRefreshing(false);
    };

    return (
        <RootScreenTemplate
            headerComponent={<SearchHeader callback={filterUsers} placeholder={'@user'}/>}
            refreshing={refreshing}
            onRefresh={onRefresh}
        >
            <Users userFilterData={userFilterData}/>
        </RootScreenTemplate>
    );
};

export default SearchScreen;


