import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomText from '../../CustomText/CustomText';
import {SIZE, THEME} from '../../../constants';

const Bio = ({user: {bio}}) => {
    return (
        <View style={styles.bioWrapper}>
            <CustomText textStyle={styles.bio}>{bio}</CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    bioWrapper: {
        marginTop: SIZE.height.h19,
        marginBottom: SIZE.height.h24,
        paddingHorizontal: SIZE.width.w16
    },
    bio: {
        lineHeight: SIZE.lineHeight.lh22,
        color: THEME.white80
    }
});

export default Bio;


