import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme.ts'

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('../assets/fonts/Poppins-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('../assets/fonts/Poppins-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }
    
    body {
    margin: 0;
    font-family: 'Poppins',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
a {
    text-decoration: none;
}
ul {
    list-style: none;
}

button  {
    background-color: unset;
    border: none;
}

section:not(:nth-of-type(2)){
    background-color: ${theme.colors.mainBgColor};
}

`
