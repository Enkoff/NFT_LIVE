import React from 'react';
import Svg, {Path} from 'react-native-svg';

const UpdateSvg = ({width = 20, height = 20, color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <Path d="M18,20H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z" fill={color}/>
            <Path
                d="M15.92,11.62A1,1,0,0,0,15,11H13V5a1,1,0,0,0-2,0v6H9a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,0,0,15.92,11.62Z"
                fill={color}/>
        </Svg>
    );
};

export default UpdateSvg;