import { createGlobalStyle } from 'styled-components';
import { black } from 'styles/colors';
import { layoutsm } from 'styles/spacing';

export default createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        line-height: 1;
        outline:none;
        outline-color: none;
        outline-style: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
        display: block;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    body {
        line-height: 1;
        overflow: hidden;
        background-color: ${black};
    }

    #ctaDisplay {
        display: grid;
        grid-template-areas:
            "heading"
            "marquee"
            "arrivals";
        grid-template-rows: 0.25fr 0.06fr 0.69fr;
        height: 100vh;
        width: 100vw;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;