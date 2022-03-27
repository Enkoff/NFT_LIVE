import React from 'react';
import Svg, {Path} from 'react-native-svg';

const TopArrowSvg = ({width = 12,height = 18, color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.99989 17.3284L4.99989 17.3284L4.99989 4.50006L1.75737 7.74258L0.343153 6.32837L6.00001 0.671514L11.6569 6.32837L10.2426 7.74258L6.99989 4.49983L6.99989 17.3284Z" fill={color}/>
        </Svg>
    );
};

export default TopArrowSvg;