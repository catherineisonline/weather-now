import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
}
html,
body {
    height: 100%;
}
body {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}
body::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}

img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}
img {
    display: block;
}

ul,
ol,
li {
    padding: 0;
    margin: 0;
}
input,
button,
textarea,
select {
    font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}

#root,
#__next {
    isolation: isolate;
}

.hidden-label {
    display: none;
}
`;




export default GlobalStyles;