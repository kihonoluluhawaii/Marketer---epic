import { css, Global } from '@emotion/react';

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html,
    body {
        font-family: 'Roboto', sans-serif;
    }
`;

const GlobalStyles = () => {
    return <Global styles={globalStyles} />;
};
export default GlobalStyles;
