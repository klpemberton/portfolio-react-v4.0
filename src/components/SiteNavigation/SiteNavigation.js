import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SiteNavigationItem from '../SiteNavigationItem';

const Wrapper = styled.nav`
	position: absolute;
	width: 100%;
	height: 100%;
	flex-direction: row;
	justify-content: flex-end;
`;

const NavList = styled.ul`
	margin: 0;
`;

export default function SiteNavigation() {
	const router = useRouter();
	const { pathname } = router;
	const navRoutes = ['/', '/portfolio', '/about', '/contact', '/_error'];

	return (
		<Wrapper>
			<NavList>
				{navRoutes.map((route) => {
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
}
