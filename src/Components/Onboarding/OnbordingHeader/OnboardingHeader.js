import React from 'react';
import {StyleSheet, View} from 'react-native';

import {OnboardingLinerGradient, Paginator} from '../index';

const OnboardingHeader = ({data, currentIndex}) => {
    return (
        <View style={styles.wrapper}>
            <OnboardingLinerGradient />
            <Paginator data={data} currentIndex={currentIndex}/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
    },
});

export default OnboardingHeader;


