import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusSvg = ({width = 32, height = 32, color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M16 8V24" stroke={color} stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M8 16H24" stroke={color} stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
};

export default PlusSvg;


