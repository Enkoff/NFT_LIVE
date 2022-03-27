import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Mask, OnboardingBottomLinerGradient, OnboardingCarousel} from '../../Components/Onboarding';

import {THEME} from '../../constants';
import {OnboardingHeader} from '../../Components';
import {getOnboardingThunk} from '../../Redux/slices/onboarding.slice';

const OnboardingScreen = () => {
    const dispatch = useDispatch();
    const {onboarding} = useSelector((state) => state['onboarding']);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        dispatch(getOnboardingThunk());
    }, [dispatch]);

    return (
        <View style={styles.wrapper}>
            <OnboardingHeader data={onboarding} currentIndex={currentIndex}/>
            <OnboardingCarousel data={onboarding} setCurrentIndex={setCurrentIndex}/>
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


