import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusInBorderSvg = ({width = 20, height = 20, color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
                stroke={color} stroke-opacity="0.8" stroke-width="1.5"/>
            <Path d="M14.5 12H9.5M12 14.5L12 9.5" stroke={color} stroke-opacity="0.8" stroke-width="1.5"
                  stroke-linecap="round"/>
        </Svg>

    );
};

export default PlusInBorderSvg;





