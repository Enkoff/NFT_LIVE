import React from 'react';
import {StyleSheet, View} from 'react-native';

import SvgIconButton from '../../IconButton/SvgIconButton';
import {BackArrowSvg} from '../../SVG';
import {SIZE} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const WatchUserDetailHeader = (props) => {
    const navigation = useNavigation();

    const backArrowHandler = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.wrapper}>
            <SvgIconButton
                onPress={backArrowHandler}
                wrapperStyle={styles.backBtnWrapper}
            >
                <BackArrowSvg height={SIZE.height.h24} width={SIZE.height.h24}/>
            </SvgIconButton>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginTop: SIZE.statusBarMarginTop,
        marginBottom: SIZE.height.h24,
        alignItems: 'center',
        paddingHorizontal: SIZE.width.w16
    },
    backBtnWrapper: {
        width: SIZE.height.h24,
        height: SIZE.height.h24,
        borderRadius: SIZE.borderRadius.br8
    },
});

export default WatchUserDetailHeader;


