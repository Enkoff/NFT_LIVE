import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SaveSvg = ({width =20,height = 20,color = 'white'}) => {
    return (
        <Svg fill={color} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width={width} height={height}>
            <Path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"/>
        </Svg>
    );
};

export default SaveSvg;





