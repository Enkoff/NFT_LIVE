import React from 'react';
import {StyleSheet, View} from 'react-native';
import User from '../User/User';
import {SIZE} from '../../../constants';

const Users = ({userFilterData}) => {
    return (
        <View style={styles.wrapper}>
            {userFilterData.map(user => <User key={user.id} user={user}/>)}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: SIZE.width.w15,
        marginBottom: SIZE.height.h150
    },
});

export default Users;


