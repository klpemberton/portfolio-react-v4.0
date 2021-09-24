import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = styled.header`
	display: flex;
	position: absolute;
	top: 1%;
	left: 2.5%;
	width: 95%;
	height: 6%;
	margin: 0 auto;
	justify-content: space-between;
	align-items: flex-end;
	background: black;
	color: white;
`;

const Logo = styled.a`
	display: flex;
	align-items: flex-end;
	text-decoration: none;
	color: white;
`;

const HiddenText = styled.span`
	display: inline-block;
	width: 0;
	height: 31px;
	overflow: hidden;
	transition: width 0.5s linear;
`;

const Expander = styled.div`
	width: auto;
	height: 30px;
	margin: 0 0;
	padding: 0 0;
	font-size: 30px;
	font-family: 'Montserrat';
	font-weight: bold;
	text-transform: uppercase;
	cursor: pointer;

	&:hover {
		${HiddenText} {
			width: 140px;
			&:last-child {
				width: 200px;
			}
		}
	}
`;

const SocialLinks = styled.div`
	display: flex;
`;

const SocialLink = styled.a`
	display: flex;
	align-items: flex-end;
	margin-left: 10px;
	color: white;
`;

export default function SiteHeader() {
	return (
		<Header>
			<Logo href="/">
				<Expander>
					K<HiddenText>ristine</HiddenText>P
					<HiddenText>emberton</HiddenText>
				</Expander>
			</Logo>

			<SocialLinks>
				<SocialLink
					href="https://github.com/klpemberton"
					target="_blank"
				>
					<FaGithub size={30} />
				</SocialLink>
				<SocialLink
					href="https://www.linkedin.com/in/klpemberton/"
					target="_blank"
				>
					<FaLinkedin size={30} />
				</SocialLink>
			</SocialLinks>
		</Header>
	);
}
