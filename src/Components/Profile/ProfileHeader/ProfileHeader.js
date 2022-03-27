import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomButton from '../../CustomBotton/CustomButton';
import {SIZE, THEME} from '../../../constants';
import SvgIconButton from '../../IconButton/SvgIconButton';
import {BackArrowSvg, SettingsSvg} from '../../SVG';

const ProfileHeader = (props) => {
    const navigation = useNavigation();

    const editBthHandler = () => {
        navigation.navigate('EditProfileScreen');
    };

    const backArrowHandler = () => {
        navigation.navigate('BottomStackNav');
    };

    const settingsHandler = () => {
        navigation.navigate('SettingsScreen');
    }

    return (
        <View style={styles.wrapper}>
            <SvgIconButton
                onPress={backArrowHandler}
                wrapperStyle={styles.backBtnWrapper}
            >
                <BackArrowSvg height={SIZE.height.h24} width={SIZE.height.h24}/>
            </SvgIconButton>
            <CustomButton
                onPress={editBthHandler}
                name={'Edit'}
                wrapperStyle={styles.editBtnWrapper}
                textWrapperStyle={styles.editBtnTextWrapper}
                textStyle={styles.editBtnText}
            />
            <SvgIconButton onPress={settingsHandler} wrapperStyle={styles.settingsBtnWrapper}>
                <SettingsSvg width={SIZE.height.h24} height={SIZE.height.h24} color={THEME.white60}/>
            </SvgIconButton>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginTop: SIZE.statusBarMarginTop,
        marginBottom: SIZE.height.h24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZE.width.w16
    },
    editBtnWrapper: {
        width: SIZE.width.w68,
        height: SIZE.height.h35
    },
    editBtnTextWrapper: {
        backgroundColor: THEME.white5
    },
    editBtnText: {
        color: THEME.white60
    },
    backBtnWrapper: {
        position: 'absolute',
        left: SIZE.width.w15,
        width: SIZE.height.h24,
        height: SIZE.height.h24,
        borderRadius: SIZE.borderRadius.br8
    },
    settingsBtnWrapper: {
        position: 'absolute',
        right: SIZE.width.w15
    }
});

export default ProfileHeader;


