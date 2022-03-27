import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import {getFaqThunk} from '../../Redux/slices';
import {AvatarAndTitle, FaqItem, RootScreenTemplate} from '../../Components';
import {SIZE} from '../../constants';

const FaqScreen = () => {
    const dispatch = useDispatch();
    const {faq} = useSelector(state => state['faq']);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        dispatch(getFaqThunk());
    }, [dispatch]);

    const onRefresh = async () => {
        setRefreshing(true);
        if (faq.length === 0) {
            await dispatch(getFaqThunk());
        }
        setRefreshing(false);
    };

    return (
        <RootScreenTemplate
            headerComponent={<AvatarAndTitle title={'FAQ'} isButton={true}/>}
            refreshing={refreshing}
            onRefresh={onRefresh}
        >
            <View style={styles.wrapper}>
                {faq.map(item => <FaqItem key={item.id} item={item}/>)}
            </View>
        </RootScreenTemplate>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: SIZE.height.h10,
        paddingHorizontal: SIZE.width.w16
    }
});

export default FaqScreen;


