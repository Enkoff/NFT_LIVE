import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ShareSvg = ({width,height,color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12.5 16.5C13.0967 16.5 13.669 16.2629 14.091 15.841C14.5129 15.419 14.75 14.8467 14.75 14.25C14.75 13.6533 14.5129 13.081 14.091 12.659C13.669 12.2371 13.0967 12 12.5 12C11.9033 12 11.331 12.2371 10.909 12.659C10.4871 13.081 10.25 13.6533 10.25 14.25C10.25 14.8467 10.4871 15.419 10.909 15.841C11.331 16.2629 11.9033 16.5 12.5 16.5Z" stroke={color} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12.5 6C13.0967 6 13.669 5.76295 14.091 5.34099C14.5129 4.91903 14.75 4.34674 14.75 3.75C14.75 3.15326 14.5129 2.58097 14.091 2.15901C13.669 1.73705 13.0967 1.5 12.5 1.5C11.9033 1.5 11.331 1.73705 10.909 2.15901C10.4871 2.58097 10.25 3.15326 10.25 3.75C10.25 4.34674 10.4871 4.91903 10.909 5.34099C11.331 5.76295 11.9033 6 12.5 6Z" stroke={color} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M3.5 11.25C4.09674 11.25 4.66903 11.0129 5.09099 10.591C5.51295 10.169 5.75 9.59674 5.75 9C5.75 8.40326 5.51295 7.83097 5.09099 7.40901C4.66903 6.98705 4.09674 6.75 3.5 6.75C2.90326 6.75 2.33097 6.98705 1.90901 7.40901C1.48705 7.83097 1.25 8.40326 1.25 9C1.25 9.59674 1.48705 10.169 1.90901 10.591C2.33097 11.0129 2.90326 11.25 3.5 11.25V11.25Z" stroke={color} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M10.625 4.875L5.375 7.875" stroke="white" stroke-width="1.125"/>
            <Path d="M5.375 10.125L10.625 13.125" stroke="white" stroke-width="1.125"/>
        </Svg>
    );
};

export default ShareSvg;





