import React, {useRef, useState} from 'react';

import {
    AvatarCarousel,
    ColorModal,
    KeyboardASV,
    RegisterTopButton
} from '../../Components/Register';
import {CustomModal} from '../../Components';
import RegistrationFrom from '../../Components/Register/RegistrationForm/RegistrationFrom';

const RegisterScreen = () => {
    const [isPopup, setIsPopup] = useState(false);
    const carouselRef = useRef(null);

    return (
        <KeyboardASV>
            <RegisterTopButton />
            <AvatarCarousel isPopup={isPopup} setIsPopup={setIsPopup} carouselRef={carouselRef}/>
            <RegistrationFrom />
            <CustomModal visible={isPopup}>
                <ColorModal setIsPopup={setIsPopup}/>
            </CustomModal>
        </KeyboardASV>
    );
};

// const styles = StyleSheet.create({
//     continueBtnContainer: {
//         alignItems: 'center',
//         marginVertical: CONSTANTS.DEVICE_HEIGHT < 718 ? 10 : 0
//     },
//     profileBtn: {
//         width: '100%',
//         height: CONSTANTS.DEVICE_HEIGHT < 718 ? 40 : 50,
//         borderRadius: 12,
//         marginTop: 7,
//         marginBottom: 40
//     },
//     registerBtn: {
//         width: CONSTANTS.DEVICE_HEIGHT < 718 ? 100 : 130,
//         height: CONSTANTS.DEVICE_HEIGHT < 718 ? 35 : 45,
//     }
// });

export default RegisterScreen;
