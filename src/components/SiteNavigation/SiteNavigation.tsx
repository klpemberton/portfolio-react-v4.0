import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SiteNavigationItem from '../SiteNavigationItem';

const Wrapper = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const NavList = styled.ul`
  margin: 0;
`;

const SiteNavigation = () => {
  const router = useRouter();
  const { pathname } = router;
  const navRoutes: string[] = ['/', '/portfolio', '/about', '/contact', '/_error'];

  return (
    <Wrapper>
      <NavList>
        {navRoutes.map((route: string) => {
          return (
            <SiteNavigationItem
              activeRoute={pathname}
              isActive={route === pathname}
              key={route}
              route={route}
            />
          );
        })}
      </NavList>
    </Wrapper>
  );
};

export default SiteNavigation;
