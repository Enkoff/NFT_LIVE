import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BackArrowSvg} from '../../SVG';
import {firestoreLib, SIZE, THEME} from '../../../constants';
import {
    CustomButton,
    SvgIconButton
} from '../../index';
import {firestore} from '../../../config/firebase/firebase.config';

//ВИДАЛИТИ
const EditProfileTopButton = (props) => {
    const navigation = useNavigation();

    const backArrowHandler = () => {
        navigation.goBack();
    };

    const logOutHandler = async () => {
        const response = ((await firestore()
            .collection('nft')
            .where('authorId', '==', 'IibpkVEfR1b9b8gzU8M18QTomh72')
            .where('isNftLive','==', 'true')
            .get()));
        response.forEach((el) => {
            console.log(el.data());
        });
    };

    return (
        <View style={styles.wrapper}>
            <SvgIconButton onPress={backArrowHandler} wrapperStyle={styles.backBtnWrapper}>
                <BackArrowSvg height={SIZE.height.h24} width={SIZE.height.h24}/>
            </SvgIconButton>
            <CustomButton
                onPress={logOutHandler}
                name={'Exit'}
                wrapperStyle={styles.logOutBtnWrapper}
                textWrapperStyle={styles.logOutBtnTextWrapper}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZE.width.w16,
    },
    logOutBtnWrapper: {
        width: SIZE.width.w68,
        height: SIZE.height.h35
    },
    logOutBtnTextWrapper: {
        backgroundColor: THEME.red
    },
    backBtnWrapper: {
        width: SIZE.height.h24,
        height: SIZE.height.h24,
        borderRadius: SIZE.borderRadius.br8,
    }
});

export default EditProfileTopButton;


