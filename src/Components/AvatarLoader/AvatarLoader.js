import React from 'react';
import {StyleSheet} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';

const AvatarLoader = (props) => {
    return (
        <ContentLoader
            active
            avatar
            avatarStyles={styles.contentLoaderAvatar}
            containerStyles={styles.contentLoaderContainer}
        />
    );
};

const styles = StyleSheet.create({
    contentLoaderContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentLoaderAvatar: {
        width: 100,
        height: 100,
        borderRadius: 0
    }
});

export default AvatarLoader;


