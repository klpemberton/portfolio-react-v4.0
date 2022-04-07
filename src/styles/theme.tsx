import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';

export interface Theme {
  breakpoints: {
    desktop: {
      minWidth: number;
    };
    mobile: {
      maxWidth: number;
    };
  };
  colors: {
    [key: string]: string;
  };
  fontStacks: {
    [key: string]: string;
  };
}

export const theme: Theme = {
  breakpoints: {
    desktop: { minWidth: 875 },
    mobile: { maxWidth: 874 },
  },
  colors: {
    contact: '#FF1493',
    about: '#00BFFF',
    portfolio: '#ffe900',
    home: '#836fff',
    error: 'red',
    success: '#22D900',
    midPurple: '#cbc2fd',
    lightPurple: '#ebe8f3',
  },
  fontStacks: {
    montserrat: "'Montserrat', 'helvetica-neue', 'arial', sans-serif",
  },
};

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }


  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 0;
    font-size: 17px;
    line-height: 1.4;
    font-family: ${theme.fontStacks.montserrat};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fontStacks.montserrat};
    font-weight: 900;
    text-transform: uppercase
  }

  h1 {
    font-size: 34px;
    border-bottom: 3px solid black;
  }

  h2 {
    font-size: 24px;
    border-bottom: 2px solid black;
  }

  h3 {
    font-size: 17px;
  }

  h4 {
    font-size: 16px;
  }

  a {
  }
  
  p {
    font-size: 17px;
  }

  input,
  textarea {
    font: 18px/24px 'Montserrat';
    border: none;
    border-left: 5px solid ${theme.colors.contact};
    outline: none;
    background: white;
    color: black;

    &:focus {
      outline: none;
      background: black;
      color: white;
      border: 5px solid ${theme.colors.contact};
    }
  }

  input {
    width: 100%;
    height: 55px;
    padding: 10px;
  }
  
  textarea {
    display: block;
    width: 100%;
    height: 100px;
    padding: 10px;
    resize: vertical;

    + span {
      left: 0;
      height: 100px;
    }
  }

  button {
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    background: ${theme.colors.contact};
    color: black;
    border: 5px solid ${theme.colors.contact};
    font: 20px/24px ${theme.fontStacks.montserrat};
    cursor: pointer;
    transition: .3s all ease-in-out;

    &:disabled {
      opacity: .5;

      &:hover {
        background: black;
				color: white;
        cursor: not-allowed;
      }
    }
  }
`;

export const globalBorderBox = css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export const globalReset = css`
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  form,
  fieldset,
  label {
    margin: 0;
    padding: 0;
  }
`;

export function Theme({ children }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node,
};
