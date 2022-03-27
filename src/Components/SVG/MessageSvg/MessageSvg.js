import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MessageSvg = ({width = 24,height = 24,color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M12.3142 19.4902L11.6158 19.217L12.3142 19.4902ZM3.77909 14.1378L3.04815 14.3058L3.77909 14.1378ZM3.77571 9.22642L3.04477 9.05841L3.77571 9.22642ZM20.2476 9.44741L20.9786 9.2794L20.2476 9.44741ZM20.2476 13.9021L19.5167 13.7341L20.2476 13.9021ZM9.31593 20.8233L9.61076 20.1337L9.61076 20.1337L9.31593 20.8233ZM9.68953 3.27141L9.86413 4.00081H9.86413L9.68953 3.27141ZM14.283 3.27141L14.1084 4.00081L14.283 3.27141ZM9.19777 20.7728L8.90294 21.4624H8.90294L9.19777 20.7728ZM14.6641 3.36264L14.8387 2.63325L14.6641 3.36264ZM20.1588 9.06088L19.4279 9.22889V9.22889L20.1588 9.06088ZM9.46648 3.32481L9.29188 2.59541V2.59541L9.46648 3.32481ZM8.69628 8.30793C8.28207 8.30793 7.94628 8.64372 7.94628 9.05793C7.94628 9.47215 8.28207 9.80793 8.69628 9.80793V8.30793ZM14.7279 9.80793C15.1422 9.80793 15.4779 9.47215 15.4779 9.05793C15.4779 8.64372 15.1422 8.30793 14.7279 8.30793V9.80793ZM8.69628 11.7641C8.28207 11.7641 7.94628 12.0999 7.94628 12.5141C7.94628 12.9283 8.28207 13.2641 8.69628 13.2641V11.7641ZM12.5346 13.2641C12.9488 13.2641 13.2846 12.9283 13.2846 12.5141C13.2846 12.0999 12.9488 11.7641 12.5346 11.7641V13.2641ZM9.64108 4.0542L9.86413 4.00081L9.51493 2.54202L9.29188 2.59541L9.64108 4.0542ZM14.1084 4.00081L14.4895 4.09204L14.8387 2.63325L14.4576 2.54202L14.1084 4.00081ZM9.61076 20.1337L9.4926 20.0832L8.90294 21.4624L9.0211 21.5129L9.61076 20.1337ZM19.4279 9.22889L19.5167 9.61542L20.9786 9.2794L20.8897 8.89287L19.4279 9.22889ZM14.1721 18.1768H13.1107V19.6768H14.1721V18.1768ZM13.1107 18.1768C12.4324 18.1768 11.8529 18.6108 11.6158 19.217L13.0127 19.7634C13.0406 19.6921 13.092 19.6768 13.1107 19.6768V18.1768ZM4.51003 13.9698C4.16535 12.4702 4.16244 10.8919 4.50665 9.39443L3.04477 9.05841C2.64926 10.7791 2.65311 12.5871 3.04815 14.3058L4.51003 13.9698ZM19.5167 9.61542C19.8278 10.9687 19.8278 12.3808 19.5167 13.7341L20.9786 14.0701C21.3405 12.4957 21.3405 10.8538 20.9786 9.2794L19.5167 9.61542ZM9.0211 21.5129C10.6131 22.1936 12.3891 21.3576 13.0127 19.7634L11.6158 19.217C11.2766 20.084 10.365 20.4561 9.61076 20.1337L9.0211 21.5129ZM9.86413 4.00081C11.2611 3.6664 12.7114 3.6664 14.1084 4.00081L14.4576 2.54202C12.8311 2.15266 11.1415 2.15266 9.51493 2.54202L9.86413 4.00081ZM9.4926 20.0832C7.01453 19.0237 5.14644 16.7384 4.51003 13.9698L3.04815 14.3058C3.78571 17.5145 5.95924 20.2039 8.90294 21.4624L9.4926 20.0832ZM19.5167 13.7341C18.912 16.3647 16.6859 18.1768 14.1721 18.1768V19.6768C17.4318 19.6768 20.2281 17.3351 20.9786 14.0701L19.5167 13.7341ZM14.4895 4.09204C16.91 4.67142 18.8349 6.64932 19.4279 9.22889L20.8897 8.89287C20.1765 5.78984 17.8441 3.35266 14.8387 2.63325L14.4895 4.09204ZM9.29188 2.59541C6.18969 3.338 3.78134 5.85397 3.04477 9.05841L4.50665 9.39443C5.1229 6.71346 7.12384 4.65676 9.64108 4.0542L9.29188 2.59541ZM8.69628 9.80793H14.7279V8.30793H8.69628V9.80793ZM8.69628 13.2641H12.5346V11.7641H8.69628V13.2641Z"
                fill={color} fill-opacity="0.4"/>
        </Svg>
    );
};

export default MessageSvg;

