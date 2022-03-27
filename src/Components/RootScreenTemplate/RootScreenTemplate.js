import React from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';

import CenterLinerGradient from '../CenterLinerGradient/CenterLinerGradient';
import {SIZE} from '../../constants';

const RootScreenTemplate = (
    {
        containerStyle,
        headerComponent,
        children,
        style,
        bottomComponent,
        refreshing,
        onRefresh
    }
) => {
    return (
        <View style={[containerStyle]}>
            {headerComponent}
            <CenterLinerGradient height={1.15}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {children}
            </ScrollView>
            {bottomComponent}
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        zIndex: 5
    }
});

export default RootScreenTemplate;


