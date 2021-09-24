import React from 'react';
import styled from 'styled-components';
import PageContent from '../src/components/PageContent';
import ImageGallery from '../src/components/ImageGallery';
import { desktop } from '../src/styles/theme';

const photos = [
	{
		src: '/kp0.jpg',
		width: 5,
		height: 3
	},
	{
		src: '/kp1.jpg',
		width: 4,
		height: 3
	},
	{
		src: '/kp2.jpg',
		width: 3,
		height: 4.5
	},
	{
		src: '/kp3.jpg',
		width: 4,
		height: 3
	},
	{
		src: '/kp4.jpg',
		width: 3,
		height: 4
	}
];

const Heading = styled.h1`
	margin: 10px 0 30px;
	font-size: 34px;
	border-bottom: 3px solid black;

	span {
		border-bottom: 10px solid ${(props) => props.theme.colors.about};
	}
`;
const Content = styled.div`
	display: block;
	${desktop`display: flex;`}
	justify-content: space-between;
`;

const Paragraph = styled.p`
	width: 100%;
	${desktop`width: 100%;`}
`;

const Link = styled.a`
	color: ${(props) => props.theme.colors.about};
	text-decoration: none;
`;

export default function AboutPage() {
	return (
		<PageContent pageTheme="about">
			<Heading>
				<span>About Me</span>
			</Heading>

			<Content>
				<Paragraph>
					I'm Kristine and I'm a web developer. I began creating
					websites as a little kid. Here's my very first site,&nbsp;
					<Link
						href="http://geocities.ws/purrfectpetzplace/"
						target="_blank"
					>
						Purrfect Petz Place
					</Link>
					, based on the old Petz PC games (turn on your ad blocker!
					Someone mirrored the Geocities servers long ago and flooded
					all the sites with ads). Making websites is still
					essentially what I do today, with 10 years of hands-on
					professional experience at major corporations in
					Bloomington, Indiana; San Luis Obispo, California; and Los
					Angeles, California. I'm currently a full-time remote Senior
					Front-end Software Engineer for a well-known fashion company
					based in Los Angeles.
				</Paragraph>

				<Paragraph>
					I am at my happiest when spending time with animals and
					nature. I love anything to do with the great outdoors, and
					am currently obsessed with mountains and mountaineering. I
					love to travel, and in the last 4 years have resided in
					Morro Bay, California; Spokane, Washington; and now
					Washougal, Washington in the beautiful Columbia River Gorge
					National Scenic Area. I'm loving it here in the Pacific
					Northwest and will be spending as much time as possible in
					the stunning Cascades.
				</Paragraph>
			</Content>

			<ImageGallery images={photos} />
		</PageContent>
	);
}
