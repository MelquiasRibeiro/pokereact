import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;700&display=swap');
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
body{
    background: #29435B;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
 font: 14px Roboto,sans-serif;
}
button{
    cursor: pointer;
}
`;
