import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<{ theme: any }>`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Open Sans', sans-serif;
}
body {
    background-color: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.text};
}
`;
