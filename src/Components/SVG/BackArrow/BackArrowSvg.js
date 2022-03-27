import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackArrowSvg = ({width = 25,height = 25,color = 'rgba(255, 255, 255, 0.1)', opacity = '0.1'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 25C2.20625 25 0 22.7937 0 12.5C0 2.20625 2.20625 0 12.5 0C22.7937 0 25 2.20625 25 12.5C25 22.7937 22.7937 25 12.5 25ZM13.8468 7.59676L9.6801 11.7634C9.2733 12.1702 9.2733 12.8298 9.6801 13.2366L13.8468 17.4032C14.2536 17.81 14.9131 17.81 15.3199 17.4032C15.7267 16.9964 15.7267 16.3369 15.3199 15.9301L11.8898 12.5L15.3199 9.0699C15.7267 8.66311 15.7267 8.00356 15.3199 7.59676C14.9131 7.18997 14.2536 7.18997 13.8468 7.59676Z" fill={color} fill-opacity={opacity}/>
        </Svg>
    );
};

export default BackArrowSvg;





