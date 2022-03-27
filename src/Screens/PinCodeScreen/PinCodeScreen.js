import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PINCode from '@haskkor/react-native-pincode';

import {CenterLinerGradient} from '../../Components';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const PinCodeScreen = ({navigation}) => {
    const [isConnect, setIsConnect] = useState(false);

    const handleResultEnterPin = (pin) => {
        if (pin === '111111' || pin === '222222') {
            navigation.navigate('BottomStackNav', {pin});
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsConnect(true);
        },1500)
    },[]);

    if (!isConnect) {
        return <LoadingScreen isConnection={true}/>
    }

    return (
        <View style={styles.screen}>
            <CenterLinerGradient/>
            <PINCode
                status={'enter'}
                touchIDDisabled={true}
                stylePinCodeDeleteButtonText={{display: 'none'}}
                // finishProcess={finishProcess}
                // onFail={onFail}
                handleResultEnterPin={handleResultEnterPin}
                colorCircleButtons={'rgba(255, 255, 255, 0.05)'}
                colorPassword={'#25C5AB'}
                colorPasswordEmpty={'rgba(255, 255, 255, 0.6)'}
                numbersButtonOverlayColor={'#25C5AB'}
                stylePinCodeButtonNumber={'white'}
                stylePinCodeColorTitle={'white'}
                passwordLength={6}
                maxAttempts={100}
                timeLocked={10000}
            />
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

export default PinCodeScreen;


