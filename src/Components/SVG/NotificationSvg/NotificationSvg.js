import React from 'react';
import Svg, {Path} from 'react-native-svg';

const NotificationSvg = ({width, height, color}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M6.0091 15.9034L6.09289 15.1581L5.19556 15.0572L5.26108 15.9578L6.0091 15.9034ZM11.9909 15.9034L12.7389 15.9578L12.8044 15.0572L11.9071 15.1581L11.9909 15.9034ZM11.9001 16.4772L12.6285 16.6563L11.9001 16.4772ZM11.8182 16.8106L11.0899 16.6315L11.8182 16.8106ZM9.70388 18.917L9.87837 19.6464H9.87837L9.70388 18.917ZM8.29612 18.917L8.12163 19.6464H8.12163L8.29612 18.917ZM6.18182 16.8106L5.45352 16.9896L6.18182 16.8106ZM6.09985 16.4772L6.82816 16.2981H6.82816L6.09985 16.4772ZM3.0278 6.63259L3.7517 6.82873L3.0278 6.63259ZM7.15838 2.30223L7.38965 3.01568L7.15838 2.30223ZM2.4375 8.81121L1.7136 8.61507L1.70896 8.63218L1.70514 8.64949L2.4375 8.81121ZM1.9702 10.9275L2.70255 11.0892V11.0892L1.9702 10.9275ZM3.28759 15.4572L3.43731 14.7223L3.28759 15.4572ZM3.65518 15.5321L3.8049 14.7971H3.8049L3.65518 15.5321ZM14.3448 15.5321L14.1951 14.7971H14.1951L14.3448 15.5321ZM14.7124 15.4572L14.8621 16.1921L14.7124 15.4572ZM16.0298 10.9275L15.2974 11.0892V11.0892L16.0298 10.9275ZM15.5625 8.81121L16.2949 8.64949L16.2917 8.63512L16.2879 8.62088L15.5625 8.81121ZM14.9793 6.58835L14.2539 6.77868L14.9793 6.58835ZM10.9671 2.30838L11.2023 1.59621V1.59621L10.9671 2.30838ZM16.4728 12.9094L15.7318 13.0254L16.4728 12.9094ZM1.52719 12.9094L0.786216 12.7934L1.52719 12.9094ZM9.75 1C9.75 0.585786 9.41421 0.25 9 0.25C8.58579 0.25 8.25 0.585786 8.25 1H9.75ZM8.25 2.00474C8.25 2.41895 8.58579 2.75474 9 2.75474C9.41421 2.75474 9.75 2.41895 9.75 2.00474H8.25ZM5.92531 16.6487C7.9687 16.8784 10.0313 16.8784 12.0747 16.6487L11.9071 15.1581C9.97508 15.3753 8.02492 15.3753 6.09289 15.1581L5.92531 16.6487ZM12.6285 16.6563C12.6849 16.4268 12.7218 16.1932 12.7389 15.9578L11.2429 15.849C11.2319 16.0003 11.2081 16.1506 11.1718 16.2981L12.6285 16.6563ZM12.5465 16.9896L12.6285 16.6563L11.1718 16.2981L11.0899 16.6315L12.5465 16.9896ZM9.87837 19.6464C11.1945 19.3315 12.223 18.3052 12.5465 16.9896L11.0899 16.6315C10.8997 17.4047 10.2965 18.004 9.52939 18.1875L9.87837 19.6464ZM8.12163 19.6464C8.69912 19.7845 9.30088 19.7845 9.87837 19.6464L9.52939 18.1875C9.18131 18.2708 8.81869 18.2708 8.47061 18.1875L8.12163 19.6464ZM5.45352 16.9896C5.77701 18.3052 6.80549 19.3315 8.12163 19.6464L8.47061 18.1875C7.70352 18.004 7.10025 17.4047 6.91013 16.6315L5.45352 16.9896ZM5.37155 16.6563L5.45352 16.9896L6.91013 16.6315L6.82816 16.2981L5.37155 16.6563ZM5.26108 15.9578C5.2782 16.1932 5.31512 16.4268 5.37155 16.6563L6.82816 16.2981C6.79188 16.1506 6.76814 16.0003 6.75712 15.849L5.26108 15.9578ZM3.7517 6.82873C4.23925 5.02931 5.62052 3.58915 7.38965 3.01568L6.92711 1.58877C4.67951 2.31734 2.92499 4.14416 2.3039 6.43645L3.7517 6.82873ZM3.1614 9.00735L3.7517 6.82873L2.3039 6.43645L1.7136 8.61507L3.1614 9.00735ZM2.70255 11.0892L3.16986 8.97292L1.70514 8.64949L1.23784 10.7658L2.70255 11.0892ZM2.25 13.2604C2.25 13.1799 2.25626 13.1015 2.26817 13.0254L0.786216 12.7934C0.762331 12.946 0.75 13.102 0.75 13.2604H2.25ZM3.43731 14.7223C2.74893 14.582 2.25 13.9725 2.25 13.2604H0.75C0.75 14.6807 1.74616 15.9085 3.13787 16.1921L3.43731 14.7223ZM3.8049 14.7971L3.43731 14.7223L3.13787 16.1921L3.50547 16.267L3.8049 14.7971ZM14.1951 14.7971C10.7666 15.4956 7.23343 15.4956 3.8049 14.7971L3.50547 16.267C7.13159 17.0057 10.8684 17.0057 14.4945 16.267L14.1951 14.7971ZM14.5627 14.7223L14.1951 14.7971L14.4945 16.267L14.8621 16.1921L14.5627 14.7223ZM15.75 13.2604C15.75 13.9725 15.2511 14.582 14.5627 14.7223L14.8621 16.1921C16.2538 15.9085 17.25 14.6807 17.25 13.2604H15.75ZM15.7318 13.0254C15.7437 13.1015 15.75 13.1799 15.75 13.2604H17.25C17.25 13.102 17.2377 12.946 17.2138 12.7934L15.7318 13.0254ZM14.8301 8.97292L15.2974 11.0892L16.7622 10.7658L16.2949 8.64949L14.8301 8.97292ZM14.2539 6.77868L14.8371 9.00154L16.2879 8.62088L15.7047 6.39802L14.2539 6.77868ZM10.7319 3.02054C12.4622 3.592 13.7887 5.00574 14.2539 6.77868L15.7047 6.39802C15.1113 4.13594 13.4174 2.32779 11.2023 1.59621L10.7319 3.02054ZM7.38965 3.01568C8.47401 2.66418 9.65283 2.66417 10.7319 3.02054L11.2023 1.59621C9.81705 1.13872 8.31142 1.14004 6.92711 1.58877L7.38965 3.01568ZM17.2138 12.7934C17.1066 12.1089 16.8899 11.3445 16.7622 10.7658L15.2974 11.0892C15.4575 11.8142 15.6325 12.3907 15.7318 13.0254L17.2138 12.7934ZM1.23784 10.7658C1.11006 11.3445 0.893354 12.1089 0.786216 12.7934L2.26817 13.0254C2.36752 12.3907 2.54246 11.8142 2.70255 11.0892L1.23784 10.7658ZM8.25 1V2.00474H9.75V1H8.25Z"
                fill={color} fill-opacity="0.4"/>
        </Svg>
    );
};

export default NotificationSvg;


