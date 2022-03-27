import React from 'react';
import {StyleSheet, View} from 'react-native';

import {AvatarAndTitle, CustomText, RootScreenTemplate} from '../../Components';
import {SIZE} from '../../constants';

const SettingsScreen = (props) => {
    return (
        <RootScreenTemplate headerComponent={<AvatarAndTitle title={'Settings'} isButton={true}/>}>
            <View style={styles.screen}>
                <CustomText>Тут будуть налаштування користувача</CustomText>
                <CustomText>1)NFT що купува</CustomText>
                <CustomText>2)NFT що продавав</CustomText>
                <CustomText>3)Підписки</CustomText>
                <CustomText>4)Підписники</CustomText>
                <CustomText>5)Загальна сума продажу</CustomText>
                <CustomText></CustomText>
                <CustomText>Можна додати ще щось на ващ вибір вносте пропозиції</CustomText>
            </View>
        </RootScreenTemplate>
    );
};

const styles = StyleSheet.create({
    screen: {
        marginTop: SIZE.statusBarMarginTop,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default SettingsScreen;


