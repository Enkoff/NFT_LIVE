import React from 'react';
import Svg, {Path} from 'react-native-svg';

const DeleteSvg = ({width = 20, height = 20, color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M23.4937 16.1011C23.4937 16.1011 23.0865 21.1523 22.8502 23.2801C22.7377 24.2963 22.11 24.8918 21.0817 24.9106C19.125 24.9458 17.166 24.9481 15.21 24.9068C14.2207 24.8866 13.6035 24.2836 13.4932 23.2853C13.2555 21.1388 12.8505 16.1011 12.8505 16.1011"
                stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M24.5312 13.6797H11.8127" stroke={color} stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <Path
                d="M22.0805 13.6797C21.4917 13.6797 20.9847 13.2635 20.8692 12.6867L20.687 11.7747C20.5745 11.354 20.1935 11.063 19.7592 11.063H16.5845C16.1502 11.063 15.7692 11.354 15.6567 11.7747L15.4745 12.6867C15.359 13.2635 14.852 13.6797 14.2632 13.6797"
                stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
};

export default DeleteSvg;