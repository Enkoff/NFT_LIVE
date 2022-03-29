import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


import {getOnboardingThunk} from '../../../Redux/slices/onboarding.slice';
import OnboardingHeader from '../OnbordingHeader/OnboardingHeader';
import OnboardingCarousel from '../OnboardingCarousel/OnboardingCarousel';

const OnboardingSmartComponent = () => {
    const dispatch = useDispatch();
    const {onboarding} = useSelector((state) => state['onboarding']);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        dispatch(getOnboardingThunk());
    }, [dispatch]);

    return (
        <>
            <OnboardingHeader data={onboarding} currentIndex={currentIndex}/>
            <OnboardingCarousel data={onboarding} setCurrentIndex={setCurrentIndex}/>
        </>
    );
};

export default OnboardingSmartComponent;


