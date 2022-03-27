import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ProfileButton = (props) => {
    return (
        <View style={styles.screen}>
            <Text>ProfileButton</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ProfileButton;


