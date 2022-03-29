import React from 'react';
import {StyleSheet, View} from 'react-native';
import PINCode from "@haskkor/react-native-pincode";

import {CenterLinerGradient} from '../../Components';

const SetPinCodeScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <CenterLinerGradient />
            <PINCode
                status={'choose'}
                touchIDDisabled={true}
                stylePinCodeDeleteButtonText={{display: 'none'}}
                finishProcess={() => navigation.navigate('PinCodeScreen')}
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

export default SetPinCodeScreen;


