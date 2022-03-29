import React from 'react';
import {StyleSheet, View} from 'react-native';

import {THEME} from '../../constants';
import {Button, Mask, OnboardingBottomLinerGradient} from '../../Components/Onboarding';
import OnboardingSmartComponent from '../../Components/Onboarding/OnboardingSmartComponent/OnboardingSmartComponent';

const OnboardingScreen = () => {
    return (
        <View style={styles.wrapper}>
            <OnboardingSmartComponent />
            <OnboardingBottomLinerGradient/>
            <Mask/>
            <Button/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.backgroundColor,
    },
});

export default OnboardingScreen;


