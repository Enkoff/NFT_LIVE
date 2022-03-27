import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {ArrowRight} from '../../SVG';
import {HelpSvg} from '../../../assets';
import {FAQ_GRADIENT, SIZE} from '../../../constants';
import CustomText from '../../CustomText/CustomText';

const FaqBtn = (props) => {
    const navigation = useNavigation();

    const goFAQScreen = () => {
        navigation.navigate('FaqScreen');
    };

    return (
        <View style={styles.wrapper}>
            <LinearGradient
                colors={[FAQ_GRADIENT.lightGreen, FAQ_GRADIENT.lightBlue, FAQ_GRADIENT.blue]}
                style={styles.linearGradient}
            >
                <View style={styles.leftContentWrapper}>
                    <CustomText textStyle={styles.faqText}>FAQ</CustomText>
                    <TouchableOpacity onPress={goFAQScreen} activeOpacity={.8} style={styles.arrowRightWrapper}>
                        <ArrowRight width={SIZE.height.h21} height={SIZE.height.h21}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={goFAQScreen} style={styles.help} activeOpacity={.8}>
                    <HelpSvg width={SIZE.height.h150} height={SIZE.height.h150} />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZE.height.h150,
        marginHorizontal: SIZE.width.w16,
        marginTop: SIZE.height.h10,
        borderRadius: SIZE.borderRadius.br24,
        overflow: 'hidden',
        marginBottom: SIZE.height.h16,

    },
    linearGradient: {
        width: '100%',
        height: SIZE.width.w370,
        transform: [{rotate: '90deg'}],
        position: 'relative',
    },
    faqText: {
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36,
    },
    leftContentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top:SIZE.width.w290,
        left: SIZE.width.w42,
        transform: [{rotate: '-90deg'}],
    },
    arrowRightWrapper: {
        paddingTop: SIZE.height.h6,
        marginLeft: SIZE.width.w10
    },
    help: {
        transform: [{rotate: "-90deg"}],
        right: 1,
        bottom: SIZE.width.w135
    },
});

export default FaqBtn;


