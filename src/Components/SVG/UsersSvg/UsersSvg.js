import React from 'react';
import Svg, {Path} from 'react-native-svg';

const UsersSvg = ({width = 18, height = 14, color = 'white'}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.95332 0.578125C7.03666 0.578125 5.49713 2.11765 5.49713 4.03431C5.49713 5.95153 7.03653 7.49119 8.95332 7.49119C10.8701 7.49119 12.4095 5.95153 12.4095 4.03431C12.4095 2.11765 10.87 0.578125 8.95332 0.578125ZM8.95332 1.70312C10.2487 1.70312 11.2845 2.73897 11.2845 4.03431C11.2845 5.33026 10.2487 6.36619 8.95332 6.36619C7.65789 6.36619 6.62213 5.33026 6.62213 4.03431C6.62213 2.73897 7.65798 1.70312 8.95332 1.70312ZM4.71749 1.28453C5.02815 1.28453 5.27999 1.53637 5.27999 1.84703C5.27999 2.15769 5.02815 2.40953 4.71749 2.40953C3.82622 2.40953 3.10337 3.13206 3.10337 4.02296C3.10337 4.91387 3.82622 5.6364 4.71749 5.6364C5.02815 5.6364 5.27999 5.88824 5.27999 6.1989C5.27999 6.50956 5.02815 6.7614 4.71749 6.7614C3.20501 6.7614 1.97837 5.5353 1.97837 4.02296C1.97837 2.51063 3.20501 1.28453 4.71749 1.28453ZM15.9353 4.02296C15.9353 2.51063 14.7086 1.28453 13.1962 1.28453C12.8855 1.28453 12.6337 1.53637 12.6337 1.84703C12.6337 2.15769 12.8855 2.40953 13.1962 2.40953C14.0874 2.40953 14.8103 3.13206 14.8103 4.02296C14.8103 4.91387 14.0874 5.6364 13.1962 5.6364C12.8855 5.6364 12.6337 5.88824 12.6337 6.1989C12.6337 6.50956 12.8855 6.7614 13.1962 6.7614C14.7086 6.7614 15.9353 5.5353 15.9353 4.02296ZM15.3719 8.16623C15.0117 8.08495 14.6269 8.02939 14.2355 8.0024C13.9256 7.98102 13.657 8.21494 13.6356 8.52486C13.6143 8.83479 13.8482 9.10336 14.1581 9.12473C14.493 9.14783 14.8212 9.19521 15.1403 9.26702C15.6366 9.3644 15.9601 9.52582 16.0404 9.69408C16.1008 9.82111 16.1008 9.97045 16.0398 10.099C15.9606 10.2656 15.6398 10.4262 15.1505 10.5268C14.8462 10.5894 14.6503 10.8868 14.7128 11.191C14.7754 11.4953 15.0728 11.6913 15.3771 11.6287C16.1858 11.4624 16.7781 11.1659 17.056 10.5817C17.2621 10.1473 17.2621 9.64352 17.0561 9.21027C16.7762 8.6238 16.1736 8.32319 15.3719 8.16623ZM4.278 8.52486C4.25663 8.21494 3.98806 7.98102 3.67813 8.0024C3.28679 8.02939 2.90192 8.08495 2.52634 8.16948L2.3715 8.20223C1.66078 8.36462 1.11857 8.66305 0.858312 9.21019C0.651421 9.64307 0.651421 10.1477 0.858529 10.5821C1.13522 11.1658 1.72755 11.4624 2.53654 11.6287C2.84083 11.6913 3.13823 11.4953 3.20081 11.191C3.26338 10.8868 3.06743 10.5894 2.76313 10.5268C2.27407 10.4262 1.95354 10.2657 1.87454 10.0991C1.813 9.97001 1.813 9.82156 1.87379 9.69438C1.95403 9.52569 2.27725 9.36437 2.75791 9.27027L3.00783 9.21911C3.25697 9.17304 3.50437 9.14205 3.75554 9.12473C4.06546 9.10336 4.29938 8.83479 4.278 8.52486ZM3.87532 10.8884C3.87532 9.09898 5.72627 8.46968 8.95332 8.46968L9.18195 8.47074C12.2741 8.49979 14.0313 9.13054 14.0313 10.8754C14.0313 12.5791 12.3516 13.2315 9.4048 13.2898L8.95332 13.2941C5.71887 13.2941 3.87532 12.6759 3.87532 10.8884ZM12.9063 10.8754C12.9063 10.0425 11.5709 9.59468 8.95332 9.59468C6.33829 9.59468 5.00032 10.0496 5.00032 10.8884C5.00032 11.7214 6.3353 12.1691 8.95332 12.1691C11.5676 12.1691 12.9063 11.7138 12.9063 10.8754Z"
                  fill={color}/>
        </Svg>
    );
};

export default UsersSvg;