import { DefaultTheme } from 'styled-components';
import Colors from './colors';

const customTheme: DefaultTheme = {
    colors: {
        white: Colors.white,
        black: Colors.black,
        accent: Colors.purple,
        error: Colors.red,
        grey: Colors.grey,
        greyDark: Colors.greyDark
    },
    backgroundGradient: `
        background: rgb(212,191,252);
        background: linear-gradient(144deg, rgba(212,191,252,1) 0%, rgba(164,198,252,1) 100%);
    `
};

export default customTheme;
