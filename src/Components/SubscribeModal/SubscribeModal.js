import React from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';

import ModalCloseButton from '../ModalCloseButton/ModalCloseButton';
import {SIZE, THEME} from '../../constants';
import {
    DiamondOnePng,
    DiamondTwoPng,
    DiamondThreePng,
    EclipseBottomPng,
    EclipseTopPng,
    UnionPng
} from '../../assets';
import CustomText from '../CustomText/CustomText';
import CustomButton from '../CustomBotton/CustomButton';

const subscribeItems = [
    {
        id: '1',
        text: 'How can I edit my NFT in light editor mode?',
    },
    {
        id: '2',
        text: 'Editor mode',
    },
    {
        id: '3',
        text: 'How can I edit my Nht editor mode'
    },
    {
        id: '4',
        text: 'How can'
    },
];

const SubscribeModal = ({setIsModal}) => {

    const subscribeHandler = () => {
        setIsModal(false);
    };

    return (
        <View style={styles.wrapper}>
            <ModalCloseButton setIsModal={setIsModal}/>
            <View style={styles.contentWrapper}>
                <View style={[styles.eclipse, styles.eclipseTop]}>
                    <ImageBackground style={styles.imgBg} resizeMode={'stretch'} source={EclipseTopPng}/>
                </View>
                <View style={[styles.eclipse, styles.eclipseBottom]}>
                    <ImageBackground style={styles.imgBg} resizeMode={'stretch'} source={EclipseBottomPng}/>
                </View>
                <Image style={[styles.diamond, styles.diamondOne]} source={DiamondOnePng}/>
                <Image style={[styles.diamond, styles.diamondTwo]} source={DiamondTwoPng}/>
                <Image style={[styles.diamond, styles.diamondThree]} source={DiamondThreePng}/>
                <View style={styles.centerContentWrapper}>
                    <CustomText textStyle={styles.title}>Get a premium access</CustomText>
                    <CustomText textStyle={styles.subTitle}>FEATURES</CustomText>
                    {
                        subscribeItems.map(({id, text}) => {
                            return (
                                <View style={styles.listItem} key={id}>
                                    <Image source={UnionPng}/>
                                    <CustomText textStyle={styles.listTitle}>{text}</CustomText>
                                </View>
                            );
                        })
                    }
                    <CustomText textStyle={styles.oldPrice}>$19.99</CustomText>
                    <CustomText textStyle={styles.price}>$12.99</CustomText>
                    <View style={styles.subscribeButtonWrapper}>
                        <CustomButton
                            onPress={subscribeHandler}
                            name={'Get it now'}
                            wrapperStyle={styles.subscribeButton}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '75%',
    },
    contentWrapper: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        marginTop: SIZE.height.h20,
        borderRadius: SIZE.borderRadius.br12,
        backgroundColor: THEME.light,
    },
    eclipse: {
        position: 'absolute',
        width: '100%',
        height: '55%'
    },
    eclipseTop: {
        top: 0
    },
    eclipseBottom: {
        bottom: 0
    },
    imgBg: {
        width: '100%',
        height: '100%',
    },
    diamond: {
        position: 'absolute'
    },
    diamondOne: {
        top: '27%',
        left: '8%'
    },
    diamondTwo: {
        top: '5%'
    },
    diamondThree: {
        top: '1%',
        right: '3%'
    },
    centerContentWrapper: {
        marginTop: '60%'
    },
    title: {
        textAlign: 'center',
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36,
        fontWeight: 'bold',
        color: THEME.white,
        marginBottom: '2%'
    },
    subTitle: {
        textAlign: 'center',
        fontSize: SIZE.fontSize.fs16,
        lineHeight: SIZE.lineHeight.lh19,
        color: THEME.white60,
        marginBottom: '6%',
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: SIZE.height.h10
    },
    listTitle: {
        letterSpacing: -0.3,
        color: THEME.white,
        marginLeft: SIZE.width.w10,
    },
    oldPrice: {
        textAlign: 'center',
        color: THEME.white60,
        textDecorationLine: 'line-through'
    },
    price: {
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36,
        color: THEME.white,
        textAlign: 'center',
        marginBottom: SIZE.height.h20
    },
    subscribeButtonWrapper: {
        alignItems: 'center'
    },
    subscribeButton: {
        width: SIZE.width.w121
    }
});

export default SubscribeModal;


