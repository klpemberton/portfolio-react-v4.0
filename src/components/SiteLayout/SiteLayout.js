import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from '../SiteHead';
import SiteHeader from '../SiteHeader';
import SiteNavigation from '../SiteNavigation';
import { GlobalStyles, Theme, desktop, mobile } from '../../styles/theme';

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: black;
	color: white;
`;

const SiteBody = styled.main`
	position: fixed;
	z-index: 9;
	top: 8%;
	left: 2.5%;
	width: 95%;
	height: 86%;
	${desktop`
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  `}
	${mobile`
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  `}
	overflow: hidden;
`;

export default function SiteLayout({ children }) {
	return (
		<>
			<Head title="Kristine Pemberton" description="Hi!" />
			<Theme>
				<GlobalStyles />
				<Wrapper>
					<SiteHeader />
					<SiteBody>
						<SiteNavigation />
						{children}
					</SiteBody>
				</Wrapper>
			</Theme>
		</>
	);
}

SiteLayout.propTypes = {
	children: PropTypes.node
};
