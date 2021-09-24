import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext, css, keyframes } from "styled-components";
import {
	FaBriefcase,
	FaEnvelope,
	FaExclamationCircle,
	FaHome,
	FaUser
} from "react-icons/fa";
import { NavData } from "./navData";
import Link from "next/link";
import { desktop, mobile, useBreakpoint } from "../../styles/theme";

const navSlideDesktop = keyframes`
  from { left: 0%; }
	to {
		left:  ${props => props.position};
		transform: translateX(0%);
	}
`;

const NavListItem = styled.li`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 11;
	background: ${props => props.backgroundColor};

	${desktop`
    ${props => props.position && `left: ${props.position};`}
    height: 100%;
    width: 4%;
  
    ${props =>
		props.isActive &&
		css`
			animation: ${navSlideDesktop} 0.4s linear;
		`};
  `}

	${mobile`
    ${props => props.position && `top: ${props.position};`}
    left: 0;
    width: 100%;
    height: 6%;
  `}
`;

const NavLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	color: white;
	cursor: pointer;
`;

const getPosition = (linkRoute, activeRoute, mobile) => {
	const linkRouteName = linkRoute === "_error" ? "error" : linkRoute;
	const activeRouteName = activeRoute === "_error" ? "error" : activeRoute;
	const screenSize = mobile ? "mobile" : "desktop";

	if (linkRouteName === "error" && activeRouteName === "error") {
		return mobile ? "0" : "96%";
	}

	if (linkRouteName === "error" && activeRouteName !== "error") {
		return null;
	}

	if (linkRouteName === activeRouteName) {
		return mobile ? "0" : "96%";
	}

	return NavData[linkRouteName].activeRoute[activeRouteName].position[
		screenSize
	];
};

export default function SiteNavigationItem({ activeRoute, isActive, route }) {
	const { desktop, mobile } = useBreakpoint();
	const linkRoute = route === "/" ? "home" : route.substring(1);
	const currentRoute =
		activeRoute === "/" ? "home" : activeRoute.substring(1);
	const isErrorPage = linkRoute === "_error" && currentRoute === "_error";
	const { colors } = useContext(ThemeContext);
	const position = getPosition(linkRoute, currentRoute, mobile);
	const iconSize = desktop ? 28 : 22;

	if (linkRoute === "_error" && !isErrorPage) {
		return null;
	}

	const getIcon = route => {
		switch (route) {
			case "/":
				return <FaHome size={iconSize} />;
			case "/about":
				return <FaUser size={iconSize - 3} />;
			case "/contact":
				return <FaEnvelope size={iconSize} />;
			case "/_error":
				return <FaExclamationCircle size={iconSize} />;
			case "/portfolio":
				return <FaBriefcase size={iconSize} />;
			default:
				return null;
		}
	};

	return (
		<NavListItem
			backgroundColor={isErrorPage ? colors.error : colors[linkRoute]}
			isActive={isActive}
			position={position}
			data-desktop={desktop}
		>
			<Link key={route} href={route} as={route} passHref>
				<NavLink>{getIcon(route)}</NavLink>
			</Link>
		</NavListItem>
	);
}

SiteNavigationItem.propTypes = {
	activeRoute: PropTypes.string,
	isActive: PropTypes.bool,
	route: PropTypes.string
};
