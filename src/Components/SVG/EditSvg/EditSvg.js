import React from 'react';
import Svg, {Path} from 'react-native-svg';

const EditSvg = ({width = 20, height = 20, color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M19.2747 23.9236H24.0575" stroke={color} stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M18.6412 12.7167C19.1939 12.0125 20.0872 12.0492 20.7922 12.602L21.8347 13.4195C22.5397 13.9722 22.7894 14.8295 22.2367 15.5352L16.0199 23.4665C15.8122 23.732 15.4949 23.8887 15.1574 23.8925L12.7597 23.9232L12.2167 21.587C12.1402 21.2592 12.2167 20.9142 12.4244 20.648L18.6412 12.7167Z"
                  stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17.477 14.2019L21.0725 17.0204" stroke={color} stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </Svg>
    );
};

export default EditSvg;





