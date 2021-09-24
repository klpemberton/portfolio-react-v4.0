import React from 'react';
import styled from 'styled-components';
import PageContent from '../src/components/PageContent';

const Heading = styled.h1`
	margin: 10px 0;
	font-size: 34px;
	border-bottom: 3px solid black;

	span {
		border-bottom: 10px solid ${(props) => props.theme.colors.error};
	}
`;

const ErrorMessage = styled.p`
	margin: 40px auto 20px;
`;

export default function ErrorPage() {
	return (
		<PageContent pageTheme="error">
			<Heading>
				<span>Womp Womp</span>
			</Heading>
			<ErrorMessage>
				Not sure how you've managed this, yet here you are. Use the
				giant clickable links at left to find an actual page.
			</ErrorMessage>
		</PageContent>
	);
}
