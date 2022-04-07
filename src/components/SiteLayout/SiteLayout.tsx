import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import Head from '../SiteHead';
import SiteHeader from '../SiteHeader';
import SiteNavigation from '../SiteNavigation';
import { useRouter } from 'next/router';
import { GlobalStyles, Theme } from '../../styles/theme';
import useBreakpoint from '../../hooks/useBreakpoint';

const navSlideDesktop = () => {
  return keyframes`
    from { 
      width: 12%; 
    }
    to {
      width: 95%;
    } 
  `;
};

const navSlideMobile = () => {
  return keyframes`
    from { 
      height: 12%; 
    }
    to {
      height: 86%;
    } 
  `;
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
  color: white;
`;

const SiteBody = styled.main<{ mobile: boolean }>`
  position: fixed;
  z-index: 9;
  top: 8%;
  left: 2.5%;
  width: 95%;
  animation: ${({ mobile }) => (mobile ? navSlideMobile : navSlideDesktop)} 0.4s linear;
  height: 86%;
  overflow: hidden;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 0;
  }
`;

const SiteLayout = ({ children }: { children: ReactNode }) => {
  const { mobile } = useBreakpoint();
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head
        title="Kristine Pemberton"
        description="Welcome to my personal portfolio site and testing ground for new technologies and ideas."
      />
      <Theme>
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //  @ts-ignore *
          <GlobalStyles />
        }
        <Wrapper>
          <SiteHeader />
          <SiteBody key={pathname} mobile={mobile}>
            <SiteNavigation />
            {children}
          </SiteBody>
        </Wrapper>
      </Theme>
    </>
  );
};

export default SiteLayout;
