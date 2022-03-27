import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SunSvg = ({width = 20, height = 20, color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10 1.66699C10.4603 1.66699 10.8334 2.04009 10.8334 2.50033V3.33366C10.8334 3.7939 10.4603 4.16699 10 4.16699C9.53978 4.16699 9.16669 3.7939 9.16669 3.33366V2.50033C9.16669 2.04009 9.53978 1.66699 10 1.66699ZM1.66669 10.0003C1.66669 9.54009 2.03978 9.16699 2.50002 9.16699H3.33335C3.79359 9.16699 4.16669 9.54009 4.16669 10.0003C4.16669 10.4606 3.79359 10.8337 3.33335 10.8337H2.50002C2.03978 10.8337 1.66669 10.4606 1.66669 10.0003ZM15.8334 10.0003C15.8334 9.54009 16.2064 9.16699 16.6667 9.16699H17.5C17.9603 9.16699 18.3334 9.54009 18.3334 10.0003C18.3334 10.4606 17.9603 10.8337 17.5 10.8337H16.6667C16.2064 10.8337 15.8334 10.4606 15.8334 10.0003ZM10.8334 16.667C10.8334 16.2068 10.4603 15.8337 10 15.8337C9.53978 15.8337 9.16669 16.2068 9.16669 16.667V17.5003C9.16669 17.9606 9.53978 18.3337 10 18.3337C10.4603 18.3337 10.8334 17.9606 10.8334 17.5003V16.667ZM15.3032 14.125C14.9778 13.7996 14.4501 13.7996 14.1247 14.125C13.7993 14.4505 13.7993 14.9781 14.1247 15.3035L14.714 15.8928C15.0394 16.2182 15.567 16.2182 15.8925 15.8928C16.2179 15.5673 16.2179 15.0397 15.8925 14.7143L15.3032 14.125ZM4.10742 4.10752C4.43286 3.78208 4.96049 3.78208 5.28593 4.10752L5.87519 4.69678C6.20062 5.02221 6.20062 5.54985 5.87519 5.87529C5.54975 6.20073 5.02211 6.20073 4.69668 5.87529L4.10742 5.28603C3.78198 4.9606 3.78198 4.43296 4.10742 4.10752ZM5.28607 15.8928L5.87533 15.3035C6.20076 14.9781 6.20076 14.4505 5.87533 14.125C5.54989 13.7996 5.02225 13.7996 4.69682 14.125L4.10756 14.7143C3.78212 15.0397 3.78212 15.5673 4.10756 15.8928C4.433 16.2182 4.96063 16.2182 5.28607 15.8928ZM15.8926 4.10752C16.2181 4.43296 16.2181 4.9606 15.8926 5.28603L15.3034 5.87529C14.9779 6.20073 14.4503 6.20073 14.1249 5.87529C13.7994 5.54985 13.7994 5.02221 14.1249 4.69678L14.7141 4.10752C15.0395 3.78208 15.5672 3.78208 15.8926 4.10752ZM5.83334 10.0002C5.83334 7.69898 7.69882 5.8335 10 5.8335C12.3012 5.8335 14.1667 7.69898 14.1667 10.0002C14.1667 12.3013 12.3012 14.1668 10 14.1668C7.69882 14.1668 5.83334 12.3013 5.83334 10.0002Z"
                  fill={color}/>
        </Svg>
    );
};

export default SunSvg;