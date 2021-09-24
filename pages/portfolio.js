import React from 'react';
import styled from 'styled-components';
import PageContent from '../src/components/PageContent';
import ImageGallery from '../src/components/ImageGallery';
import { desktop } from '../src/styles/theme';

const photos = [
	{
		src: '/bira.png',
		width: 4,
		height: 3
	},
	{
		src: '/longslanding.jpg',
		width: 3,
		height: 5
	},

	{
		src: '/salad.jpg',
		width: 4,
		height: 3
	},

	{
		src: '/vance.png',
		width: 3,
		height: 3
	},
	{
		src: '/vintwearhouse.png',
		width: 5,
		height: 3
	},
	{
		src: '/eldercare.jpg',
		width: 3,
		height: 4
	},
	{
		src: '/dancecircus.jpg',
		width: 4,
		height: 3
	},
	{
		src: '/walters.png',
		width: 5,
		height: 3
	}
];

const Heading = styled.h1`
	margin: 10px 0 30px;
	font-size: 34px;
	border-bottom: 3px solid black;

	span {
		border-bottom: 10px solid ${(props) => props.theme.colors.portfolio};
	}
`;

const Paragraph = styled.p``;

const Subheading = styled.h2`
	width: 65%;
	margin: 40px auto 20px;
	text-align: center;

	span {
		border-bottom: 6px solid ${(props) => props.theme.colors.portfolio};
	}
`;

const WebItem = styled.div`
	margin-top: 40px;
`;

const WebItemName = styled.h3``;

const WebItemLink = styled.a`
	color: black;
	text-decoration: none;
	border-bottom: 3px solid ${(props) => props.theme.colors.portfolio};
`;

const WebItemInfo = styled.div`
	margin-left: 0;
	${desktop`margin-left: 40px;`}
`;

export default function PortfolioPage() {
	return (
		<PageContent pageTheme="portfolio">
			<Heading>
				<span>Portfolio</span>
			</Heading>

			<Paragraph>
				In my day job, I develop and maintain sites and tools that are
				viewed by millions of users daily for fast fashion brands
				JustFab and ShoeDazzle. Examples of my freelance work are
				presented below.
			</Paragraph>

			<Subheading>
				<span>Web</span>
			</Subheading>
			<WebItem>
				<WebItemName>
					<WebItemLink
						href="https://kristinepemberton.com"
						target="_blank"
					>
						kristinepemberton.com
					</WebItemLink>
				</WebItemName>

				<WebItemInfo>
					<strong>Tools Used:</strong> React 16.9.0
					<br />
					<strong>Summary:</strong> You are here! This is my personal
					portfolio site and testing ground for new technologies and
					ideas.
				</WebItemInfo>
			</WebItem>

			<WebItem>
				<WebItemName>
					<WebItemLink href="https://sloacademy.com" target="_blank">
						SLO Academy
					</WebItemLink>
				</WebItemName>

				<WebItemInfo>
					<strong>Tools Used:</strong> JavaScript, PHP
					<br />
					<strong>Summary:</strong> SLO Academy provides professional
					tutoring and test prepservices in SLO County and online.
				</WebItemInfo>
			</WebItem>

			<WebItem>
				<WebItemName>
					<WebItemLink
						href="http://monroeprosecutor.us"
						target="_blank"
					>
						Monroe County Prosecutor
					</WebItemLink>
				</WebItemName>

				<WebItemInfo>
					<strong>Tools Used:</strong> WordPress
					<br />
					<strong>Summary:</strong> The official website of the Monroe
					County Prosecutor, Monroe County, Indiana.
				</WebItemInfo>
			</WebItem>

			<Subheading>
				<span>Print</span>
			</Subheading>
			<Paragraph>
				I also know my way around PhotoShop and InDesign. Here's some
				stuff I've designed.
			</Paragraph>

			<ImageGallery images={photos} />
		</PageContent>
	);
}
