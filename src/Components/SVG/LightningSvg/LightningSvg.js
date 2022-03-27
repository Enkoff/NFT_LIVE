import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LightningSvg = ({width = 20, height = 20, color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.6666 1.66642C11.6666 1.28994 11.4142 0.960216 11.0508 0.861962C10.6873 0.763709 10.3032 0.921329 10.1135 1.24652L4.28014 11.2465C4.12979 11.5043 4.12873 11.8227 4.27734 12.0815C4.42596 12.3402 4.70157 12.4997 4.99996 12.4997H8.33329V18.3331C8.33329 18.7096 8.58571 19.0393 8.94914 19.1375C9.31257 19.2358 9.69675 19.0782 9.88644 18.753L15.7198 8.75297C15.8701 8.49523 15.8712 8.17678 15.7226 7.91803C15.574 7.65929 15.2983 7.49975 15 7.49975H11.6666V1.66642Z"
                  fill={color} fill-opacity="0.6"/>
        </Svg>
    );
};

export default LightningSvg;
