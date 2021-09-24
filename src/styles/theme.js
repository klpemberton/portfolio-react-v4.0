import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';

const theme = {
	breakpoints: {
		desktop: { minWidth: 875 },
		mobile: { maxWidth: 874 }
	},
	colors: {
		contact: '#FF1493',
		about: '#00BFFF',
		portfolio: '#ffe900',
		home: '#836fff',
		error: 'red',
		success: '#22D900',
		midPurple: '#cbc2fd',
		lightPurple: '#ebe8f3'
	},
	fontStacks: {
		montserrat: "'Montserrat', 'helvetica-neue', 'arial', sans-serif"
	}
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

// Use a more modern inheritance-based box-sizing setting:
// https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
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

function camelToHyphen(str) {
	return str
		.replace(/[A-Z]/g, function(m) {
			return '-' + m.toLowerCase();
		})
		.toLowerCase();
}

// Simple cache for the expensive part of `objectToMediaQuery` below.
const mediaQueryCache = new Map();

export function objectToMediaQuery(query) {
	if (typeof query === 'string' || !query) {
		return query;
	}
	const cacheKey = JSON.stringify(query);
	let string = mediaQueryCache.get(cacheKey);
	if (string == null) {
		string = Object.keys(query)
			.map((name) => {
				const feature = camelToHyphen(name);
				let value = query[name];
				if (typeof value === 'boolean') {
					return value ? feature : `not ${feature}`;
				}
				if (
					typeof value === 'number' &&
					/[height|width]$/.test(feature)
				) {
					value = `${value}px`;
				}
				return `(${feature}: ${value})`;
			})
			.join(' and ');

		mediaQueryCache.set(cacheKey, string);
	}
	return string;
}

export function getDesktopMediaQuery() {
	const { mobile, desktop } = theme.breakpoints;
	if (desktop) {
		return objectToMediaQuery(desktop);
	}
	// Invert the mobile media query with `not`.
	return `not all and ${objectToMediaQuery(mobile)}`;
}

/**
 * Media query template that renders only on mobile sizes.
 * Use like:
 *   ${mobile`color: black;`}
 */
export function mobile(...args) {
	return css`
		@media ${(props) =>
				objectToMediaQuery(props.theme.breakpoints.mobile)} {
			${css(...args)};
		}
	`;
}

/**
 * Media query template that renders only on desktop sizes.
 * Use like:
 *   ${desktop`color: black;`}
 */
export function desktop(...args) {
	return css`
		@media ${(props) => getDesktopMediaQuery(props.theme)} {
			${css(...args)};
		}
	`;
}

export function useBreakpoint(query) {
	const mobileQuery = theme.breakpoints.mobile || null;

	if (!mobileQuery) {
		throw new Error('You must define a `breakpoints.mobile` media query.');
	}

	// Defining a specific `desktop` breakpoint is optional; by default it will be
	// the inverse of `mobile`.
	const desktopQuery = theme.breakpoints.desktop || null;

	if (typeof query === 'string' && theme.breakpoints[query] != null) {
		query = theme.breakpoints[query];
	}

	const desktop = useMedia(desktopQuery, true);
	const mobile = useMedia(mobileQuery, !desktop);
	const matches = useMedia(query, false);

	return {
		mobile,
		desktop,
		matches
	};
}

export function useMedia(rawQuery, defaultState = null) {
	const [state, setState] = useState(defaultState);
	const query = objectToMediaQuery(rawQuery);

	useEffect(() => {
		if (query) {
			let mounted = true;
			const mql = window.matchMedia(query);
			const onChange = () => {
				if (!mounted) {
					return;
				}
				setState(mql.matches);
			};
			mql.addListener(onChange);
			setState(mql.matches);

			return () => {
				mounted = false;
				mql.removeListener(onChange);
			};
		}
	}, [defaultState, query]);

	return query ? state : defaultState;
}

export function Theme({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
	children: PropTypes.node
};
