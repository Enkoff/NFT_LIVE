import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {THEME} from '../../../constants';

const ArrowRight = ({width = 19, height = 19,}) => {
    return (
        <Svg width={width} height={height} viewBox="0 -1 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L12.7071 10.7071C13.0976 10.3166 13.0976 9.68342 12.7071 9.29289L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L10.5858 10L8.29289 12.2929Z"
                  fill={THEME.white40} fill-opacity="0.1"/>
        </Svg>
    );
};

export default ArrowRight;

