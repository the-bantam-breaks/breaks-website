import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        src: local('Open Sans Light'), local('OpenSans-Light'), url(fonts/OpenSans-light.woff) format('woff');
    }
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Open Sans'), local('OpenSans'), url(fonts/OpenSans.woff) format('woff');
    }
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url(fonts/OpenSans-semibold.woff) format('woff');
    }
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        src: local('Open Sans Bold'), local('OpenSans-Bold'), url(fonts/OpenSans-bold.woff) format('woff');
    }
    body {
        font-family: 'Open Sans', 'sans-serif';
    }
    #app {
        overflow-x: hidden;
    }
 `;
