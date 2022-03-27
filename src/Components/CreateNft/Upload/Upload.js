import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import {CloseSvg} from '../../SVG';
import {SIZE, THEME} from '../../../constants';

const Upload = ({uploadImage, setUploadImage}) => {
    return (
        <>
            <Image style={styles.img}
                   source={{uri: uploadImage}}
            />
            <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={() => setUploadImage(null)}>
                <CloseSvg width={SIZE.height.h24} height={SIZE.height.h24}/>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
    },
    btn: {
        position: 'absolute',
        bottom: SIZE.height.h6,
        borderRadius: SIZE.borderRadius.br12,
        backgroundColor: THEME.black50
    }
});

export default Upload;


