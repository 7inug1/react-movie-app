import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@media only screen {
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      /* added personally */
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
    }
  
    /* added personally from below */
    a {
      text-decoration: none;
      color: black;
    }
  
    button {
      padding: 0;
      border: none;
      background: transparent;
    }
  
    label,
    input[type='radio'],
    button {
      cursor: pointer;
    }
  
    input[type='checkbox'],
    input[type='radio'] {
      margin: 0;
    }
  
    input[type='text'] {
      padding: 0;
      width: 100%;
      height: 100%;
      border: 0 none;
      box-sizing: border-box;
      background: transparent;
    }
  
    textarea {
      width: 100%;
      height: 100%;
      border: 0 none;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
  
    select {
      padding: 0;
      width: 100%;
      height: 100%;
      border: 0 none;
      box-sizing: border-box;
    }
  
    /* for customizing the 'browsing-file' functionality */
    input[type='file'] {
      position: absolute;
      top: -200%;
      left: -200%;
      opacity: 0;
      z-index: -100;
    }
  
    strong,
    .bolder {
      font-weight: bolder;
    }
  }

  .whitespace-remover {
    font-size: 0;
  }
  
  table td {
    vertical-align: top;
  }
`;

export default GlobalStyle;