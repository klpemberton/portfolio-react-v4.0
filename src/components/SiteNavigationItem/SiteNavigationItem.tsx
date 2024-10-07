import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FaBriefcase, FaEnvelope, FaExclamationCircle, FaHome, FaUser } from 'react-icons/fa';
import { navData } from '../../constants/navData';
import Link from 'next/link';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Theme } from '../../styles/theme';

interface SiteNavigationItem {
  activeRoute: string;
  isActive: boolean;
  route: string;
}

const NavListItem = styled.li<{ backgroundColor: string; isActive: boolean; position: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  flex-shrink: 0;
  background: ${({ backgroundColor }) => backgroundColor};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    height: 100%;
    width: 4%;
    min-width: 1px;

    ${({ position }) => `left: ${position};`}

    ${({ isActive, position }: { isActive: boolean; position: string }) =>
      isActive && `left: ${position};`}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile.maxWidth}px) {
    ${({ position }) => `top: ${position};`}
    left: 0;
    width: 100%;
    height: 6%;
  }

  a {
    width: 100%;
    height: 100%;
  }
`;

const NavLink = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
`;

const getPosition = (linkRoute: string, activeRoute: string, mobile: boolean) => {
  const linkRouteName = linkRoute === '_error' ? 'error' : linkRoute;
  const activeRouteName = activeRoute === '_error' ? 'error' : activeRoute;
  const screenSize = mobile ? 'mobile' : 'desktop';

  if (linkRouteName === 'error' && activeRouteName === 'error') {
    return mobile ? '0' : '96%';
  }

  if (linkRouteName === 'error' && activeRouteName !== 'error') {
    return null;
  }

  if (linkRouteName === activeRouteName) {
    return mobile ? '0' : '96%';
  }

  return navData[linkRouteName].activeRoute[activeRouteName].position[screenSize];
};

const getIcon = (route: string, iconSize: number) => {
  switch (route) {
    case '/':
      return <FaHome size={iconSize} />;
    case '/about':
      return <FaUser size={iconSize - 3} />;
    case '/contact':
      return <FaEnvelope size={iconSize} />;
    case '/_error':
      return <FaExclamationCircle size={iconSize} />;
    case '/portfolio':
      return <FaBriefcase size={iconSize} />;
    default:
      return null;
  }
};

const SiteNavigationItem = ({ activeRoute, isActive, route }: SiteNavigationItem) => {
  const isMobile = useBreakpoint();
  const linkRoute = route === '/' ? 'home' : route.substring(1);
  const currentRoute = activeRoute === '/' ? 'home' : activeRoute.substring(1);
  const isErrorPage = linkRoute === '_error' && currentRoute === '_error';
  const { colors } = useContext(ThemeContext as React.Context<Theme>);
  const position = getPosition(linkRoute, currentRoute, isMobile);
  const iconSize = !isMobile ? 28 : 19;

  if (linkRoute === '_error' && !isErrorPage) {
    return null;
  }

  return (
    <NavListItem
      backgroundColor={isErrorPage ? colors.error : colors[linkRoute]}
      isActive={isActive}
      position={position}
    >
      <Link key={route} href={route} as={route} passHref>
        <NavLink>{getIcon(route, iconSize)}</NavLink>
      </Link>
    </NavListItem>
  );
};

export default SiteNavigationItem;
