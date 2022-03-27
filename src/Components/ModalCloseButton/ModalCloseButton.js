import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';

import {CloseSvg} from '../SVG';
import {SIZE} from '../../constants';

const ModalCloseButton = ({setIsModal}) => {
    return (
        <TouchableNativeFeedback onPress={() => setIsModal(false)}>
            <View>
                <CloseSvg width={SIZE.height.h24} height={SIZE.height.h24} />
            </View>
        </TouchableNativeFeedback>
    );
};

export default ModalCloseButton;


