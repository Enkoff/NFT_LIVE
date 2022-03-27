import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Avatar from '../Avatar/Avatar';
import {SIZE} from '../../constants';
import CustomText from '../CustomText/CustomText';
import SvgIconButton from '../IconButton/SvgIconButton';
import {BackArrowSvg} from '../SVG';

const AvatarAndTitle = ({title, isButton = false, chatCompanion}) => {
    const navigation = useNavigation();

    const backArrowHandler = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonAndTitle}>
                {
                    isButton &&
                    <SvgIconButton
                        onPress={backArrowHandler}
                        wrapperStyle={styles.backBtnWrapper}
                    >
                        <BackArrowSvg height={SIZE.height.h24} width={SIZE.height.h24}/>
                    </SvgIconButton>
                }
                <CustomText textStyle={styles.title}>{title}</CustomText>
            </View>
            <Avatar chatCompanion={chatCompanion}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZE.statusBarMarginTop,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZE.width.w16,
        marginBottom: SIZE.height.h6,
        zIndex: 10,
    },
    buttonAndTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36
    },
    backBtnWrapper: {
        marginTop: SIZE.height.h3,
        width: SIZE.height.h24,
        height: SIZE.height.h24,
        borderRadius: SIZE.borderRadius.br8,
        marginRight: SIZE.width.w15
    }
});

export default AvatarAndTitle;


